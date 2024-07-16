import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TResponse, TWeather } from "../../utils/types";
import { AxiosResponse } from "axios";

type TCurrentWeather = {
  weather: TWeather;
  isLoading: boolean;
  response: TResponse;
}

const initialState: TCurrentWeather = {
  weather: {
    main: {
      temp: 0,
    },
    clouds: {
      all: 0,
    },
    // rain: {
    //   '1h': 0,
    //   '3h': 0,
    // },
  },
  isLoading: false,
  response: {
    status: 0,
    message: '',
  },
};

export const currentWeatherSlice = createSlice({
  name: 'current_weather',
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<TWeather>>) {
      state.isLoading = false;
      state.weather = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
    },
    fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse<TWeather>>) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
    },
  }
});

export default currentWeatherSlice.reducer;
