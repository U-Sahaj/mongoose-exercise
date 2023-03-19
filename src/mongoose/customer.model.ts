import { model } from 'mongoose';
import customerSchema, { CustomerDocument } from "./customer.schema";

export const CustomerModel = model<CustomerDocument>('Customer', customerSchema);
