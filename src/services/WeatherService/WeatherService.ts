import { AxiosResponse } from "axios";
// import { apiKey } from "../../utils/constants";
import { TWeather } from "../../utils/types";
import api from "../../axios";

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<TWeather>> {
    return api.get<TWeather>(`/weather?q=${city}`);
  }
}
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
