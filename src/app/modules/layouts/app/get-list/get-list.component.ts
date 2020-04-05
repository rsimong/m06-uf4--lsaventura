import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../../../shared/services/activity.service';

@Component({
  selector: 'app-get-list',
  templateUrl: './get-list.component.html',
  styleUrls: ['./get-list.component.css']
})
export class GetListComponent implements OnInit {

  activities = [];

  constructor(private db: ActivityService) { }
    
  ngOnInit() {
    this.db.list().subscribe( value =>{
      //then
      this.activities = [];
      value.forEach((data: any) => {
        this.activities.push({
          id: data.payload.doc.id,
          data: data.payload.doc.data()
        });
      });
      console.log(this.activities);
    },err => {
      //catch
      console.warn("error",err);
    })
  }

}
