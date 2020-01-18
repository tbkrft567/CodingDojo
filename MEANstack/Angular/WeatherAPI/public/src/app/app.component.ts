import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  variable: string
  weatherData: {}
  constructor(private _httpService: HttpService) {
    this.variable = 'public';
  }
  ngOnInit() {
    // this.getWeather()
  }
  // getWeather(){
  //   let observable = this._httpService.hitWeatherAPI()
  //   observable.subscribe(dataAPI => {
  //     console.log(dataAPI)
  //     this.weatherData = dataAPI 
  //   })
  // }
}
