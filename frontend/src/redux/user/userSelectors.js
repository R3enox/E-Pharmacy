export const selectIsLoading = (state) => state.user.isLoading;
export const selectUser = (state) => state.user.user;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectIsRefreshing = (state) => state.user.isRefreshing;
export const selectAuthError = (state) => state.user.error;
export const selectAccessToken = (state) => state.user.accessToken;
