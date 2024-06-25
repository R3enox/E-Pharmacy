import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  handleFulfilledGetBook,
  handleFulfilledRecommend,
  initialState,
} from './booksFunctionsReducer';
import { handlePending, handleRejected } from './booksFunctionsReducer';

import {
  getBookThunk,
  readingDeleteThunk,
  readingFinishThunk,
  readingStartThunk,
  recommendThunk,
} from './booksOperations';

const STATUS = { PENDING: 'pending', REJECTED: 'rejected' };

const getActions = (type) => isAnyOf(recommendThunk[type]);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    const { PENDING, REJECTED } = STATUS;
    builder
      .addCase(recommendThunk.fulfilled, handleFulfilledRecommend)
      .addCase(getBookThunk.fulfilled, handleFulfilledGetBook)
      .addCase(readingStartThunk.fulfilled, handleFulfilledGetBook)
      .addCase(readingFinishThunk.fulfilled, handleFulfilledGetBook)
      .addCase(readingDeleteThunk.fulfilled, handleFulfilledGetBook)
      .addMatcher(getActions(PENDING), handlePending)
      .addMatcher(getActions(REJECTED), handleRejected);
  },
});

const usersConfig = {
  key: 'books',
  storage,
};

export const { setTokens } = booksSlice.actions;
export const booksReducer = persistReducer(usersConfig, booksSlice.reducer);
