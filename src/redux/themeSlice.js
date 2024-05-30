import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        dark : false,
    },
    reducers: {
        changeTheme : (state,action) => {
            state.dark = (!state.dark);
        },
    }
});

export const {changeTheme} = themeSlice.actions;

export default themeSlice.reducer;