import { IAccount } from "./IAccount";
import { ICustomer } from "./ICustomer";

export interface IAccountFactory {
    // createAccount(customerId: string): IAccount;
    createAccount(customer: ICustomer): IAccount;
}