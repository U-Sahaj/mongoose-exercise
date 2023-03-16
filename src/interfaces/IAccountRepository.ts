import { IAccount } from "./IAccount";
import { ICustomer } from "./ICustomer";

export interface IAccountRepository {
    save(account: IAccount): void;
    get(id: string): IAccount | undefined;
    get(customer: ICustomer): IAccount[];
    findHighValueCustomers(): IAccount[];
}
  