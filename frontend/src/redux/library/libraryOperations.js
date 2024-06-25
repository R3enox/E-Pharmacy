import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../services/axios';
import { toastError } from '../../helpers/toast';

export const addLibrary = createAsyncThunk(
  'books/add/id',
  async (id, thunkApi) => {
    try {
      const { data } = await API.post(`books/add/${id}`);
      return data;
    } catch (error) {
      toastError(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addBook = createAsyncThunk(
  'books/add',
  async (formData, thunkApi) => {
    try {
      const { data } = await API.post(`books/add/`, formData);
      return data;
    } catch (error) {
      toastError(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getLibrary = createAsyncThunk('books/own', async (_, thunkApi) => {
  try {
    const { data } = await API.get('books/own');
    return data;
  } catch (error) {
    toastError(error.response.data.message);
    return thunkApi.rejectWithValue(error.message);
  }
});

export const removeLibraryBook = createAsyncThunk(
  'books/remove',
  async (id, thunkApi) => {
    try {
      const { data } = await API.delete(`books/remove/${id}`);
      return data;
    } catch (error) {
      toastError(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
