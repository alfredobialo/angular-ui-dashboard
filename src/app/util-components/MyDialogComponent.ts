import {Component, OnInit, AfterContentInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'my-dialog-component',
  template: `
    <div>
      <div class="modal-header">
        <div class="info">
          <p class="lead">This the Title</p>
         
        </div>
      </div>
      <div class="modal-body">
        <div class="" style="overflow: auto;max-height:75vh;" [style.max-height]="bodyHeight">
          <div class="pt-2 pl-3 pr-3"><p class="lead"><i class="fa fa-2x fa-apple text-info"></i>This the dialog Content section, place what
            ever you want in this section</p>
            <div>

              <div class="row">
                <div class="col-sm-4 mb-5">
                  <div class="bg-primary p-3" style="height:280px;">
                    <p>Hello 01</p>
                  </div>
                </div>
                <div class="col-sm-4 mb-5">
                  <div class="bg-primary p-3" style="height:280px;">
                    <p>Hello 02</p>
                  </div>
                </div>
                <div class="col-sm-4 mb-5">
                  <div class="bg-primary p-3" style="height:280px;">
                    <p>Hello 03</p>
                  </div>
                </div>
                <div class="col-sm-4 mb-5">
                  <div class="bg-primary p-3" style="height:280px;">
                    <p>Hello 04</p>
                  </div>
                </div>
                <div class="col-sm-4 mb-5">
                  <div class="bg-primary p-3" style="height:280px;">
                    <p>Hello 05</p>
                  </div>
                </div>
                <div class="col-sm-4 mb-5">
                  <div class="bg-primary p-3" style="height:280px;">
                    <p>Hello 06</p>
                  </div>
                </div>
                <div class="col-sm-4 mb-5">
                  <div class="bg-primary p-3" style="height:280px;">
                    <p>Hello 07</p>
                  </div>
                </div>
                <div class="col-sm-4 mb-5">
                  <div class="bg-primary p-3" style="height:280px;">
                    <p>Hello 08</p>
                  </div>
                </div>
                <div class="col-sm-4 mb-5">
                  <div class="bg-primary p-3" style="height:280px;">
                    <p>Hello 09</p>
                  </div>
                </div>
                <div class="col-sm-4 mb-5">
                  <div class="bg-primary p-3" style="height:280px;">
                    <p>Hello 10</p>
                  </div>
                </div>
                <div class="col-sm-4 mb-5">
                  <div class="bg-primary p-3" style="height:280px;">
                    <p>Hello 11</p>
                  </div>
                </div>
                <div class="col-sm-4 mb-5">
                  <div class="bg-primary p-3" style="height:280px;">
                    <p>Hello 12</p>
                  </div>
                </div>
                <div class="col-sm-4 mb-5">
                  <div class="bg-primary p-3" style="height:280px;">
                    <p>Hello 13</p>
                  </div>
                </div>
                <div class="col-sm-4 mb-5">
                  <div class="bg-primary p-3" style="height:280px;">
                    <p>Hello 14</p>
                  </div>
                </div>
                <div class="col-sm-4 mb-5">
                  <div class="bg-primary p-3" style="height:280px;">
                    <p>Hello 15</p>
                  </div>
                </div>
                <div class="col-sm-4 mb-5">
                  <div class="bg-primary p-3" style="height:280px;">
                    <p>Hello 16</p>
                  </div>
                </div>
                <div class="col-sm-4 mb-5">
                  <div class="bg-primary p-3" style="height:280px;">
                    <p>Hello 17</p>
                  </div>
                </div>
                <div class="col-sm-4 mb-5">
                  <div class="bg-primary p-3" style="height:280px;">
                    <p>Hello 18</p>
                  </div>
                </div>
                <div class="col-sm-4 mb-5">
                  <div class="bg-primary p-3" style="height:280px;">
                    <p>Hello 19</p>
                  </div>
                </div>
                <div class="col-sm-4 mb-5">
                  <div class="bg-primary p-3" style="height:280px;">
                    <p>Hello 20</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="modal-footer">
        <div class="button-tray">
          <ng-content selector="footer">
            
          </ng-content>
        
          <button class="btn btn-danger" (click)="closeDialog()">Close Dialog</button>
        </div>
        
      </div>
    </div>
  `
})

export class MyDialogComponent implements OnInit, AfterContentInit {
  constructor(private activeModal: NgbActiveModal) {
  }
 bodyHeight : string  = "75vh";

  ngOnInit() {
    console.log("Dialog NgOnInit Called");
  }


  closeDialog() {
    this.activeModal.close({
      reason: 'My Dialog close for fun!!',
      by: 'Alfred Obialo'
    });
  }

  ngAfterContentInit(): void {
    // Calculated  the viewport heighr dynamically
    console.log("View After Content Init Called");
    this.bodyHeight = "78vh";
  }
}
