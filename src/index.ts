import db from './db';
import { AccountService } from './services/accountService';

// Create an instance of the AccountService
const accountService = new AccountService();

// Example usage:
(async () => {
  await db; // Wait for the MongoDB connection to be established

  // Create a new customer and account
  const customer = await accountService.createCustomer('John Doe');
  const account = await accountService.createAccount(customer.id,0);

  // Deposit money into the account
  await accountService.deposit(account.id, 1000, 'Deposit');

  // Withdraw money from the account
  await accountService.withdraw(account.id, 500, 'Withdrawal');

  // Get the balance of the account
  const balance = await accountService.getBalance(account.id);
  console.log(`Account balance: ${balance}`);

  // List the last 5 transactions for the account
  const transactions = await accountService.getTransactions(account.id,5);
  console.log('Account transactions:');
  transactions.forEach((transaction) => {
    console.log(`${transaction.description}, ${transaction.date}, ${transaction.amount}`);
  });

  // List high value customers
  const highValueCustomers = await accountService.listHighValueCustomers();
  console.log('High value customers:');
  highValueCustomers!.forEach((customer) => {
    console.log(`${customer.name}`);
  });
})();
