import {Route} from "@angular/router";
import {HomePageComponent} from "./pages/front-pages/HomePageComponent";
import {AboutPageComponent} from "./pages/front-pages/AboutPageComponent";
import {ErrorPage404Component} from "./pages/front-pages/ErrorPage404Component";

export const baseRoutes: Route[] = [
  {
    path: "home",
    redirectTo: "",
    pathMatch: "full"
  },
  {
    path: "about",
    component: AboutPageComponent,
    data: {
      meta: {
        pageTitle: "About the Company: this could be resolved dynamically",
        pageDescription: "Ssb network"
      }
    }
  },
  {
    path: "",
    component: HomePageComponent,
    data: {
      meta: {
        pageTitle: "Ssb Network home page",
        pageDescription: "Ssb network, best business location"
      }
    }
  },
  {
    path: "auth",
    // children :  authRoutes
    loadChildren: "../../modules/feature-modules/AuthFeatures/AuthModule#AuthModule"
  },
  {
    path: "inventory",
    // children :  authRoutes
    loadChildren: "../../modules/feature-modules/inventory/inventory.module#InventoryModule"
   /* loadChildren: () => import("../../modules/feature-modules/inventory/inventory.module")
      .then( m => InventoryModule)*/
  },
  {
    path : "crm",
    loadChildren : "../../modules/feature-modules/crm/crm.module#CrmModule"
  },

  {
    path: "**",
    component: ErrorPage404Component,
    data: {
      meta: {
        pageTitle: "Page Not found!",
        pageDescription: "Ssb network: the content you're looking for is not here."
      }
    }
  },
];
