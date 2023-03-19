import { IAccount } from "../interfaces/IAccount";
import { Account } from "./Account";

describe("Account", () => {
  let account: IAccount;

  beforeEach(() => {
    account = new Account("1", 500);
  });

  it("should initialize with 100 balance", () => {
    expect(account.getBalance()).toBe(500);
  });

  it("should allow deposit of positive amount", () => {
    account.deposit(100, 'Deposit');
    expect(account.getBalance()).toBe(600);
  });

  it("should allow withdrawal of positive amount", () => {
    account.deposit(100, 'Deposit');
    account.withdraw(50, 'Withdrawal');
    expect(account.getBalance()).toBe(550);
  });

  it("should not allow withdrawal of more than balance", () => {
    account.deposit(100, 'Deposit');
    expect(() => {
      account.withdraw(700, 'Withdrawal');
    }).toThrowError("Insufficient balance");
    expect(account.getBalance()).toBe(600);
  });
});

