import { IAccount } from "../interfaces/IAccount";
import { ICustomer } from "../interfaces/ICustomer";
import { ITransaction } from "../interfaces/ITransaction";
import { CustomerFactory } from "../model/CustomerFactory";
import { AccountFactory } from "../model/AccountFactory";
import { TransactionFactory } from "../model/TransactionFactory";

export class AccountService {
    private accounts: IAccount[] = [];
    private customers: ICustomer[] = [];
    private accountFactory = AccountFactory.getInstance();
    private customerFactory = CustomerFactory.getInstance();
    
    public createCustomer(name: string): ICustomer {
      const customerFactory = CustomerFactory.getInstance();
      const customer = customerFactory.createCustomer(name);
      this.customers.push(customer);
      return customer;
    }

    public createAccount(customerId: string, initialBalance: number): IAccount {
      const customer = this.customers.find((c) => c.id === customerId);
      if (!customer) {
        throw new Error(`Customer with ID ${customerId} not found`);
      }
      const account = customer.addAccount(initialBalance);
      this.accounts.push(account);
      return account;
    }

    public deposit(accountId: string, amount: number, description: string): void {
      const account = this.accounts.find((a) => a.id === accountId);
      if (!account) {
        throw new Error(`Account with ID ${accountId} not found`);
      }
      account.deposit(amount, description);
    }
  
    public withdraw(accountId: string, amount: number, description: string): void {
      const account = this.accounts.find((a) => a.id === accountId);
      if (!account) {
        throw new Error(`Account with ID ${accountId} not found`);
      }
      const transactionFactory = TransactionFactory.getInstance();
      const transaction = transactionFactory.createTransaction(amount, description);
      account.withdraw(amount, description);
    }
  
    public getBalance(accountId: string): number {
      const account = this.accounts.find((a) => a.id === accountId);
      if (!account) {
        throw new Error(`Account with ID ${accountId} not found`);
      }
      return account.getBalance();
    }
    
    public getTransactions(accountId: string, count: number): ITransaction[] {
      const account = this.accounts.find((a) => a.id === accountId);
      if (!account) {
        throw new Error(`Account with ID ${accountId} not found`);
      }
      const transactions = account.getTransactions();
      return transactions
        .sort((a, b) => b.date.getTime() - a.date.getTime())
        .slice(0, count)
        .map((transaction) => ({
          description: transaction.description,
          date: transaction.date,
          amount: transaction.amount,
        }));
    }
  
    public listHighValueCustomers(): ICustomer[] | undefined {
      const highValueAccounts = this.accounts.filter((account) => account?.getBalance() > 5000).sort((a, b) => b.getBalance() - a.getBalance());
      const highValueCustomers = highValueAccounts.map((account) => this.customers.find((customer) => customer?.id === account?.id));
      return highValueCustomers.filter((customer) => customer !== undefined) as ICustomer[];
    }
    
    
  
  }
  