
import { configureStore } from '@reduxjs/toolkit';
import postSlice from './PostReducer';

export default configureStore({
    reducer: postSlice,
})