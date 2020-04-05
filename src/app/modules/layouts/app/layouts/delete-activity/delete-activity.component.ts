import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivityService } from 'src/app/shared/services/activity.service';

@Component({
  selector: 'app-delete-activity',
  templateUrl: './delete-activity.component.html',
  styleUrls: ['./delete-activity.component.css']
})
export class DeleteActivityComponent implements OnInit {

  @Input() docId: string = null;
  @Output() notifyResult: EventEmitter<Object> = new EventEmitter<Object>();

  constructor(
    private db: ActivityService
  ) { }

  ngOnInit() {
  }

  deleteDoc() {
    console.log(this.docId);
    if (!this.docId)
      return;
    this.db.delete(this.docId)
      .then((value) => console.log(value))
      .catch((error) => console.warn(error));
    this.notifyResult.emit({ removed: true });
  }

  cancel() {
    this.notifyResult.emit({ removed: false });
  }

}
