import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    mode: 'light',
    userId: null,
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
    },
});
export const selectMode = (state) => state.user.mode;

export const { setMode } = userSlice.actions;
export default userSlice.reducer;
