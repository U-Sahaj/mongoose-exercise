import { Schema } from "mongoose";
import { IAccount } from "../interfaces/IAccount";

export interface CustomerDocument extends Document {
    customerId: string;
    name: string;
    accounts: IAccount[];
}

const customerSchema = new Schema<CustomerDocument>({
    customerId: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    accounts: [{ 
      type: Schema.Types.ObjectId, 
      ref: 'Account' 
    }],
  });
  
  export default customerSchema;
  