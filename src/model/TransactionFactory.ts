import { ITransaction, TransactionType } from "../interfaces/ITransaction";
import { Transaction } from "./Transaction";

export class TransactionFactory {
    private static instance: TransactionFactory;

    private constructor() {}

    public static getInstance(): TransactionFactory {
      if (!TransactionFactory.instance) {
        TransactionFactory.instance = new TransactionFactory();
      }
      return TransactionFactory.instance;
    }

    public createTransaction(amount: number, description: string): ITransaction {
      const date = new Date();
      return new Transaction(amount, description, date);
    }
  

  }