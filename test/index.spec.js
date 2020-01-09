const {isAdult} = require("../index.js");
const {expect} = require('chai');


describe ('testing function isAdult',() => {


    it("Test fn isAdult for age 30 ",() => {
        expect(isAdult(30), 'isAdult age should be true').to.be.true;
    })

    it("Test fn isAdult for age 17 ",() => {
        expect(isAdult(17), 'isAdult age should be true').to.be.false;
    })

    it("Test fn isAdult for age  ",() => {
        expect(isAdult(), 'isAdult age should be true').to.be.undefined;
    })

    it("Test fn isAdult for age String ",() => {
        expect(isAdult('17'), 'isAdult age should be true').to.be.undefined;
    })

    it("Test isAdult for age below  -1",() => {
        expect(isAdult(0), 'isAdult age should be true').to.be.equal("wrong age");

    })
})