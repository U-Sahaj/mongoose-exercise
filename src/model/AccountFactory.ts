import { IAccount } from "../interfaces/IAccount";
import { Account } from "./Account"

export class AccountFactory {
    private static instance: AccountFactory;

    private constructor() {}

    public static getInstance(): AccountFactory {
      if (!AccountFactory.instance) {
          AccountFactory.instance = new AccountFactory();
      }
      return AccountFactory.instance;
    }

    public createAccount(initialBalance: number): IAccount {
      const id = `ACC-${Math.random().toString(36).substr(2, 9)}`;
      const balance = 0;
      return new Account(id, initialBalance);
    }
  }

  