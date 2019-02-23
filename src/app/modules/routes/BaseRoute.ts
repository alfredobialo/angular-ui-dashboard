import {Route} from '@angular/router';
import {HomePageComponent} from './pages/front-pages/HomePageComponent';
import {AboutPageComponent} from './pages/front-pages/AboutPageComponent';

export const baseRoutes: Route[] = [
  {
    path:"home",
    component : HomePageComponent,
    data : {
      data  : {
        title  : "Home Page!",
        description : "The Home page"

      }
    }
  },
  {
    path  : "about",
    component  : AboutPageComponent
  }
];
