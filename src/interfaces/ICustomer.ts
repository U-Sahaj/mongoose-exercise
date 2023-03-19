import { IAccount } from "./IAccount";

export interface ICustomerType {
    readonly id: string;
    readonly name: string;
}

export interface ICustomer extends ICustomerType {
    addAccount(initialBalance: number): IAccount;
    getAccount(accountId: string): IAccount | undefined;
}
