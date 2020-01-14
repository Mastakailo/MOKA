MOCHA AND CHAI, TEST SUITES AND TEST CASES
Mocha and Chai are two JavaScript frameworks commonly used together for unit testing. Mocha is a testing framework that provides functions that are executed according in a specific order, and that logs their results to the terminal window. When you read tests written in Mocha, you’ll see regular use of the keywords describe and it. These keywords, provided by Mocha, provide structure to the tests by batching them into test suites and test cases. A test suite is a collection of tests all relating to a single functionality or behavior. A test case or a unit test is a single description about the desired behavior of the code that either passes or fails. Test suites are batched underneath the describe keyword, and test cases are batched under the it keyword. Additionally, Mocha provides tools for cleaning the state of the software being tested in order to insure that test cases are being run independently of each other. You might end up using other tools, to stub or mock the desired behaviors of other units that a given unit of code might interact with. The independence of test cases is a key principle of unit testing, as it allows the cause of errors to be pinpointed more specifically if a test case fails, thereby speeding up the debugging process.

ASSERTIONS
The base component of test cases are assertions. Assertions are tied to particular values (whereas test cases are descriptions of behavior) and they will fail if the expected value does not match the actual value. Every assertion in a test case must be met in order for the test case to pass. Chai is an assertion library that is often used alongside Mocha. It provides functions and methods that help you compare the output of a certain test with its expected value. Chai provides clean syntax that almost reads like English!

Example of a Chai assertion:

expect(exampleArray).to.have.lengthOf(3);
This code will check whether that the variable exampleArray has a length of three or not.

FAILING AND PASSING TESTS
Robust tests are accurate for both failing and passing conditions! When writing tests, you need to make sure that the test fails if the feature that it is testing was not implemented properly, as well as making sure that the test passes if it is. Tests that will erroneously pass can be enormously misleading, and might lead to broken code getting merged and deployed.

Interface style assertions "Should" => chai.should();
Interface style assertions "Expect" => var expect = chai.expect;
Interface style assertions "Assert" => var assert = chai.assert;
INSTALLATIONS
GETTING STARTED
$ npm install mocha

$ npm install chai

Then run tests with:
$ npm test
Structure




isAdult,sortArrayUp,isPalindrome,isOddnumber,evenNumber,power,reverse};