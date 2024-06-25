import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { initialState } from './userFunctionsReducer';
import {
  handleFulfilledCurrentUser,
  handleFulfilledSignIn,
  handlePending,
  handleRejected,
  handlePendingCurrentUser,
  handleRejectedCurrentUser,
} from './userFunctionsReducer';

import { signInThunk, signOutThunk, fetchCurrentThunk } from './userOperations';

const STATUS = { PENDING: 'pending', REJECTED: 'rejected' };

const getActions = (type) => isAnyOf(signInThunk[type], signOutThunk[type]);

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
      .addCase(signInThunk.fulfilled, handleFulfilledSignIn)
      .addCase(signOutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(fetchCurrentThunk.pending, handlePendingCurrentUser)
      .addCase(fetchCurrentThunk.fulfilled, handleFulfilledCurrentUser)
      .addCase(fetchCurrentThunk.rejected, handleRejectedCurrentUser)
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
