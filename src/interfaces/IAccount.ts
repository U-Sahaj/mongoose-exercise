import { ICustomer } from "./ICustomer";
import { ITransaction } from "./ITransaction";

export interface IAccount {
    // readonly id: string;
    // readonly customer: ICustomer;
    deposit(amount: number, description: string): void;
    withdraw(amount: number, description: string): void;
    getTransactions(): ITransaction[];
    getBalance(): number;
}