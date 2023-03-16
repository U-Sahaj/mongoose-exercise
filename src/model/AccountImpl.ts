import { IAccount } from "../interfaces/IAccount";
import { IAccountRepository } from "../interfaces/IAccountRepository";
import { ICustomer } from "../interfaces/ICustomer";
import { ITransaction, TransactionType } from "../interfaces/ITransaction";
import { ITransactionFactory } from "../interfaces/ITransactionFactory";


// export class AccountImpl implements IAccount {
//   private balance: number = 0;
//   private transactions: ITransaction[] = [];

//   constructor(
//     private readonly id: string,
//     private readonly customer: ICustomer,
//     private readonly transactionFactory: ITransactionFactory,
//     private readonly accountRepository: IAccountRepository
//   ) {}

//   getId(): string {
//     return this.id;
//   }

//   getCustomer(): ICustomer {
//     return this.customer;
//   }

//   getBalance(): number {
//     return this.balance;
//   }

//   deposit(amount: number, description: string): void {
//     const transaction = this.transactionFactory.createTransaction(
//       this,
//       amount,
//       description,
//       true
//     );
//     this.balance += amount;
//     this.transactions.push(transaction);
//     this.accountRepository.saveTransaction(this, transaction);
//   }

//   withdraw(amount: number, description: string): void {
//     if (amount > this.balance) {
//       throw new Error("Insufficient funds");
//     }
//     const transaction = this.transactionFactory.createTransaction(
//       this,
//       amount,
//       description,
//       false
//     );
//     this.balance -= amount;
//     this.transactions.push(transaction);
//     this.accountRepository.saveTransaction(this, transaction);
//   }

//   getTransactions(): ITransaction[] {
//     return this.transactions.slice(-5).reverse();
//   }
// }


export class AccountImpl implements IAccount {
  private transactions: ITransaction[];

  constructor(private id: string,
              private customer: ICustomer, 
              private transactionFactory: ITransactionFactory) {
    this.transactions = [];
  }

  getId(): string {
    return this.id;
  }

  getCustomer(): ICustomer {
    return this.customer;
  }

  getBalance(): number {
    return this.transactions.reduce((balance, transaction) => balance + transaction.getAmount(), 0);
  }

  getTransactions(): ITransaction[] {
    return this.transactions;
  }

  deposit(amount: number): ITransaction {
    const transaction = this.transactionFactory.createTransaction(TransactionType.credit,amount,'Deposit',this.id);
    // transaction.execute();
    this.transactions.push(transaction);
    return transaction;
  }

  withdraw(amount: number): ITransaction {
    const balance = this.getBalance();
    if (amount > balance) {
      throw new Error('Insufficient funds');
    }
    const transaction = this.transactionFactory.createTransaction(TransactionType.debit,amount,'Withdrawal',this.id);
    // transaction.execute();
    this.transactions.push(transaction);
    return transaction;
  }

  listTransactions(): ITransaction[] {
    return this.transactions.slice(-5).sort((a, b) => b.getDate().getTime() - a.getDate().getTime()).map(transaction => {
      const description = transaction.getAmount() > 0 ? 'Deposit' : 'Withdrawal';
      const amount = transaction.getAmount() > 0 ? transaction.getAmount() : -transaction.getAmount();
      return this.transactionFactory.createTransaction(
            transaction.type, amount, transaction.description, transaction.accountId);
    });
  }
}