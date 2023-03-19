import { ITransaction, TransactionType } from "../interfaces/ITransaction";


export class Transaction implements ITransaction {
    constructor(readonly amount: number, 
                readonly description: string,
                readonly date: Date) {}
  
}
