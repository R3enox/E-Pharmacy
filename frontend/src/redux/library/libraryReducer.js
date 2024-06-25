import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  handleFulfilledAddLibrary,
  handleFulfilledGetLibrary,
  handleFulfilledRemoveLibraryBok,
  initialState,
} from './libraryFunctionsReducer';
import { handlePending, handleRejected } from './libraryFunctionsReducer';

import {
  addBook,
  addLibrary,
  getLibrary,
  removeLibraryBook,
} from './libraryOperations';

const STATUS = { PENDING: 'pending', REJECTED: 'rejected' };

const getActions = (type) => isAnyOf(addLibrary[type]);

const librarySlice = createSlice({
  name: 'library',
  initialState,
  extraReducers: (builder) => {
    const { PENDING, REJECTED } = STATUS;
    builder
      .addCase(addLibrary.fulfilled, handleFulfilledAddLibrary)
      .addCase(getLibrary.fulfilled, handleFulfilledGetLibrary)
      .addCase(addBook.fulfilled, handleFulfilledAddLibrary)
      .addCase(removeLibraryBook.fulfilled, handleFulfilledRemoveLibraryBok)
      .addMatcher(getActions(PENDING), handlePending)
      .addMatcher(getActions(REJECTED), handleRejected);
  },
});

const usersConfig = {
  key: 'library',
  storage,
};

export const { setTokens } = librarySlice.actions;
export const libraryReducer = persistReducer(usersConfig, librarySlice.reducer);
