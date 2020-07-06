// TDD Test Driven Development
// 1. Writing the test - 2. Coding - 3. Refactoring the Code
const assert = require("assert");
const Math = require("../math");
const expect = require("chai").expect;
const sinon = require("sinon");


describe("Math class", function () {
    // Hooks: Function to reset dynamic values before running
    it("Sum two numbers", function (done) {
        const math = new Math();

        // // Using Assert (Node)
        // math.sum(5, 5, value => {
        //     assert.equal(value, 10);
        //     done();
        // });

        // Using Expect (Chai Lib)
        math.sum(5, 5, value => {
            expect(value).to.equal(10);
            done();
        })

        // try {
        //     assert.equal(math.sum(5, 5), 10);
        // } catch(err) {
        //     console.log(err);
        // }

    });

    //it.skip to skip any test
    it("Multiply two numbers", function () {
        const math = new Math();

        // // Using Assert (Node)
        // assert.equal(math.multiply(5, 5), 25);

        // Using Expect (Chai Lib)
        expect(math.multiply(5, 5)).to.equal(25);
    });

    it.only("Calls request with sum and index values", function () {
        const request = {};
        const response = {
            load: sinon.spy()
        };

        const math = new Math();

        math.printSum(request, response, 5, 5);

        // expect(response.load.calledOnce).to.be.true;
        expect(response.load.args[0][0]).to.be.equal("index");

    })
});

// BDD Behavior Driven Development
// 1. Writing the test - 2. Documenting - 3. Giving Examples

