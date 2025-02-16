import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "./features/counters/countersSlice";

const store = configureStore({
    reducer: {
        counters: countersReducer,
    },
});

export default store;
