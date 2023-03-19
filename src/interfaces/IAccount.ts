import { ITransaction } from "./ITransaction";

export interface IAccountType {
    readonly id: string
}

export interface IAccount extends IAccountType{
    deposit(amount: number, description: string): void;
    withdraw(amount: number, description: string): void;
    getTransactions(): ITransaction[];
    getBalance(): number;
}


  