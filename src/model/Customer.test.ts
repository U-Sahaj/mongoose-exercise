import { IAccount } from "../interfaces/IAccount";
import { ICustomer } from "../interfaces/ICustomer";
import { Customer } from "./Customer";

describe("Customer", () => {
  let customer: ICustomer;

  beforeEach(() => {
    customer = new Customer("1", "John");
  });

  it("should have a name and id", () => {
    expect(customer.id).toBe("1");
    expect(customer.name).toBe("John");
  });

  it("should have no accounts initially", () => {
    expect(customer.getAccount('1')).toBeUndefined();
  });

  it("should be able to open new account", () => {
    const account: IAccount = customer.addAccount(10);
    expect(account.getBalance()).toBe(10);
  });
});
