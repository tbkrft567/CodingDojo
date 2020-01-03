class BankAccount:
    def __init__(self, name, int_rate=.01, balance=0):
        self.accountName = name,
        self.int_rate = int_rate,
        self.balance = balance
    

class User:
    def __init__(self):
        self.firstName = "",
        self.lastName = "",
        self.account = {}
    def addAccount(self, accountName, int_rate=.01, balance=0):
        self.account = BankAccount(accountName, int_rate, balance)
        return self
    def returnAttributes(self):
        print(self.firstName)
        print(self.lastName)
        print(self.account)
    def printAccount(self, accountName):
        print(self.account)



Zach = User()
Zach.firstName = 'Zach'
Zach.lastName = 'Kraft'
Zach.addAccount(accountName='checkingAccount', int_rate=.01, balance=0)
# Zach.returnAttributes()

print(Zach.account.int_rate, Zach.account.balance)
Zach.printAccount('checkingAccount')
