import { ITransaction } from "../interfaces/ITransaction";
import { ITransactionRepository } from "../interfaces/ITransactionRepository";

class InMemoryTransactionRepository implements ITransactionRepository {
  private transactions: ITransaction[];

  constructor() {
    this.transactions = [];
  }

  saveTransaction(transaction: ITransaction): void {
    this.transactions.push(transaction);
  }

  getTransactionsByAccountId(accountId: string): ITransaction[] {
    return this.transactions.filter((transaction) => transaction.getAccountId() === accountId);
  }
}
