import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor(private http:HttpClient) { }

onSignup(RegistrationForm){
  return this.http.post('http://localhost:8080/api/register',{
    firstName:RegistrationForm.firstName,
    lastName:RegistrationForm.lastName,
    email:RegistrationForm.email,
    password:RegistrationForm.password,
    mobileNumber:RegistrationForm.mobileNumber,
  });
}
}
