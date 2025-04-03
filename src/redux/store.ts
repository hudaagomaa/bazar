import { configureStore } from "@reduxjs/toolkit";
import bazarReducer from "./bazarSlice";

export const store = configureStore({
  reducer: {
    bazar: bazarReducer, // ✅ تأكد من تطابق الاسم مع الـ slice
  },
});

// ✅ تعريف أنواع RootState و AppDispatch لاستخدامها في TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
