namespace Asom {
   export namespace Accounting {
    import DefaultPersistable = Asom.Core.Defaults.DefaultPersistable;

    export enum AccountType {
      ASSET = 'ASSET',
      LIABILITY = 'LIABILITY',
      EQUITY = 'EQUITY',
      EXPENSE = 'EXPENSE',
      INCOME = 'INCOME'
    }

    export enum AccountGroup {
      CURRENT_ASSET = 10,
      LONG_TERM_ASSET = 11,
      CURRENT_LIABILITY = 20,
      LONG_TERM_LIABILITY = 21,

    }

    export enum AccountTag {
      ACCOUNT_RECEIVABLE = 'A/R',
      ACCOUNT_PAYABLE = 'A/P',
      CREDIT_NOTE = 'CREDIT-NOTE',
      CASH = 'CASH',
      BANK = 'BANK',
      LOAN = 'LOAN',


    }

    export class AccountLedger extends DefaultPersistable<AccountLedger> {
      name: string;
      description: string;
      currentBalance: number = 0.0;
      dateCreated: Date = new Date();
      refId: string;
      refType: string;
      tag: string;
      type: AccountType = AccountType.ASSET;
      group: AccountGroup = AccountGroup.CURRENT_ASSET;


      constructor() {
        super();

      }

      logDefaultDataSource() {
        console.log("Get Default Datasource called!!");
        console.log(this.getDataSource());
      }

      processTransaction(transactionInfo?: any) {
        console.log(transactionInfo);
      }
    }
  }

}
