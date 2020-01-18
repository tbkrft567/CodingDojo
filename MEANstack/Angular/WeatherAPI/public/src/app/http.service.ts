import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  hitWeatherAPI(cityId: string){
    console.log('***SERVICE***')
    return this._http.get("https://api.openweathermap.org/data/2.5/weather?id="+cityId+"&appid=ea8540b25b391260506047217665c0db")
    // return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Washington&appid=29e0da2e8a1b63970473d88ca15e4c6e')
    // return this._http.get("https://api.openweathermap.org/data/2.5/weather?id=0&appid=29e0da2e8a1b63970473d88ca15e4c6e")
  }
}
//4684904 Dallas
//5809844 Seattle
//5392171 San Jose
//5331835 Burbank
//5815135 Washington
//4887398 Chicago
