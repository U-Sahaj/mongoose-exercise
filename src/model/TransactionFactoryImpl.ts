import { ITransaction, TransactionType } from "../interfaces/ITransaction";
import { ITransactionFactory } from "../interfaces/ITransactionFactory";
import { TransactionImpl } from "./TransactionImpl";

export class TransactionFactoryImpl implements ITransactionFactory {
    createTransaction(type: TransactionType, amount: number, description: string, accountId: string): ITransaction {
      const transactionId = `TXN-${Math.random().toString(36).substr(2, 9)}`;
      const date = new Date();
      if (type === "credit") {
        return new TransactionImpl(transactionId, date, type, amount, description, accountId );
      } else {
        return new TransactionImpl(transactionId, date, type, amount, description, accountId );
      }
    }
  }