import axios from 'axios';
import { store } from '../redux/store';
import { setTokens } from '../redux/user/userReducer';

const instance = axios.create({
  baseURL: 'https://e-pharmacy-8rjm.onrender.com/api',
});

export const setAuthToken = (token) => {
  instance.defaults.headers.common.authorization = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  instance.defaults.headers.common.authorization = '';
};

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const hasForbiddenRoutes =
      error.request.responseURL.includes('login') ||
      error.request.responseURL.includes('refresh');

    if (error.response?.status === 401 && !hasForbiddenRoutes) {
      try {
        const refreshToken = store.getState().user.refreshToken;
        setAuthToken(refreshToken);

        const { data } = await instance.get('/user/refresh');

        setAuthToken(data.accessToken);
        store.dispatch(setTokens(data));
        error.config.headers.authorization = `Bearer ${data.accessToken}`;

        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
