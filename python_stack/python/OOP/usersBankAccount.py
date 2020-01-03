# ***Look into modularization if you want to split the classes into separate files
# ***Revisit the optional exercises in fundamentals
class BankAccount:
    def __init__(self, int_rate=.03, balance=0):
        self.int_rate = int_rate
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        if amount>self.balance:
            print('Insufficient funds: Charging a $5 fee')
            self.balance -= 5
            self.balance -= amount
        else: 
            self.balance -= amount

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

    def accountDetails(self, name, openingBalance):
        accountOpened = {'name': name, 'balance': openingBalance}
        return accountOpened


class User:
    def __init__(self, name):
        self.name = name
        self.email = "Kraftzachariah@yahoo.com"
        self.account = []
        # {
        # 'checkingAccount': BankAccount(int_rate=.03, balance=0), 
        # 'savingsAccount': BankAccount(int_rate=.03, balance=0), 
        # }
## List Bank account
## addAccount
    def openAccount(self, newAccount):
        self.account.append(newAccount)
        return self
    
    def deposit(self,amount,key):
        self.account[key].balance += amount
        print('Deposit Successful...')
        return self

    def withdrawal(self,amount,key):
        if amount>self.account[key].balance:
            print('Insufficient funds: Charging a $5 fee')
            self.account[key].balance -= 5
            self.account[key].balance -= amount
        else: 
            self.account[key].balance -= amount
        print('Withdrawal Successful...')
        return self

    def display_user_balance(self,key):
        userBalance = 'User: '+self.name+', Balance $'+str(self.account[key].balance)
        print(userBalance)
        return self

# =====================================================================================================================================================================================
# Zach = User() # INTSTANCIATE USER
# Zach.name = 'Zach Kraft' # GIVE USER ATTRIBUTES
# Zach.email = 'kraftzachariah@ahoo.com'
# print(Zach.account['checkingAccount'].balance) # IMPROVEMENT: MAKE KEY THIS MORE ACCESSIBLE BY SHORTENING THE NAME c: checkingAccount - checkingAccount: BankAccount(int_rate=.03, balance=0)
# print(Zach.account['savingsAccount'].balance)

# Zach.deposit(3333,key='checkingAccount') # FIRST FUNCTION CALL WHICH INCLUDES THE KEY NECESSARY TO ACCESS THE MULTIPLE ACCOUNTS OWNED BY THE USER
# Zach.deposit(9996,key='savingsAccount')
# Zach.withdrawal(15,key='checkingAccount') 
# Zach.withdrawal(300,key='savingsAccount')

# print('Checking Account Balance:', Zach.account['checkingAccount'].balance)
# print('Savings Account Balance:', Zach.account['savingsAccount'].balance)

user1 = User("Zach")
bank1 = BankAccount()
print(user1.account)
user1.openAccount(bank1.accountDetails('checkingAccount', 500))
print(user1.account)