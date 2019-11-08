# ps-node-mocha-testing
Pluralsight class "Testing JavaScript for Node.js with Mocha

https://app.pluralsight.com/library/courses/mocha-javascript-testing-nodejs/table-of-contents

----

* https://github.com/jonathanfmills/TestingNodeWithMocha
* could use `nvm` if we need it.  Not yet.

## Testing with Mocha
* The test runner
* `npm install -g mocha` **and** `npm install mocha`
* mocha discourages the use of arrow functions because this prevents access to the Mocha context where you can change things like test timeouts for testing async functions.
* `.only()` on `describe` or `it` to only run those tests
* `.skip()` on `describe` or `it` to skip those tests.

## Using Chai assertions
* https://www.chaijs.com/
* 