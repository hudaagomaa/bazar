import { configureStore } from "@reduxjs/toolkit";
import bazarReducer from "./bazarSlice";

export const store = configureStore({
  reducer: {
    bazar: bazarReducer,   // bazarSlice 
  },
});

//  مش عارفه لازمتهم لسه 
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
