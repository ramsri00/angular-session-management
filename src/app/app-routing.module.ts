import{ NgModule} from '@angular/core';
import{ Routes,RouterModule} from '@angular/router';

import {SignupComponent} from './signup/signup.component'
//import {RequestComponent} from './request/request.component'
import{LoginComponent} from './login/login.component'
import { HomeComponent } from './home/home.component';
const Routes: Routes= [
 
    { path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent}
];

@NgModule ({
    imports:[RouterModule.forRoot(Routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}