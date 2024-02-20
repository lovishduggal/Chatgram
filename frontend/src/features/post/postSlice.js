import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../app/utils/axiosInstance';
import toast from 'react-hot-toast';

const initialState = {
    posts: [],
    isLoading: true,
};
export const getAllPost = createAsyncThunk('post/getAllPosts', async () => {
    try {
        const response = await axiosInstance.get('/post');
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
});

export const uploadPost = createAsyncThunk('post/uploadPost', async (data) => {
    const { content, image } = data;
    try {
        const response = await axiosInstance.post(`/post`, {
            content,
            image,
        });
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
});

export const updatePost = createAsyncThunk('post/updatePost', async (data) => {
    const { content, postId } = data;
    try {
        const response = await axiosInstance.put(`/post/${postId}`, {
            content,
        });
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
});

export const deletePost = createAsyncThunk('post/deletePost', async (data) => {
    const { postId } = data;
    try {
        const response = await axiosInstance.delete(`/post/${postId}`);
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
});
const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllPost.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload.posts;
        });
        builder.addCase(updatePost.fulfilled, (state, action) => {
            const index = state.posts.findIndex(
                (post) => post._id === action.payload.updatedPost._id
            );
            state.posts[index] = action.payload.updatedPost;
        });
        builder.addCase(deletePost.fulfilled, (state, action) => {
            const index = state.posts.findIndex(
                (post) => post._id === action.payload.deletedPost._id
            );
            state.posts.splice(index, 1);
        });
    },
});

export const selectIsLoading = (state) => state.post.isLoading;
export const selectPosts = (state) => state.post.posts;
// export const { checkLoggedIn } = postSlice.actions;
export default postSlice.reducer;
