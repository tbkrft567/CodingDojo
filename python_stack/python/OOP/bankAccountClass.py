class BankAccount:
    def __init__(self, int_rate=.03, balance=0):
        self.int_rate = int_rate
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        print('Deposit Successful...')
        return self
    def withdraw(self, amount):
        if amount>self.balance:
            print('Insufficient funds: Charging a $5 fee')
            self.balance -= 5
            self.balance -= amount
        else: 
            self.balance -= amount
        print('Withdrawal Successful...')
        return self
    def display_account_info(self):
        userBalance = 'Balance $'+str(self.balance)
        print(userBalance)
        return self
    def yield_interest(self,int_rate):
        if self.balance > 0:
            print('Interest Applied iao of $'+str(self.balance*int_rate))
            self.balance=(self.balance*int_rate)+self.balance
        else:
            print('Not Yield: Balance is negative')
        return self

checkingAccount = BankAccount(.025, 10023)
savingsAccount = BankAccount(.025, 105723)

checkingAccount.deposit(2523).deposit(5000).deposit(235).withdraw(4000).display_account_info().yield_interest(checkingAccount.int_rate).display_account_info()
savingsAccount.deposit(2523).deposit(5000).withdraw(235).withdraw(4000).withdraw(235).withdraw(4000).display_account_info().yield_interest(checkingAccount.int_rate).display_account_info()