require_relative 'bank_account'
class User < BankAccount

   def implicitly_accountDetails
      accountDetails
   end
   def UserCheckBal
      checkingBalance
   end
   def UserSaveBal
      savingsBalance
   end
   def accountNum
      callFunction
   end
   def deposit(money, accountType)
      depositMoney(money, accountType)
   end
   def withdraw(money, accountType)
      withdrawMoney(money, accountType)
   end
end

Tom = User.new
Tom.deposit(150, 'checking')
Tom.deposit(150, 'savings')
Tom.withdraw(100, 'checking')
Tom.withdraw(50, 'checking')
Tom.UserCheckBal
Tom.UserSaveBal
Tom.callFunction
Tom.account_information
# Tom.accountNum = 1
# Tom.checkingBalance = 0
# Tom.savingsBalance = 0
# Tom.interestRate = 0