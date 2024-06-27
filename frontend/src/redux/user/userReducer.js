import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { initialState } from './userFunctionsReducer';
import {
  handleFulfilledRefreshUser,
  handleFulfilledSignIn,
  handlePending,
  handleRejected,
  handlePendingRefreshUser,
  handleRejectedRefreshUser,
} from './userFunctionsReducer';

import { logInThunk, logOutThunk, refreshUser } from './userOperations';

const STATUS = { PENDING: 'pending', REJECTED: 'rejected' };

const getActions = (type) => isAnyOf(logInThunk[type], logOutThunk[type]);

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setTokens(state, { payload }) {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
  },
  extraReducers: (builder) => {
    const { PENDING, REJECTED } = STATUS;
    builder
      .addCase(logInThunk.fulfilled, handleFulfilledSignIn)
      .addCase(logOutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshUser.pending, handlePendingRefreshUser)
      .addCase(refreshUser.fulfilled, handleFulfilledRefreshUser)
      .addCase(refreshUser.rejected, handleRejectedRefreshUser)
      .addMatcher(getActions(PENDING), handlePending)
      .addMatcher(getActions(REJECTED), handleRejected);
  },
});

const usersConfig = {
  key: 'users',
  storage,
  whitelist: ['accessToken', 'refreshToken'],
};

export const { setTokens } = usersSlice.actions;
export const userReducer = persistReducer(usersConfig, usersSlice.reducer);
