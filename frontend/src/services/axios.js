import axios from 'axios';
import { store } from '../redux/store';
import { setTokens } from '../redux/user/userReducer';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const setAuthToken = (token) => {
  instance.defaults.headers.common.authorization = `Bearer ${token}`;
};

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const hasForbiddenRoutes =
      error.request.responseURL.includes('signin') ||
      error.request.responseURL.includes('refresh');

    if (error.response.status === 401 && hasForbiddenRoutes) {
      try {
        const refreshToken = store.getState().user.refreshToken;
        setAuthToken(refreshToken);

        const { data } = await instance.get('/users/current/refresh');

        setAuthToken(data.token);
        store.dispatch(setTokens(data));
        error.config.headers.authorization = `Bearer ${data.token}`;

        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const clearAuthToken = () => {
  instance.defaults.headers.common.authorization = '';
};

export default instance;
