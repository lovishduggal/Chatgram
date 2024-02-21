import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../app/utils/axiosInstance';
import toast from 'react-hot-toast';

const initialState = {
    comments: [],
};
export const getAllComments = createAsyncThunk(
    'comment/getAllComments',
    async (data) => {
        const { postId } = data;
        try {
            const response = await axiosInstance.get(`/comment/${postId}`);
            return response.data;
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
);

export const createComment = createAsyncThunk(
    'comment/createComment',
    async (data) => {
        const { content, postId } = data;
        try {
            const response = axiosInstance.post(`/comment/${postId}`, {
                content,
            });
            toast.promise(response, {
                loading: 'Posting comment...',
                success: (response) => {
                    return response.data.message;
                },
                error: ' Failed to post the comment',
            });
            return (await response).data;
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
);

export const updatePost = createAsyncThunk(
    'comment/updatePost',
    async (data) => {
        const { content, postId } = data;
        try {
            const response = await axiosInstance.put(`/comment/${postId}`, {
                content,
            });
            return response.data;
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
);

export const deletePost = createAsyncThunk(
    'comment/deletePost',
    async (data) => {
        const { postId } = data;
        try {
            const response = await axiosInstance.delete(`/comment/${postId}`);
            return response.data;
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
);
const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        setComments: (state) => {
            state.comments = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllComments.fulfilled, (state, action) => {
                state.comments = action.payload.comments;
            })
            .addCase(createComment.fulfilled, (state, action) => {
                state.comments.push(action.payload.newComment);
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                const index = state.comments.findIndex(
                    (comment) => comment._id === action.payload.updatedPost._id
                );
                state.comments[index] = action.payload.updatedPost;
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                const index = state.comments.findIndex(
                    (comment) => comment._id === action.payload.deletedPost._id
                );
                state.comments.splice(index, 1);
            });
    },
});

export const selectComments = (state) => state.comment.comments;
export const { setComments } = commentSlice.actions;
export default commentSlice.reducer;
