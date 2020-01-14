const {isAdult,sortArrayUp,isPalindrome,isOddnumber,evenNumber,power,reverse} = require('../index.js');
const {expect} = require('chai');
describe ('testing function power',() => {

  it('testing power a , b ', () => {
    expect(power(4, 4),'true').to.be.equal(256);
  });

  it('testing negativ power a , b ', () => {
    expect(power(5, -5), 'test').to.be.equal(0.00031999999999999997);
  });

  it('testing float power a , b ', () => {
    expect(power(5, 0.5), 'test').to.be.equal(2.23606797749979);
  });

  it('testing negativ number a , b ', () => {
    expect(power(-5, 2), 'test').to.be.equal(25);
  });

  it('testing string number a , b ', () => {
    expect(power('5', 5), 'test').to.be.equal(3125);
  });

  it('testing null power a , b ', () => {
    expect(power(5, null), 'test').to.be.equal('Wrong data');
  });

  it('testing null number a , b ', () => {
    expect(power(null, 2), 'test').to.be.equal(0);
  });

});

describe ('testing function isAdult',() => {


  it('Test fn isAdult for age 30 ',() => {
    expect(isAdult(30), 'isAdult age should be true').to.be.true;
  });

  it('Test fn isAdult for age 17 ',() => {
    expect(isAdult(17), 'isAdult age should be true').to.be.false;
  });

  it('Test fn isAdult for age  ',() => {
    expect(isAdult(), 'isAdult age should be true').to.be.undefined;
  });

  it('Test fn isAdult for age String ',() => {
    expect(isAdult('17'), 'isAdult age should be true').to.be.undefined;
  });

  it('Test isAdult for age below  -1',() => {
    expect(isAdult(0), 'isAdult age should be true').to.be.equal('wrong age');

  });

});


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



});


describe ('testing fuction for PolindromWords',() => {

  it('that words not polindrom ', () => {
    expect(isPalindrome('fedor')).to.be.false;
  });

  it('that words polindrom ', () => {
    expect(isPalindrome('bamab')).to.be.true;
    describe('function reverse  ', () => {
      it('simple test', () => {
        assert.deepEqual(reverse([1, 2, 3]), [3, 2, 1]);
      });
      it('simple test', () => {
        assert.deepEqual(reverse([110, 3, 18, 33]), [33, 18, 3, 110]);
      });
      it('simple test', () => {
        assert.deepEqual(reverse(['apple', 'raspberry', 'pear', 'blueberry']), ['blueberry', 'pear', 'raspberry', 'apple']);
      });
    });

    it('that words include number ', () => {
      expect(isPalindrome('bamab23223')).to.be.false;
    });

    it('that words include only numbers', () => {
      expect(isPalindrome('3105013')).to.be.true;
    });

    it('that words include undefined', () => {
      expect(isPalindrome(undefined)).to.be.undefined;
    });


  });
});

describe('testing input number isOddnumber', () => {

  it('testing num isOddnumber', () => {
    expect(isOddnumber(1271)).to.be.true;
  });

  it('testing evenNum isOddnumber', () => {
    expect(isOddnumber(12)).to.be.false;
  });

  it('testing input string in  isOddnumber', () => {
    expect(isOddnumber('32423')).to.be.equal('Wrong data');
  });

  it('testing input array in  isOddnumber', () => {
    expect(isOddnumber([2, 4, 5, 123, '23',])).to.be.equal('Wrong data');
  });

  it('testing input string in  isOddnumber', () => {
    expect(isOddnumber('32423')).to.be.equal('Wrong data');
  });

});


describe('testing input number evenNumber', () => {

  it('testing num evenNumber', () => {
    expect(evenNumber(1271)).to.be.false;
  });

  it('testing evenNum evenNumber', () => {
    expect(evenNumber(12)).to.be.true;
  });

  it('testing input string in  evenNumber', () => {
    expect(evenNumber('32423')).to.be.equal('Wrong data');
  });

  it('testing input array in  evenNumber', () => {
    expect(evenNumber([2, 4, 5, 123, '23',])).to.be.equal('Wrong data');
  });

  it('testing input string in  evenNumber', () => {
    expect(evenNumber('32423')).to.be.equal('Wrong data');
  });


});


describe('function reverse  ', () => {
  it('simple test1', () => {
    expect(reverse([1, 2, 3]), [3, 2, 1]);
  });
  it('simple test2', () => {
  expect(reverse([14, 1123, 1238, 123]), [123, 1238, 1123, 14]);
  });
  it('simple test3', () => {
expect(reverse(['apple', 'raspberry', 'pear', 'blueberry']), ['blueberry', 'pear', 'raspberry', 'apple']);
  });

});
