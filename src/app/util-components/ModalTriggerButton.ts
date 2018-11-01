import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MyDialogComponent} from './MyDialogComponent';
import {FunnyComponent} from './FunnyComponent';

@Component({
  selector: 'modal-trigger-button',
  template: ` <button (click)="openModal()" class="btn btn-outline-primary btn-lg">{{title}}</button>`
})

export class ModalTriggerButton implements OnInit {
  @Input() title : string  = "Open Dialog";
  constructor(private modal : NgbModal) {
  }

  ngOnInit() {
  }

  onCtlO_KeyPressed(x : KeyboardEvent)
  {
     if(x.key === 'O'|| x.key === 'o')
      {
        this.openModal();
      }


  }
  openModal() {
    const componentRef  = this.modal.open(/*FunnyComponent*/MyDialogComponent, {
      backdrop: 'static' ,
      windowClass :'full-screen-dialog',
      beforeDismiss : () => {  return true ; } ,
      size:'lg',
      centered: false

    } );
    componentRef.componentInstance.info = "Alfred Obialo";
    console.log(componentRef);
  }
}
