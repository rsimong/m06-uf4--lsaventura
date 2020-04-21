import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplyWeather } from '../models/replyweather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { 
  }

  getWeather(date: { year: string|number, month: string|number, day: string|number }) :Promise<ReplyWeather[]>{
    return this.http.get<ReplyWeather[]>(`https://www.metaweather.com/api/location/753692/${date.year}/${date.month}/${date.day}/`).toPromise();
  }
  



}
