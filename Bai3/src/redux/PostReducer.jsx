import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";


const API_URL = "https://jsonplaceholder.typicode.com/posts";


export const fetchPosts = createAsyncThunk("getAddPost", async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {

    }
});


export const addPosts = createAsyncThunk("addPost", async (post) => {
    try {
        const response = await axios.post(API_URL, post);
        return response.data;
    } catch (error) {

    }
});

const postSlice = createSlice({
    name: "posts",
    initialState: { post: [] },
    reducers: {
        getPost: (state, action) => {
            state.post = action.payload.payload
        },
        addPost: (state, action) => {

            state.post = [
                ...state.post,
                action.payload
            ]

        }

    },

});
export const { getPost, addPost } = postSlice.actions
export default postSlice.reducer;
