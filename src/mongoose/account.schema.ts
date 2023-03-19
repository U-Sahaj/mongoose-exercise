import { Schema, Document } from 'mongoose';
import { ICustomer } from '../interfaces/ICustomer';
import { ITransaction } from '../interfaces/ITransaction';

export interface AccountDocument extends Document {
    accountId: string;
    customer: ICustomer;
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
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
  transactions: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Transaction' 
  }],

});

export default accountSchema;


