import { model } from 'mongoose';
import transactionSchema, { TransactionDocument } from "./transaction.schema";

export const TransactionModel = model<TransactionDocument>('Transaction', transactionSchema);

