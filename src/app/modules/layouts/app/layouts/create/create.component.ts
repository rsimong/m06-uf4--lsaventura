import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private activityService: ActivityService
  ) { }

  ngOnInit() {
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  onSubmit() {
    if (!this.createForm.valid)
      return;
    this.activityService.create(this.createForm.value)
      .then(value => {
        this.createForm.reset();
        this.closeModal();
      }).catch(err => {
        console.log("error ", err);
      })
  }

  closeModal() {
    this.router.navigate(['/list']);
  }

  canDeactivate() {
    if (this.createForm.dirty) {
      return window.confirm('Discard changes?');
    }
    return true;
  }
}
