import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ssb-main-menu',
  template: `<div class="p-3 mb-5 ssb-shadow main-menu d-flex" >
    <div class="container-fluid d-flex justify-content-center align-items-center flex-row">
    <a class="pl-3 pr-3 pt-2 pb-2 btn-link btn " [routerLinkActiveOptions]="{ exact : true }" routerLinkActive="btn-success text-white " routerLink="/">Home Page</a>
    <a class="pl-3 pr-3 pt-2 pb-2 btn-link btn" routerLinkActive="btn-success text-white" routerLink="/about">About Page</a>
    <a class="pl-3 pr-3 pt-2 pb-2 btn-link btn" routerLinkActive="btn-success text-white" [routerLink]="['/auth/login']">Sign In</a>
    <a class="pl-3 pr-3 pt-2 pb-2 btn-link btn" routerLinkActive="btn-success text-white" routerLink="/auth/register">Register</a>
    <a class="pl-3 pr-3 pt-2 pb-2 btn-link btn" routerLinkActive="btn-success text-white" routerLink="/inventory/dashboard">Inventory Manager</a>
    <ng-content select="span"></ng-content>
      
    </div>
  </div>`,
  styles :[`
    div.main-menu {
      background-color: #1b71a9;
      color: white;
      position: fixed;
      left: 0 ; right: 0;
      top : 0;
      z-index: 10;
      display: flex;
      flex-direction: row-reverse;
      justify-content : center;
      align-items: center;


    }

    div.main-menu a {
      text-decoration: none;
      color: white;
    }

    div.ssb-shadow {
      box-shadow: 2px 0 7px rgba(81, 81, 84, 0.78);
    }

    .ng-version-style {
      color: rgba(44, 48, 47, 1);
      text-shadow: 1px 1px 6px #000;
    }
  `]
})

export class MainMenusComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
