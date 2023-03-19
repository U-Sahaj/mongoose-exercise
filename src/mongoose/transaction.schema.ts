import { Schema, Document } from 'mongoose';

export interface TransactionDocument extends Document {  
    accountId: string;
    balance: number;
    description: string;
    amount: number;
    date: Date;
}


const transactionSchema = new Schema<TransactionDocument>({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

export default transactionSchema;

