import { IAccount } from "../interfaces/IAccount";
import { IAccountFactory } from "../interfaces/IAccountFactory";
import { ICustomer } from "../interfaces/ICustomer";
import { AccountImpl } from "../model/AccountImpl"
import { TransactionFactoryImpl } from "./TransactionFactoryImpl";

class AccountFactoryImpl implements IAccountFactory {
    createAccount(customer: ICustomer): IAccount {
      const accountId = `ACC-${Math.random().toString(36).substr(2, 9)}`;
      const transactionFactory = new TransactionFactoryImpl();

      const account = new AccountImpl(accountId, customer, transactionFactory);
      return account;
    }
  }