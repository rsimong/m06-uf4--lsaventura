import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../../shared/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['',Validators.required],
    password: ['',Validators.required]
  });

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(){
    if (!this.loginForm.valid)       
      return;
      this.userService.login(this.loginForm.value.email, this.loginForm.value.password)
    }
}
