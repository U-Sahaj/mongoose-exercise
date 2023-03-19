import { IAccount } from "../interfaces/IAccount";
import { ITransaction } from "../interfaces/ITransaction";
import { TransactionFactory } from "./TransactionFactory";

export class Account implements IAccount {
    readonly id: string;
    private transactions: ITransaction[];
    private transactionFactory: TransactionFactory;

    constructor(accountId: string,
                private balance: number) {
        this.id = accountId;
        this.transactions = [];
        this.transactionFactory = TransactionFactory.getInstance();
    }

    public deposit(amount: number, description: string) {
        const transaction = this.transactionFactory.createTransaction(amount, description);
        this.transactions.push(transaction);
        this.balance += amount;
    }

    public withdraw(amount: number, description: string) {
        if (this.balance < amount) {
            throw new Error("Insufficient balance");
        }
        const transaction = this.transactionFactory.createTransaction(-amount, description);
        this.transactions.push(transaction);
        this.balance -= amount;
    }
      
    public getBalance(): number {
        return this.balance;
    }

    public getTransactions(): ITransaction[] {
        return this.transactions;
    }


}


