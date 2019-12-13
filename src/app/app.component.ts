import { Component } from '@angular/core';
import{Router} from '@angular/router';
import { AutoLogoutService } from './autologout.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Session Management';


  constructor(private router: Router,private autologoutservice:AutoLogoutService) {
 }
}  
//   ngOnInit() {
    
//       setTimeout(() => {
//           alert('Session Expired ');
//           this.router.navigate(['login']);
//       }, 10000);  //5s
//   }
// }


//import { Injectable } from "@angular/core";
//import { Router } from '@angular/router'

// export class AppComponent {
//    MINUTES_UNITL_AUTO_LOGOUT = 1 // in mins
//    CHECK_INTERVAL = 15000 // in ms
//    STORE_KEY =  'lastAction';
//  public getLastAction() {
//     return parseInt(localStorage.getItem(this.STORE_KEY));
//   }
//  public setLastAction(lastAction: number) {
//     localStorage.setItem(this.STORE_KEY, lastAction.toString());
//   }

//   constructor(private router: Router) {
//     this.check();
//     this.initListener();
//     this.initInterval();
//     localStorage.setItem(this.STORE_KEY,Date.now().toString());
//   }

//   initListener() {
//     document.body.addEventListener('click', () => this.reset());
//     document.body.addEventListener('mouseover',()=> this.reset());
//     document.body.addEventListener('mouseout',() => this.reset());
//     document.body.addEventListener('keydown',() => this.reset());
//     document.body.addEventListener('keyup',() => this.reset());
//     document.body.addEventListener('keypress',() => this.reset());
//   }

//   reset() {
//     this.setLastAction(Date.now());
//   }

//   initInterval() {
//     setInterval(() => {
//       this.check();
//     }, this.CHECK_INTERVAL);
//   }

//   check() {
//     const now = Date.now();
//     const timeleft = this.getLastAction() + this.MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
//     const diff = timeleft - now;
//     const isTimeout = diff < 0;

//     if (isTimeout)  {
//       localStorage.clear();
//       this.router.navigate(['./login']);
//     }
//   }
// }
