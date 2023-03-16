import { ICustomer } from "./ICustomer";

export interface ICustomerRepository {
    save(customer: ICustomer): void;
    findById(id: string): ICustomer | undefined;
}
  
export interface ICustomerRepository {
    add(customer: ICustomer): void;
    get(customerId: string): ICustomer | undefined;
    getAll(): ICustomer[];
    // getHighValueCustomers(): ICustomer[];
  
}