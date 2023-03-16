import { IAccount } from "../interfaces/IAccount";
import { IAccountRepository } from "../interfaces/IAccountRepository";
import { ICustomer } from "../interfaces/ICustomer";

class InMemoryAccountRepository implements IAccountRepository {
  private accounts: IAccount[] = [];

  save(account: IAccount): void {
    this.accounts.push(account);
  }

  get(accountId: string): IAccount | undefined{
    const account = this.accounts.find((account) => account.get(accountId) === accountId);
    if (!account) {
      throw new Error(`Account with id ${accountId} not found`);
    }
    return account;
  }

  getAccountsByCustomer(customer: ICustomer): IAccount[] {
    return this.accounts.filter((account) => account.getCustomer().getId() === customer.getId());
  }
  
    // findHighValueCustomers() {
    //   return Array.from(this.accounts.values())
    //     .filter((account) => account.getBalance() > 5000)
    //     .sort((a, b) => b.getBalance() - a.getBalance());
    // }


  }
  