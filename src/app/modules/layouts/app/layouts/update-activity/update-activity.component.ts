import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivityService } from 'src/app/shared/services/activity.service';

@Component({
  selector: 'app-update-activity',
  templateUrl: './update-activity.component.html',
  styleUrls: ['./update-activity.component.css']
})
export class UpdateActivityComponent implements OnInit {

  docId: string = null;
  updateForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    site: ['', Validators.required],
    date: ['', Validators.required],
    difficulty: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private db: ActivityService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.docId = this.route.snapshot.paramMap.get("id");
    this.db.getById(this.docId).then((item) => {
      const data = item.data();
      this.updateForm.setValue({
        name: data.name,
        site: data.site,
        date: data.date,
        difficulty: data.difficulty
      });
    });
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  onSubmit() {
    if (!this.updateForm.valid || !this.docId)
      return;

    this.db.update(this.docId, this.updateForm.value)
      .then((value) => {
        this.updateForm.reset();
        this.closeModal();
      })
      .catch((error) => console.warn(error));
  }

  closeModal() {
    this.router.navigate(['/list']);
  }

  canDeactivate() {
    if (this.updateForm.dirty) {
      return window.confirm('Discard changes?');
    }
    return true;
  }

}
