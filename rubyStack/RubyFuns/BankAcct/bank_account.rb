class BankAccount
   attr_reader :accountNum, :checkingBalance, :savingsBalance, :interestRate 
   @@BankCounting = 0
   def initialize
      @accountNum = rand(9999..99999)
      @checkingBalance = 0
      @savingsBalance = 0
      @@BankCounting += 1
      @interestRate = 0.01
   end
   
   def checkingBalance
      puts @checkingBalance
   end
   def savingsBalance
      puts @savingsBalance
   end
   def depositMoney(money, accountType)
      if accountType == 'checking'
         @checkingBalance += money 
      elsif accountType == 'savings'
         @savingsBalance += money 
      else
         puts 'This account does not exist'
      end
   end
   def withdrawMoney(money, accountType)
      if accountType == 'checking'
         if @checkingBalance < money
            puts 'NSF'
         else
            @checkingBalance -= money 
         end
      elsif accountType == 'savings'
         if @savingsBalance < money
            puts 'NSF'
         else
            @savingsBalance -= money 
         end
      end
   end
   def withdrawMoneySavings(money)
      
   end
   def callFunction
      accountDetails
   end
   def account_information
      puts @accountNum
      puts @checkingBalance
      puts @savingsBalance
      puts @interestRate
   end
   private
      def accountDetails
         puts @accountNum
      end
   
end

# account1 = BankAccount.new
# account1.callFunction
# account1.checkingBalance
# account1.savingsBalance
# account1.depositMoneyChecking(50)
# account1.depositMoneySavings(50)
# account1.withdrawMoneyChecking(55)
# account1.withdrawMoneySavings(55)
# account1.checkingBalance
# account1.savingsBalance

# # Must have a function to call a private function