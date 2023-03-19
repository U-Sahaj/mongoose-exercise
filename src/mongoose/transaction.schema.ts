import { Schema, Document } from 'mongoose';

export interface TransactionDocument extends Document {  
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

