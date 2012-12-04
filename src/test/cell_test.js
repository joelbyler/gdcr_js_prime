(TestCase("GOLTest")).prototype = {
      setUp: function () {
            /*:DOC += <div id="testdiv" /> */
      },
      testThereShouldBeCells: function () {
 
            var result = functionUnderTest();
           
            assertTrue(result);
            
      }
};