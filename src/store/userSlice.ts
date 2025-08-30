import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from 'services/reduxStore';

export interface UserState {
  language: string;
  languagesContent: string[];
  sortConfig: {key: string; direction: 'asc' | 'desc'} | null;
  selectedItems: string[];
}

const initialState: UserState = {
  language: 'en',
  languagesContent: ['en', 'uk', 'ru'],
  sortConfig: {
    key: 'damage',
    direction: 'desc',
  },
  selectedItems: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload || 'en';
    },
    setSortConfig: (state, action: PayloadAction<{key: string; direction: 'asc' | 'desc'} | null>) => {
      state.sortConfig = action.payload;
    },
    toggleItemSelection: (state, action: PayloadAction<string>) => {
      if (state.selectedItems.includes(action.payload)) {
        state.selectedItems = state.selectedItems.filter((item) => item !== action.payload);
      } else {
        state.selectedItems.push(action.payload);
      }
    },
    selectAllItems: (state, action: PayloadAction<string[]>) => {
      state.selectedItems = action.payload;
    },
    clearSelection: (state) => {
      state.selectedItems = [];
    },
  },
});

export const selectUserConfiguration = (state: RootState) => state.user;

export const {
  actions: {setLanguage, setSortConfig, toggleItemSelection, selectAllItems, clearSelection},
} = userSlice;

export default userSlice.reducer;
