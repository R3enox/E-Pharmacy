export const initialState = {
  books: [],
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

export const handleFulfilledRecommend = (state, { payload }) => {
  state.isLoading = false;
  state.books = payload;
};

export const handleFulfilledGetBook = (state, { payload }) => {
  state.isLoading = false;
  state.book = payload;
};
