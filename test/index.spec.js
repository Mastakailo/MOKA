const {isAdult,sortArrayUp} = require("../index.js");
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


describe ('testing function sortArrayUp', () => {
    it('sort data up  ',  () => {
        expect(sortArrayUp([3,5,2,3,1])).to.deep.equal([1,2,3,3,5]);

    });
    it('sort data up empty ',  () => {
        expect(sortArrayUp([])).to.deep.equal([]);
    });

    it('sort data up string ',  () => {
        expect(sortArrayUp('house')).to.be.undefined;
    });

    it('sort data up   negativ ',  () => {
        expect(sortArrayUp([-2,3,-19,34,-98])).to.deep.equal([-98, -19, -2, 3, 34]);

    });

    it('sort data up   mixArr ',  () => {
        expect(sortArrayUp([12,'Mad','4rfs',99])).to.be.undefined;

    });



})