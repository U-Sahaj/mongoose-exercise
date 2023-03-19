
export enum TransactionType {
    credit = 'credit',
    debit = 'debit'
}

export interface ITransactionType {
    readonly amount: number;
    readonly description: string;
    readonly date: Date;
}  

export interface ITransaction extends ITransactionType {
    // getAccountId(): string;
    // getDate(): Date;
    // getAmount(): number;
}
  

