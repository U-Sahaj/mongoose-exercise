import { Model, model, Schema } from "mongoose";
import { IAccount, IAccountType } from "../interfaces/IAccount";
import { IAccountRepository } from "../interfaces/IAccountRepository";
import accountSchema, { AccountDocument } from "../mongoose/account.schema";

export class AccountRepositoryMongoDB implements IAccountRepository {
  private accountModel: Model<AccountDocument>;

  constructor() {
    this.accountModel = model<AccountDocument>('Account', accountSchema);
  }

  async save(account: IAccount): Promise<void> {
    await this.accountModel.create(account);
  }

  async getAccountById(accountId: string): Promise<IAccountType> {
    const accountDoc = await this.accountModel.findOne({ accountId }).exec();
    if (!accountDoc) {
      return null;
    }
    return {
      accountId: accountDoc.accountId,
      customerId: accountDoc.customerId,
      balance: accountDoc.balance,
    };
  }

  async updateAccount(account: IAccount): Promise<void> {
    await AccountModel.updateOne(
      { accountId: account.accountId },
      { balance: account.balance }
    ).exec();
  }




}