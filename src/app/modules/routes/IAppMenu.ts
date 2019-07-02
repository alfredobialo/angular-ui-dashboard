import {Type} from "@angular/core";
import {clone} from "lodash";
import {Route} from "@angular/router";
export const MENU_HOME= "home";
export const MENU_ABOUT= "about";
export const MENU_LOGIN= "login";
export const MENU_REGISTER= "register";

export class AppMenu implements IAppMenu
{
  meta : IPageMetaInfo ;
  title? : string;
  id : string;
  icon? : string;
  url  :string;
  children ?: AppMenu[]  = [];
  componentType ?: Type<any>;

}
export class AppMenuBuilder{

  menus : AppMenu[]  = [];

  startNewMenu(title:string, id : string): IMenuDefinition
  {

    return new MenuDefinition().startNewMenu(title, id);
  }

  build() : {menus : IAppMenu[], routes : Route[]}{
    // get as Route Entry
    const routes : Route[]  = this.menus.map(x => {
      return {
        path : x.url,
        component : x.componentType,
        data : {
          meta : { title : x.meta.title, description : x.meta.description}
        }
      }
    });
    return {menus : this.menus, routes};
  }


}
export interface IAppMenu {
  meta : IPageMetaInfo ;
  title? : string;
  id : string;
  icon? : string;
  url  :string;
  children ?: AppMenu[] ;
  componentType ?: Type<any>;
}

export interface IPageMetaInfo{
  title : string;
  description ?: string ;
}
export interface IMenuDefinition{
   startNewMenu(label:string, id :string) : IMenuDefinition;
   setComponent(component:Type<any>) : IMenuDefinition;
   setPath(path:string) : IMenuDefinition;
   setPageInfo(pageTitle:string, pageDescription :string) : IMenuDefinition;
   setChildMenus(menus : AppMenu[])  : IMenuDefinition;
   endMenu():AppMenuBuilder;

}
class MenuDefinition implements IMenuDefinition{
  private menu : AppMenu;
  private appMenu : AppMenuBuilder ;
  constructor(){
    this.appMenu =  new AppMenuBuilder();
  }
  endMenu(): AppMenuBuilder {

    this.appMenu.menus.push(this.menu);
    return this.appMenu;
  }

  setChildMenus(menus: AppMenu[]): IMenuDefinition {
    this.menu.children  = menus;
    return this;
  }

  setComponent(component: Type<any>): IMenuDefinition {
    this.menu.componentType  = component;
    return this;
  }

  setPageInfo(pageTitle: string, pageDescription: string): IMenuDefinition {
    this.menu.meta  = { title : pageTitle , description : pageDescription};
    return this;
  }

  setPath(path: string): IMenuDefinition {
    this.menu.url   = path;
    return this;
  }

  startNewMenu(label: string, id: string): IMenuDefinition {
    this.menu = new AppMenu();
    this.menu.id  = id;
    this.menu.title  = label;
    return this;
  }

}
