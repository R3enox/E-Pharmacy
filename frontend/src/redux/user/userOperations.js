import { createAsyncThunk } from '@reduxjs/toolkit';
import API, { setAuthToken } from '../../services/axios';
import { toastError } from '../../helpers/toast';

export const logInThunk = createAsyncThunk(
  'user/login',
  async (formData, thunkApi) => {
    try {
      const { data } = await API.post('/user/login', formData);
      setAuthToken(data.accessToken);
      return data;
    } catch (error) {
      toastError(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'user/logout',
  async (_, thunkApi) => {
    try {
      const { data } = await API.post('/user/logout');

      return data;
    } catch (error) {
      toastError(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/user-info',
  async (_, { getState, rejectWithValue }) => {
    try {
      const persistedAccessToken = getState().user.accessToken;
      if (persistedAccessToken === null) {
        return rejectWithValue('Unable to fetch user info');
      }

      setAuthToken(persistedAccessToken);
      const { data } = await API.get('/user/user-info');

      return data;
    } catch (error) {
      toastError(error.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);
