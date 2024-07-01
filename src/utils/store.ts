import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherSliceReducer from './../services/slices/currentWeatherSlice'

export const rootReducer = combineReducers({
  currentWeatherSliceReducer
});
export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
