QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "Calculator Test", function( assert ) {
  assert.strictEqual(Test.Name(100), 'Success','Successfully Entered valid Number.');
  assert.strictEqual(Test.Name(-10), 'It is a Negative Number','Returns Please Enter positive number.');
  assert.strictEqual(Test.Name(""),'Empty Value', 'Returns Please Enter the amount.');
  assert.strictEqual(Test.Name("murali"),'It is a String', 'Returns Please Enter only Number');
  
  
  
});

