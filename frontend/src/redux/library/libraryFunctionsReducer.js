export const initialState = {
  libraryBooks: [],
  isLoading: false,
  error: null,
  totalCount: null,
};

export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFulfilledAddLibrary = (state, { payload }) => {
  state.libraryBooks.push(payload);
  state.isLoading = false;
  state.totalCount += 1;
};

export const handleFulfilledGetLibrary = (state, { payload }) => {
  state.libraryBooks = payload;
  state.totalCount = payload.length;
  state.isLoading = false;
  state.error = false;
};

export const handleFulfilledRemoveLibraryBok = (state, { payload }) => {
  state.isLoading = false;
  state.error = false;
  state.libraryBooks = state.libraryBooks.filter(
    ({ _id }) => _id !== payload.id
  );
};
