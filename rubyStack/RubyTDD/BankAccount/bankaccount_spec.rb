require_relative 'bank_account'
RSpec.describe BankAccount do
   before(:each) do
      @acct1 = BankAccount.new
      @acct1.depositMoney(50, 'checking')
   end
   it 'has a getter method for retrieving the cheking account balance' do
      expect(@acct1.checkingBalance).to eq(50)
   end
   it 'has a getter method that retrieves the total account balance' do
      expect(@acct1.totalBalance).to eq(50)
   end
   it 'has a function that allows the user to withdraw cash' do
      @acct1.withdrawMoney(25,'checking')
      expect(@acct1.checkingBalance).to eq(25)
   end
   it 'Raises an error if a user tries to withdraw more money than they have in the account' do
      expect(@acct1.withdrawMoney(75,'checking')).to eq('NSF')
   end
   it 'raises an error when the suser attempts to retrieve the total number of bank accounts' do
      expect{@acct1.BankCounting}.to raise_error(NoMethodError)
   end
   it 'raises an error when the suser attempts to set the interest rate' do
      expect{@acct1.interestRate =0.05 }.to raise_error(NoMethodError)
   end
end