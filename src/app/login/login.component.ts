import { Component, OnInit } from '@angular/core';
import{NgForm,FormBuilder, Validators,ValidationErrors} from '@angular/forms'
import { LoginService } from './login.service';
 import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userResponse: any;
  loginservice;
  response:any;
  libLoginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(    
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private cookieService: CookieService) { }

  ngOnInit() {
  }
   onLogin(){
     this.loginService
     console.log(this.libLoginForm.value);
     console.log(this.response);
     this.userResponse=this.response;
     if (this.userResponse.msg === 'success') {
      alert('Login Success');
      localStorage.setItem(
        'userEmailId',
        this.userResponse.userData.emailId
      );
      // this.authService.isLoggenIn(this.userResponse.msg);
      this.cookieService.set('isLoggedIn', 'true');
      //this.router.navigate(['/edit-profile']);
    } else if (this.userResponse.msg === 'not-found') {
      alert('Login Failed,invalid user');
    } else if (this.userResponse.msg === 'invalid-credentials') {
      alert('username or password is invalid');
    }

    //  if (this.userResponse.msg === 'found') {
    //   alert('you are already Logged in');
    // } else if (this.userResponse.msg === 'not-found') {
    //   alert('please Register');
    // }
   }

}

