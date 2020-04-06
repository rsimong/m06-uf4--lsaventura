import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from '../../../../../shared/services/activity.service';
import * as moment from 'moment';

@Component({
  selector: 'app-get-list',
  templateUrl: './get-list.component.html',
  styleUrls: ['./get-list.component.css']
})
export class GetListComponent implements OnInit {

  activities = [];
  showPopupDelete: { isOpen: boolean, docId: string } = {
    isOpen: false,
    docId: null
  };

  constructor(
    private router: Router,
    private db: ActivityService
  ) { }

  ngOnInit() {
    this.db.list().subscribe(value => {
      //then
      this.activities = [];
      value.forEach((data: any) => {
        this.activities.push({
          id: data.payload.doc.id,
          data: data.payload.doc.data()
        });
      });
      console.log(this.activities);
    }, err => {
      //catch
      console.warn("error", err);
    })
  }

  getFormatDate(data: string, outputFormat: string){
    return moment(data, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]').format(outputFormat);
  }

  createNewActivity() {
    this.router.navigate(['/create']);
  }

  updateDoc(docId: string) {
    this.router.navigate(['/update', docId]);
  }

  deleteDoc(docId: string) {
    this.showPopupDelete.docId = docId;
    this.showPopupDelete.isOpen = true;
  }

  closePopupDelete(e) {
    this.showPopupDelete.docId = null;
    this.showPopupDelete.isOpen = false;
    console.log(e);
  }

}
