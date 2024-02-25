import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import axiosInstance from '../../app/utils/axiosInstance';
const initialState = {
    isLoggedIn: null,
    userId: null,
    checkLoggedIn: null,
};

export const signup = createAsyncThunk('auth/signup', async (data) => {
    try {
        const response = axiosInstance.post('/auth/signup', data);
        toast.promise(response, {
            loading: 'Signing up...',
            success: (response) => {
                return response?.data?.message;
            },
            error: 'Failed to sign up the user',
        });
        return (await response).data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
});
export const login = createAsyncThunk('auth/signup', async (data) => {
    try {
        const response = axiosInstance.post('/auth/login', data);
        toast.promise(response, {
            loading: 'Logging...',
            success: (response) => {
                return response?.data?.message;
            },
            error: 'Failed to log in the user',
        });
        return (await response).data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
});

export const checkLoggedInUser = createAsyncThunk(
    'auth/checkLoggedInUser',
    async () => {
        try {
            const response = await axiosInstance.get('/auth/check');
            return response.data;
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.userId = action?.payload?.userId;
                // localStorage.setItem('isLoggedIn', 'true');
            })
            .addCase(checkLoggedInUser.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.checkLoggedIn = true;
                state.userId = action?.payload?.userId;
                // localStorage.setItem('isLoggedIn', 'true');
            });
    },
});

export const selectLoggedInUser = (state) => state.auth.isLoggedIn;
export const selectUserId = (state) => state.auth.userId;
export const selectCheckLoggedIn = (state) => state.auth.checkLoggedIn;
export default authSlice.reducer;
