import { Schema, Document } from 'mongoose';
import { ITransaction } from '../interfaces/ITransaction';

export interface AccountDocument extends Document {
    accountId: string;
    balance: number;
    transactions: ITransaction[];
}

const accountSchema = new Schema<AccountDocument>({
  accountId: {
    type: String,
    required: true,
    unique: true,
  },
  balance: {
    type: Number,
    required: true,
    default: 0,
  },
  transactions: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Transaction' 
  }],
});

export default accountSchema;


