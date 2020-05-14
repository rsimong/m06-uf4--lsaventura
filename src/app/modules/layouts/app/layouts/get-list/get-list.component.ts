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

  //per fefecte es null i false i a la hora que li donem al qualsevl boto del front s'activara el popup de verificacio.
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
        //fem un push a activites on guardarem la id, data.
        this.activities.push({
          id: data.payload.doc.id,
          data: data.payload.doc.data() // funcio interna que nome et torna les dades que tu vas omplir a la basse de dades
        });
      });

    }, err => {
      //catch
      console.warn("error", err);
    })
  }

  getFormatDate(data: string, outputFormat: string) {
    return moment(data, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]').format(outputFormat);
  }

  createNewActivity() {
    this.router.navigate(['/list/create']);
  }

  updateDoc(docId: string) {
    this.router.navigate(['/list/update', docId]);
  }

  deleteDoc(docId: string) {
    this.showPopupDelete.docId = docId;
    this.showPopupDelete.isOpen = true;
  }

  //funcio que tanca el popup
  closePopupDelete(e) {
    this.showPopupDelete.docId = null;
    this.showPopupDelete.isOpen = false;
  }
}
