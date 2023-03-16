import { IAccount } from "../interfaces/IAccount";
import { IAccountFactory } from "../interfaces/IAccountFactory";
import { IAccountRepository } from "../interfaces/IAccountRepository";
import { ICustomer } from "../interfaces/ICustomer";
import { ICustomerRepository } from "../interfaces/ICustomerRepository";
import { ITransaction, TransactionType } from "../interfaces/ITransaction";
import { ITransactionFactory } from "../interfaces/ITransactionFactory";
import { ITransactionRepository } from "../interfaces/ITransactionRepository";

class AccountService {
    constructor(
      private accountRepository: IAccountRepository,
      private transactionRepository: ITransactionRepository,
      private accountFactory: IAccountFactory,
      // private customerFactory: ICustomerFactory,
      private transactionFactory: ITransactionFactory,
      private customerRepository: ICustomerRepository
    ) {}
  
    createAccount(customerId: string): IAccount {
      const customer = this.customerRepository.get(customerId);
      const account = this.accountFactory.createAccount(customer!);
      this.accountRepository.save(account);
      return account;
    }
  
    deposit(accountId: string, amount: number, description: string): void {
      const account = this.accountRepository.get(accountId);
      const transaction = account!.deposit(amount,description);
      this.transactionRepository.save(transaction);
      this.accountRepository.save(account);
    }
  
    withdraw(accountId: string, amount: number, description: string): void {
      const account = this.accountRepository.getAccountById(accountId);
      const transaction = this.transactionFactory.createTransaction("debit", amount, description);
      this.transactionRepository.save(transaction);
      account.withdraw(amount);
      this.accountRepository.saveAccount(account);
    }
  
    getBalance(accountId: string): number {
      const account = this.accountRepository.getAccountById(accountId);
      return account.getBalance();
    }
  
    getTransactions(accountId: string, count: number): ITransaction[] {
      const account = this.accountRepository.getAccountById(accountId);
      return account.getTransactions(count);
    }
  
    listHighValueCustomers(): ICustomer[] {
      const customers = this.customerRepository.getCustomers();
      return customers.filter((customer) => {
        const accounts = this.accountRepository.get(customer);
        const totalBalance = accounts.reduce((balance, account) => balance + account.getBalance(), 0);
        return totalBalance > 5000;
      }).sort((customer1, customer2) => {
        const accounts1 = this.accountRepository.get(customer1);
        const accounts2 = this.accountRepository.get(customer2);
        const totalBalance1 = accounts1.reduce((balance, account) => balance + account.getBalance(), 0);
        const totalBalance2 = accounts2.reduce((balance, account) => balance + account.getBalance(), 0);
        return totalBalance2 - totalBalance1;
      });
    }
  }
  