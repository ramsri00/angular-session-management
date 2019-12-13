import { Injectable } from "@angular/core";
import { Router,NavigationStart } from '@angular/router'
import { Idle } from '@ng-idle/core';
const MINUTES_UNITL_AUTO_LOGOUT = 15// in ms
const CHECK_INTERVAL = 10000 // in ms
const STORE_KEY =  'lastAction';
@Injectable()
export class AutoLogoutService {
 public getLastAction() {
    return parseInt(localStorage.getItem(STORE_KEY));
 }
 currentPath='';
 public setLastAction(lastAction: number) {
    localStorage.setItem(STORE_KEY, lastAction.toString());
  }

  constructor(
    private router: Router,
    private idle: Idle
    ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
      this.currentPath = event.url;
      }
        if (this.currentPath === '/' || this.currentPath === '/login') {
          // idle.watch();
          idle.stop();
          console.log('Router events works');
        } else {
          idle.watch();
          console.log('Router events works');
        }
    });
    console.log('hello logoutservice');
    this.check();
    this.initListener();
    this.initInterval();
    localStorage.setItem(STORE_KEY,Date.now().toString());
  }

  initListener() {
    document.body.addEventListener('click', () => this.reset());
    document.body.addEventListener('mouseover',()=> this.reset());
    document.body.addEventListener('mouseout',() => this.reset());
    document.body.addEventListener('keydown',() => this.reset());
    document.body.addEventListener('keyup',() => this.reset());
    document.body.addEventListener('keypress',() => this.reset());
  }

  reset() {
    this.setLastAction(Date.now());
  }

  initInterval() {
    setInterval(() => {
      this.check();
    }, CHECK_INTERVAL);
  }

  check() {
    const now = Date.now();
    const timeleft = this.getLastAction() + MINUTES_UNITL_AUTO_LOGOUT * 1000;
    const diff = timeleft - now;
    const isTimeout = diff < 0;

    if (isTimeout)  {
      localStorage.clear();
      alert('session expired');
      this.router.navigate(['./login']);
    }
  }
 

  }



