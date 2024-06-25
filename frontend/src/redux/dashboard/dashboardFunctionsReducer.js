export const initialState = {
  dashboard: [],
  isLoading: false,
  error: null,
};

export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFulfilledGetDashboard = (state, { payload }) => {
  state.isLoading = false;
  state.dashboard = payload;
};
