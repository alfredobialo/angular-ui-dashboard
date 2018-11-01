import {Component, OnInit} from '@angular/core';
import {IPagerSource} from '../core-ui-modules/ui-components/PagerComponent';
import {getCustomerFromServer} from "../model/getCustomersModel";
import {Subscription} from "rxjs";

@Component({
  selector: 'tabs',
  template: `
    <ngb-tabset [justify]="'start'" [destroyOnHide]="false" [activeId]="'emp'">
      <ngb-tab [title]="'Employee List'">
        <ng-template ngbTabContent>
          <div class="p-4">
            Component goes here!!
            <simple-timer-component></simple-timer-component>
          </div>

        </ng-template>
      </ngb-tab>
      <ngb-tab title="Employee Details" [disabled]="false" id="emp">
        <ng-template ngbTabContent>
          <div class="p-4">

            <select name="" id="" #sel>
              <option value="10">10</option>
              <option value="20">20 Items per page</option>
              <option value="30">30 Item Per Page</option>
              <option value="40">40 Item / page</option>
            </select>
            <button class="btn btn-success" (click)="assignPg(sel)">Assign Page Size</button>
            Pager Component
            <asom-data-pager
              [button-size]="'size'"
              color="red"
              [in-progress]="processing"
              [show-progress]="true"
              h-alignment="center"
              (onPageClick)="gotoPage($event)"
              [pager-source]="pageSource"
            ></asom-data-pager>
            Another Component goes here!!
          </div>
          <div class="p-3">
            <table class="table table-bordered">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th></th>
              </tr>
              <tr *ngFor="let c of customers">
                <td>{{c.id}}</td>
                <td>{{c.name}}</td>
                <td>{{c.address}}</td>
                <td><button class="btn btn-primary"><span class="fa fa-save"></span></button></td>
              </tr>
            </table>
          </div>


        </ng-template>
      </ngb-tab>
      <ngb-tab title="Create new Employee">
        <ng-template ngbTabContent>
          <div class="p-4">
            Create New Employee
            <form name="frmEmployee">
              <input type="text" class="form-control"><input type="text" class="form-control"><input type="text"
                                                                                                     class="form-control"><input
              type="text" class="form-control">
            </form>
          </div>

        </ng-template>
      </ngb-tab>
    </ngb-tabset>
  `
})

export class TabsComponent implements OnInit {
  pageSource: IPagerSource = {
    currentPage: 0,
    pageSize: 1,

  };
  customers: any[];
processing = false;
  constructor() {
  }

  ngOnInit() {
    // assign the pager
    this.getRecord();

  }

  gotoPage(index: number) {

    this.pageSource.currentPage  = index;
    this.getRecord();
    console.log("goto page called");
  }

  getRecord() {
    this.processing = true;
    const subscription$: Subscription = getCustomerFromServer(this.pageSource.currentPage, this.pageSource.pageSize)
      .subscribe(x => {
        console.log(x);
        this.customers = x.data;
        this.pageSource = x.pagination;
      },x=>{}, ()=>{this.processing =false;});
   //subscription$.unsubscribe();
  }


  assignPg(sel: HTMLSelectElement) {

    this.pageSource.pageSize = parseInt(sel.selectedOptions.item(0).value);

  }

}
