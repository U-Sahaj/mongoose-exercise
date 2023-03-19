import { model } from 'mongoose';
import accountSchema, { AccountDocument } from './account.schema';

export const AccountModel = model<AccountDocument>('Account', accountSchema);
