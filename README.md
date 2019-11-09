# ps-node-mocha-testing
Pluralsight class "Testing JavaScript for Node.js with Mocha

https://app.pluralsight.com/library/courses/mocha-javascript-testing-nodejs/table-of-contents

----

* https://github.com/jonathanfmills/TestingNodeWithMocha
* could use `nvm` if we need it.  Not yet.

## Testing with Mocha
* https://mochajs.org/
* The test runner
* `npm install -g mocha` **and** `npm install mocha`
* mocha discourages the use of arrow functions for tests because this prevents access to the Mocha context where you can change things like test timeouts for testing async functions. https://mochajs.org/#arrow-functions
* `.only()` on `describe` or `it` to only run those tests
* `.skip()` on `describe` or `it` to skip those tests.

## Using Chai assertions
* https://www.chaijs.com/
* `should` adds itself to the `Object.prototype`
* `chai-as-promised` module for testing async with promises

## Mocking with Sinon
* https://sinonjs.org/

## Testing real stuff
* `rewire` npm package
