import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivityService } from '../../../../../shared/services/activity.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm = this.fb.group({
    name: ['', Validators.required],
    site: ['', Validators.required],
    date: ['', Validators.required],
    difficulty: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private activityService: ActivityService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.createForm.valid)
      return;

    this.activityService.create(this.createForm.value)
      .then(value => {
        console.log("created ", value);
      }).catch(err => {
        console.log("error ", err);
      })
  }

  canDeactivate() {
    if (this.createForm.dirty) {
      return window.confirm('Discard changes?');
    }
    return true;
  }
}
