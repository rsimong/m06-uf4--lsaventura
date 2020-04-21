import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../../../../../shared/services/weather.service';
import { ReplyWeather } from '../../../../../shared/models/replyweather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() date: {year: string|number, month: string|number, day: string|number};
  weather: ReplyWeather;


  constructor(private tiempo: WeatherService) { }

  ngOnInit() {
    
  }

  update(tiempo: {year: string|number, month: string|number, day: string|number}){
    this.tiempo.getWeather(tiempo)
    .then((resp: ReplyWeather[]) => {
      this.weather=resp[0];

    }).catch((err) =>{
      console.log(err)
    })
  }

  ngOnChanges(): void {
    if(this.date){
      this.update(this.date);
    }
  }

  


}
