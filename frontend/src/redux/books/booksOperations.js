import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../services/axios';
import { toastError } from '../../helpers/toast';

export const recommendThunk = createAsyncThunk(
  'books/recommended',
  async ({ title, author, page, per_page }, thunkApi) => {
    try {
      const { data } = await API.get(
        `/books/recommend?title=${title}&author=${author}&page=${page}&limit=${per_page}`
      );
      return data;
    } catch (error) {
      toastError(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getBookThunk = createAsyncThunk('books/', async (id, thunkApi) => {
  try {
    const { data } = await API.get(`books/${id}`);
    return data;
  } catch (error) {
    toastError(error.response.data.message);
    return thunkApi.rejectWithValue(error.message);
  }
});

export const readingStartThunk = createAsyncThunk(
  'books/reading/start',
  async (formData, thunkApi) => {
    try {
      const { data } = await API.post(`books/reading/start`, formData);
      return data;
    } catch (error) {
      toastError(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const readingFinishThunk = createAsyncThunk(
  'books/reading/finish',
  async (formData, thunkApi) => {
    try {
      const { data } = await API.post(`books/reading/finish`, formData);
      return data;
    } catch (error) {
      toastError(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const readingDeleteThunk = createAsyncThunk(
  'books/reading',
  async (searchParams, thunkApi) => {
    try {
      const { data } = await API.delete(`books/reading?${searchParams}`);
      return data;
    } catch (error) {
      toastError(error.response.data.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
