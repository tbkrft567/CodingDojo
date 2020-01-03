require_relative 'appleTree'
RSpec.describe AppleTree do
   before(:each) do
      @tree1 = AppleTree.new
   end
   
   context "has an age attribute with getter and setter methods" do
      it 'Age attribute has getter method' do
         expect(@tree1.age).to eq(0)
      end
      it 'Age attribute has setter method' do
         @tree1.age = 2
         expect(@tree1.age).to eq(2)
      end
   end
   context "Apple Tree should have a height attribute with only a getter method. You should raise a NoMethodError if anyone tries to set the height attribute directly." do
      it 'Height attribute has getter method' do
         expect(@tree1.height).to eq(50)
      end
      it 'Height attribute throws setting error' do
         
         expect{@tree1.height = 100}.to raise_error(NoMethodError)
      end
   end
   context "Apple Tree should have a appleCount attribute with only a getter method. You should raise a NoMethodError if anyone tries to set the appleCount attribute directly." do
      it 'appleCount attribute has getter method' do
         expect(@tree1.appleCount).to eq(0)
      end
      it 'appleCount attribute throws setting error' do
         
         expect{@tree1.appleCount = 15}.to raise_error(NoMethodError)
      end
   end
   context "Apple Tree should have a method called year_gone_by" do
      before(:each) do
         @tree1.year_gone_by
      end
      it 'method adds 1 year to Age' do
         expect(@tree1.age).to eq(1)
      end
      it 'method increases height by 10%' do
         expect(@tree1.height).to eq(55)
      end
      it 'method adds 2 to Apple Count' do
         expect(@tree1.appleCount).to eq(0)
      end
   end
   context "Apple Tree should not grow apples for the first hree years of its life" do
      it 'method adds to Apple Count if Age > 3' do
         @tree1.year_gone_by(4)
         expect(@tree1.age).to eq(4)
         expect(@tree1.appleCount).to eq(2)
      end
      it 'method does not add to Apple Count if Age < 3' do
         @tree1.year_gone_by()
         expect(@tree1.appleCount).to eq(0)
      end
      it 'method does not add to Apple Count if Age > 10' do
         @tree1.year_gone_by(10)
         expect(@tree1.age).to eq(10)
         expect(@tree1.appleCount).to eq(14)
         @tree1.year_gone_by()
         expect(@tree1.age).to eq(11)
         expect(@tree1.appleCount).to eq(14)
      end
   end
   context "Apple Tree should have a method called pick_apples that takes all of the apples off the tree" do
      it 'method should remove all apples from the tree' do
         @tree1.year_gone_by(4)
         expect(@tree1.appleCount).to eq(2)
         @tree1.pick_apples
         expect(@tree1.appleCount).to eq(0)
      end
   end
end