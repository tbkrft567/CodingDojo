import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weatherData: {}
  imgURL: string
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
    ) { }

  ngOnInit() {
    this.getWeather() 
    this.imgURL ='../assets/chicago.jpeg'
  }
  getWeather(){
    let observable = this._httpService.hitWeatherAPI("4684904")
    observable.subscribe(dataAPI => {
      console.log(dataAPI)
      this.weatherData = dataAPI 
    })
  }

}
//4684904 Dallas
//5809844 Seattle
//5392171 San Jose
//5331835 Burbank
//5815135 Washington
//4887398 Chicago
