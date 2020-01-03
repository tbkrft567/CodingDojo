function consoleThis(){
    console.log('this');
}
consoleThis();
    
describe("consoleThis", function() { 
    it("should return this", function() { 
        expect(consoleThis()).toEqual('this'); 
    }); 
    // it("should return [2,4,8,1] when [1,8,4,2] is passed", function() { 
    //     expect(reverseArray([2,4,8,1])).toEqual([1,8,4,2]); 
    // }); 
});
