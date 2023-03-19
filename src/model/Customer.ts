import { IAccount } from "../interfaces/IAccount";
import { ICustomer } from "../interfaces/ICustomer";
import { AccountFactory } from "./AccountFactory";

export class Customer implements ICustomer {

    private accounts: IAccount[];

    constructor(public id: string, 
                public name: string) {
        this.accounts = []
    }
    
    public addAccount(initialBalance: number): IAccount {
        const accountFactory = AccountFactory.getInstance();
        const account = accountFactory.createAccount(initialBalance);
        this.accounts.push(account);
        return account;
    }
      
    public getAccount(accountId: string): IAccount | undefined {
        return this.accounts.find((account) => account.id === accountId);
    }
                
}