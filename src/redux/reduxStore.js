import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice"

const reduxStore = configureStore({
    reducer : {
        theme: themeReducer,
    }
});

export default reduxStore;