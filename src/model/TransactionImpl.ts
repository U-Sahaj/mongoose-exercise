import { ITransaction, TransactionType } from "../interfaces/ITransaction";


export class TransactionImpl implements ITransaction {
  constructor(
    readonly id: string,
    readonly date: Date = new Date(),
    readonly type: TransactionType,
    readonly amount: number,
    readonly description: string,
    readonly accountId: string
  ) {}

  static createCreditTransaction(
    id: string,
    date: Date,
    amount: number,
    description: string,
    accountId: string
  ): TransactionImpl {
    return new TransactionImpl(id, date, TransactionType.credit, amount, description, accountId);
  }

  static createDebitTransaction(
    id: string,
    date: Date,
    amount: number,
    description: string,
    accountId: string
  ): TransactionImpl {
    return new TransactionImpl(id, date, TransactionType.debit, amount, description, accountId);
  }

  static fromObject(obj: any): TransactionImpl {
    const type = TransactionType[obj.type as keyof typeof TransactionType];
    if (type === undefined) {
      throw new Error(`Invalid transaction type: ${obj.type}`);
    }
    return new TransactionImpl(type, obj.amount, obj.description, obj.accountId, obj.id, obj.date);
  }
  

  getType(): TransactionType {
    return this.type;
  }

  getAmount(): number {
    return this.amount;
  }

  getDescription(): string {
    return this.description;
  }

  getAccountId(): string {
    return this.accountId;
  }

  getDate(): Date {
    return this.date;
  }

  
}
