import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  handleFulfilledGetDashboard,
  handlePending,
  handleRejected,
  initialState,
} from './dashboardFunctionsReducer';

import { getDashboardThunk } from './dashboardOperations';

const STATUS = { PENDING: 'pending', REJECTED: 'rejected' };

const getActions = (type) => isAnyOf(getDashboardThunk[type]);

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  extraReducers: (builder) => {
    const { PENDING, REJECTED } = STATUS;
    builder

      .addCase(getDashboardThunk.fulfilled, handleFulfilledGetDashboard)
      .addMatcher(getActions(PENDING), handlePending)
      .addMatcher(getActions(REJECTED), handleRejected);
  },
});

const usersConfig = {
  key: 'dashboard',
  storage,
};

export const dashboardReducer = persistReducer(
  usersConfig,
  dashboardSlice.reducer
);
