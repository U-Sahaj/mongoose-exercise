import { TransactionFactory } from "../model/TransactionFactory";
import { AccountService } from "./AccountService";

describe("AccountService", () => {
    describe("createCustomer", () => {
        it('should create a new customer with a unique id', () => {
            const accountService = new AccountService();
            const customerName = 'John';
          
            const customer1 = accountService.createCustomer(customerName);
            expect(customer1.name).toBe(customerName);
            expect(customer1.id).toBeDefined();
          
            const customer2 = accountService.createCustomer(customerName);
            expect(customer2.name).toBe(customerName);
            expect(customer2.id).not.toBe(customer1.id);
          });
    })

    describe("createAccount", () => {
      it("creates a new account with the specified ID and adds it to the specified customer", () => {
        // Arrange
        const customerName = "Mary";
        const initialBalance = 100;
        const accountService = new AccountService();
        const customer = accountService.createCustomer(customerName);
        
        // Act
        const account = accountService.createAccount(customer.id,initialBalance);
  
        // Assert
        expect(account).toBeDefined();
        expect(account.getBalance()).toBe(initialBalance);
        });
    });
  
    describe("deposit", () => {
      it("deposits the specified amount into the specified account", () => {
        // Arrange
        const accountId = "123";
        const initialBalance = 200;
        const accountService = new AccountService();
        const customer = accountService.createCustomer("John Doe");
        const account = accountService.createAccount(customer.id, initialBalance);
  
        // Act
        accountService.deposit(account.id, 100, 'Deposit');
  
        // Assert
        expect(account.getBalance()).toBe(initialBalance+100);
        expect(account.getTransactions()).toHaveLength(1);
        expect(account.getTransactions()[0].amount).toBe(100);
        expect(account.getTransactions()[0].description).toBe("Deposit");
      });
    });
  
    describe("withdraw", () => {
      it("withdraws the specified amount from the specified account", () => {
        // Arrange
        const accountId = "123";
        const initialBalance = 10;
        const accountService = new AccountService();
        const customer = accountService.createCustomer("Harry");
        const account = accountService.createAccount(customer.id, initialBalance);
        account.deposit(500, 'Deposit');
  
        // Act
        accountService.withdraw(account.id, 200, 'Withdrawal');
  
        // Assert
        expect(account.getBalance()).toBe(initialBalance+300);
        expect(account.getTransactions()).toHaveLength(2);
        expect(account.getTransactions()[0].amount).toBe(500);
        expect(account.getTransactions()[0].description).toBe("Deposit");
        expect(account.getTransactions()[1].amount).toBe(-200);
        expect(account.getTransactions()[1].description).toBe("Withdrawal");
      });
  
      it("throws an error if the specified account does not have sufficient funds", () => {
        // Arrange
        const accountId = "123";
        const initialBalance = 10;
        const accountService = new AccountService();
        const customer = accountService.createCustomer("Harry");
        const account = accountService.createAccount(customer.id, initialBalance);
  
        // Act & Assert
        expect(() => accountService.withdraw(account.id, 100, 'Withdrawal')).toThrowError(
          "Insufficient balance"
        );
        expect(account.getBalance()).toBe(initialBalance);
        expect(account.getTransactions()).toHaveLength(0);
      });
    });
  
    it('should return last 5 transactions in descending order for a customer', () => {
        // Arrange
        const accountId = "123";
        const initialBalance = 0;
        const accountService = new AccountService();
        const customer = accountService.createCustomer("Harry");
        const account = accountService.createAccount(customer.id, initialBalance);

        // Act
        accountService.deposit(account.id, 100, 'Deposit 1');
        accountService.withdraw(account.id, 50, 'Withdrawal 1');
        accountService.deposit(account.id, 75, 'Deposit 2');
        
        //Assert
        const transactions = accountService.getTransactions(account.id,5);
        const expectedOutput = [
          {
            description: 'Deposit 1',
            date: transactions[0].date,
            amount: 100,
          },
          {
            description: 'Withdrawal 1',
            date: transactions[1].date,
            amount: -50,
          },
          {
            description: 'Deposit 2',
            date: transactions[2].date,
            amount: 75,
          },
        ];
      
        expect(transactions).toHaveLength(3);
        expect(transactions).toEqual(expectedOutput);
        expect(account.getBalance()).toBe(125);
      });
    });      