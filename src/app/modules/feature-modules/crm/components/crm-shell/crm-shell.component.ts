import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ssb-crm-shell',
  template: `
    <div class="p-2">
      <div class="row">
          <div class="col-sm-4 col-md-3 col-12">
            Crm Menu
            <ssb-crm-nav>
              
            </ssb-crm-nav>
          </div>
        <div class="col-sm-8 col-md-9 col-12">
          <p class="lead">Page Title</p>
          <router-outlet>
            
          </router-outlet>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./crm-shell.component.css']
})
export class CrmShellComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
