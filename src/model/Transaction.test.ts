import { TransactionFactory } from "./TransactionFactory";


describe("TransactionFactory", () => {
  let transactionFactory: TransactionFactory;

  beforeEach(() => {
    transactionFactory = TransactionFactory.getInstance();
  });

  it("should create transaction with correct amount and description", () => {
    const transaction = transactionFactory.createTransaction(100, "Deposit");
    expect(transaction.amount).toBe(100);
    expect(transaction.description).toBe("Deposit");
  });

  it("should create transaction with correct date", () => {
    const now = new Date();
    const transaction = transactionFactory.createTransaction(200, "Deposit");
    expect(transaction.date.getTime()).toBeGreaterThanOrEqual(now.getTime());
  });

  it("should create debit transaction for withdrawal", () => {
    const transaction = transactionFactory.createTransaction(150, "Withdrawal");
    expect(transaction.amount).toBe(150);
  });
});
