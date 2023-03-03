import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit  {

  is_submit: boolean = false;
  error: string = '';
  ForgotForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router){}
  ngOnInit(): void {}

  get uc() { return this.ForgotForm.controls; };

  ForgotFormSubmit() {
    this.is_submit = true;
    console.log(this.ForgotForm.value);
    if (this.ForgotForm.invalid) {
      return
    }
    this.auth.postAPI('/user/forgotpassword', this.ForgotForm.value).subscribe((res: any) => {
      console.log(res);
      // if (res.success) {
      // this.router.navigate(['/admin/college'])
      // }
      // else{
      //   this.ForgotForm.controls['password'].setErrors({ 'showError': true });
      //   this.error = 'You are not authorized for login.';
      // }
    });
    // (err: any) => {
    //   console.log(err.error, 'loginnnnnnnnnnn err api calllllll');
    //   if (!err.error.success) {
    //     this.ForgotForm.controls['password'].setErrors({ 'showError': true });
    //     this.error = err.error.msg;
    //   }
    // }
  }
}
