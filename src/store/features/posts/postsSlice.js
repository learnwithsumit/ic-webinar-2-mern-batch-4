import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import wait from "../../../lib/wait";
import { getPosts } from "./postsApi";

const initialState = {
    posts: [],
    isLoading: false,
    isError: false,
    error: null,
};

// async thunk which we will dispatch instead of actual action & after asynchronous task is complete, it will dispatch the actual synchronous action 'posts/fetchPosts'
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const posts = await getPosts();

    // fake 3seconds delay to show loading state clearly
    await wait(3000);

    return posts;
});

const postsSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default postsSlice.reducer;
