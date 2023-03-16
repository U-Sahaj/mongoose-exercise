import { ITransaction } from "./ITransaction";

export interface ITransactionRepository {
    save(transaction: ITransaction): void;
    get(accountId: string): ITransaction[];
}