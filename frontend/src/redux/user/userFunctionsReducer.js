export const initialState = {
  user: {
    email: null,
  },
  isLoading: false,
  isAuthenticated: false,
  isRefreshing: false,
  error: null,
  accessToken: null,
  refreshToken: null,
};

export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFulfilledSignIn = (state, { payload }) => {
  state.isLoading = false;
  state.isAuthenticated = true;
  state.isRefreshing = false;
  state.accessToken = payload.token;
  state.refreshToken = payload.refreshToken;
  state.user = { email: payload.user.email };
  state.error = null;
};

export const handlePendingCurrentUser = (state) => {
  state.isRefreshing = true;
  state.error = null;
};

export const handleFulfilledCurrentUser = (state, { payload }) => {
  state.isAuthenticated = true;
  state.isRefreshing = false;
  state.user = { email: payload.email, name: payload.name };
};

export const handleRejectedCurrentUser = (state) => {
  state.isRefreshing = false;
  state.isAuthenticated = false;
  state.user = initialState.user;
};
