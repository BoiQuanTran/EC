import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'light',
    title: 'meow eyewear',
};

export const AppUiSlice = createSlice({
    name: 'AppUI',
    initialState,
    reducers: {
        setTitlePage: (state, action) => {
            document.title = action.payload;
        },

    },
});

// Action creators are generated for each case reducer function
export const {
    setTitlePage,
} = AppUiSlice.actions;

export default AppUiSlice.reducer;
