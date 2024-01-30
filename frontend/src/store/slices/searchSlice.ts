import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type ItemType = { id: number | string; name: string };

type SearchInitialState = {
  search: string;
  searchedRequest: string;
  items: ItemType[];
  loading: boolean;
  error?: string;
};

export type ChangeSearchAction = PayloadAction<string>;
export type SearchRequestAction = PayloadAction<string>;
export type FailureSeachAction = PayloadAction<string>;
export type SearchSuccessAction = PayloadAction<ItemType[]>;

const initialState: SearchInitialState = {
  search: '',
  searchedRequest: '',
  items: [],
  loading: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearchField: (state, action: ChangeSearchAction) => {
      state.search = action.payload;
    },
    searchRequest: (state, action: SearchRequestAction) => {
      state.loading = true;
      state.searchedRequest = action.payload;
    },
    searchFailure: (state, action: FailureSeachAction) => {
      state.error = action.payload;
      state.loading = false;
    },
    searchSuccess: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
  },
});

export const searchActions = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
export const searchSelector = (state: RootState) => state.search;
