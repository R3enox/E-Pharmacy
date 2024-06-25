import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../services/axios';
import { toastError } from '../../helpers/toast';

export const getDashboardThunk = createAsyncThunk(
  'dashboard/',
  async (id, thunkApi) => {
    try {
      const { data } = await API.get(`dashboard/`);
      return data;
    } catch (error) {
      toastError(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
