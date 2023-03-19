import { IAccount } from "../interfaces/IAccount";
import { ICustomer } from "../interfaces/ICustomer";
import { Customer } from "./Customer";

export class CustomerFactory {
    private static instance: CustomerFactory;

    private constructor() {}

    public static getInstance(): CustomerFactory {
      if (!CustomerFactory.instance) {
          CustomerFactory.instance = new CustomerFactory();
      }
      return CustomerFactory.instance;
    }

    public createCustomer(name: string): ICustomer {
      const id = `CUS-${Math.random().toString(36).substr(2, 9)}`;
      return new Customer(id, name);
    }
}
  