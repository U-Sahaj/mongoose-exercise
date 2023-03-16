import { IAccount } from "./IAccount";

export enum TransactionType {
    credit = 'credit',
    debit = 'debit'
}

export interface ITransactionType {
    id: string;
    date: Date;
    type: TransactionType;
    amount: number;
    description: string;
    accountId: string;
}

export interface ITransaction extends ITransactionType {
    getAccountId(): string;
    getDate(): Date;
    getAmount(): number;
}
  