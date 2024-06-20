import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../store/searchSlice';

export const store = configureStore({
    reducer: {
        search: searchReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
