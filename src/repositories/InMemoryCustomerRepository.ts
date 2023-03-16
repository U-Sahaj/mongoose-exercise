import { ICustomer } from "../interfaces/ICustomer";
import { ICustomerRepository } from "../interfaces/ICustomerRepository";

  

class InMemoryCustomerRepository implements ICustomerRepository {
  private customers: ICustomer[] = [];

  add(customer: ICustomer): void {
    this.customers.push(customer);
  }

  get(customerId: string): ICustomer | undefined {
    return this.customers.find((c) => c.id === customerId);
  }

  getAll(): ICustomer[] {
    return this.customers.slice();
  }

  // getHighValueCustomers(): ICustomer[] {
  //   return this.customers.filter((c) => c.getBalance() > 5000).sort((a, b) => b.getBalance() - a.getBalance());
  // }
}
