import { ITransaction, TransactionType } from "./ITransaction";

export interface ITransactionFactory {
    createTransaction(type: TransactionType, 
                    amount: number, 
                    description: string, 
                    accountId: string): ITransaction;
}

