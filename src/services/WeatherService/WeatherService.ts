import axios, { AxiosResponse } from "axios";
// import { apiKey } from "../../utils/constants";
import { TWeather } from "../../utils/types";
import api from "../../axios";

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<TWeather>> {
    return api.get<TWeather>(`/direct?q=${city}`);
  }
}
