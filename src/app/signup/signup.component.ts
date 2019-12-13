import { Component, OnInit } from '@angular/core';
import { NgForm,FormBuilder, Validators,ValidationErrors} from '@angular/forms'
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  helpString = 'Hai Ram'
  
  email=''
  
  constructor(
    private signupService:SignupService,
    private formBuilder: FormBuilder,
    private router: Router,
    
    
    ) { }
  libRegisterForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobileNumber: ['', Validators.required],
    password: ['', Validators.required],
    
  });

  ngOnInit() {
  }
   onSubmit(){
    // // console.log(this.email);
    // this.http.post('http://localhost:8080/api/register', this.email).subscribe(data => {
    //   console.log(data);
    //  });
   console.log(this.libRegisterForm.value);
   this.signupService.onSignup(this.libRegisterForm.value).subscribe(responseData => {
     console.log(responseData);
     console.log(this.helpString);
     if (responseData['msg'] === 'emailIdexists') {
      alert('emailId already exists');
    } else if (responseData['msg'] === 'success') {
      alert('Database updated successfully');
        this.router.navigate(['login']);
    }
   });
  //  sendEmail() {
  //   this.success = true;
  //   this.snackBar.open('Información enviada exitosamente.', 'x', {
  //     duration: 5000,
  //   });
  //   this.name = this.fullName.value;  
    
  // }
  // //  var obj={
    
  
  
  
  
  
  
  
  
  
  
  
  //    email:String,
  //    first_name:String,
  //    last_name:String,
  //    mobile_number:Number,
  //    password:String,
  //  }
   }
   
}
