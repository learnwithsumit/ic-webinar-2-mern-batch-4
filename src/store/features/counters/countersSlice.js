import { createSlice } from "@reduxjs/toolkit";
import initialCounters from "../../../data/initial-counters";

const countersSlice = createSlice({
    name: "counters",
    initialState: initialCounters,
    reducers: {
        increment: (state, action) => {
            const counterId = action.payload;
            const counterIndex = state.findIndex((c) => c.id === counterId);

            if (counterIndex >= 0) state[counterIndex].value++;
        },
        decrement: (state, action) => {
            const counterId = action.payload;
            const counterIndex = state.findIndex((c) => c.id === counterId);

            if (counterIndex >= 0) state[counterIndex].value--;
        },
    },
});

export default countersSlice.reducer;
export const { increment, decrement } = countersSlice.actions;
