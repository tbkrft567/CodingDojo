class User:
    def __init__(self):
        self.name = "Zach Kraft"
        self.email = "Kraftzachariah@yahoo.com"
        self.account_balance = 0

    def make_deposit(self,amount):
        self.account_balance += amount
        return self
    def make_withdrawal(self,amount):
        self.account_balance -= amount
        return self
    def display_user_balance(self):
        userBalance = 'User: '+self.name+', Balance $'+str(self.account_balance)
        
        print(userBalance)
        return self
    def transfer_user_balance(self, recipient, amount):
        self.account_balance-=amount
        recipient.account_balance+=amount
        userBalance_self= 'Transfer Made - User: '+self.name+', Balance $'+str(self.account_balance)+' Transfer Amount: $-'+str(amount)
        userBalance_recipient= 'Transfer Made - User: '+recipient.name+', Balance $'+str(recipient.account_balance)+' Transfer Amount: $+'+str(amount)
        print(userBalance_self)
        print(userBalance_recipient)
        return self

Zach = User()
James = User()
Shelby = User()

Zach.name = 'Zach'
James.name = 'James'
Shelby.name = 'Shelby'

Zach.name
# Zach.display_user_balance()

Zach.make_deposit(125).make_deposit(125).make_withdrawal(350).display_user_balance()

James.make_deposit(325).make_deposit(120).make_withdrawal(400).make_withdrawal(400).display_user_balance()

Shelby.make_deposit(100).make_withdrawal(25).make_withdrawal(25).make_withdrawal(25).display_user_balance()

Shelby.transfer_user_balance(Zach, 125)