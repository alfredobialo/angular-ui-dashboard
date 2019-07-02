import {Component, OnInit} from '@angular/core';
import {AppMenuBuilder, MENU_ABOUT, MENU_HOME} from "./IAppMenu";
import {HomePageComponent} from "./pages/front-pages/HomePageComponent";
import {AboutPageComponent} from "./pages/front-pages/AboutPageComponent";

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

    // Test the new AppMenu Component
    const appMenu  :  AppMenuBuilder = new AppMenuBuilder();
    const newMenu  = appMenu
      // Create Home Page Menu
      .startNewMenu("Home Page", MENU_HOME)
      .setComponent(HomePageComponent)
      .setPageInfo("Welcome to Wakanow for Small business","Get the best from Wakanow")
      .setPath(MENU_HOME)
      .endMenu()
      // Create About Us Menu
      .startNewMenu("About Us",MENU_ABOUT)
      .setPath(MENU_ABOUT)
      .setComponent(AboutPageComponent)
      .setPageInfo("About Us", "Learn more about our Products & Services")
      .endMenu();
    ;
    const generatedMenus  = appMenu.build();


    console.log("Generated Menu",generatedMenus, "New Menu", newMenu);
  }
}
