/// <reference  path='../application-core/accounting-module/AccountLedger.ts' />
import {Component, VERSION, OnInit, OnDestroy, EventEmitter, Output} from '@angular/core';
import {Title, Meta} from "@angular/platform-browser";
import {Observable, Subscription, fromEvent} from "rxjs";
import {debounce} from "rxjs/operators";
import AccountGroup = Asom.Accounting.AccountGroup;
import AccountLedger = Asom.Accounting.AccountLedger;
import AccountType = Asom.Accounting.AccountType;

//import impl DefaultPersistable = Asom.Core.Defaults.DefaultPersistable;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'APMIS Custom UI/UX Component Design';
  appVersion = VERSION.full;
  $keyStream: Subscription;
  @Output() keyboardPress: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();

  constructor(private pgTitle : Title)
  {

  }
  ngOnInit(): void {

    this.pgTitle.setTitle("Alfred Obialo Bio");

    //Register Global Keyboard Event handler using Observables
    this.$keyStream = fromEvent(window, "keydown")
    // .pipe(debounce(500))
      .subscribe((x: KeyboardEvent) => {
        this.keyboardPress.emit(x);
        // Do Global Action here
        console.log(x);
      });

    ///  Create a Sample account Ledger
    const account : AccountLedger  = new AccountLedger();
    account.name  = "HMO Ledger";
    account.id  = "HMO-001";
    account.currentBalance = 3000;
    account.description  = "Track all HMO Accounts";
    account.type  = AccountType.LIABILITY;
    account.group  = AccountGroup.CURRENT_LIABILITY;
    account.logDefaultDataSource();
    account.processTransaction();

  }

  ngOnDestroy(): void {
    // kill event listener
    this.$keyStream.unsubscribe();
  }

}
