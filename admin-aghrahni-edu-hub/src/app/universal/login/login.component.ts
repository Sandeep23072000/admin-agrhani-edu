import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  is_submit: boolean = false;
  error: string = '';
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void { }

  get uc() { return this.loginForm.controls; };

  loginFormSubmit() {
    this.is_submit = true;
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      return
    }
    this.auth.postAPI('/user/login', this.loginForm.value).subscribe((res: any) => {
      console.log(res);
      // if (res.success) {
      this.router.navigate(['/admin/college'])
      // }
      // else{
      //   this.loginForm.controls['password'].setErrors({ 'showError': true });
      //   this.error = 'You are not authorized for login.';
      // }
    });
    // (err: any) => {
    //   console.log(err.error, 'loginnnnnnnnnnn err api calllllll');
    //   if (!err.error.success) {
    //     this.loginForm.controls['password'].setErrors({ 'showError': true });
    //     this.error = err.error.msg;
    //   }
    // }
  }
}
