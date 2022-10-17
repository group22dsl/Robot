const assert = require('chai').assert;
const getStandingPosition = require('../methods/getStandingPosition');
const { sides } = require('../constants/constants');

describe('Standing position test', function(){
    it('Function should return correct wide point, deep point and facing side', function(){
        assert.deepEqual(getStandingPosition('1 1 N', 5, 5, sides), { "widePoint": 1, "deepPoint": 1, "facedTo": 'N' });
    });

    it('Function should return null value, if given deep value is greater than actual room deep', function(){
        assert.equal(getStandingPosition('1 7 N', 5, 5, sides), null);
    });

    it('Function should return null value, if given wide value is greater than actual room wide', function(){
        assert.equal(getStandingPosition('7 3 N', 5, 5, sides), null);
    });

    it('Function should return null value, if given standing position is not in correct format - test one', function(){
        assert.equal(getStandingPosition('7 3 M', 5, 5, sides), null);
    });

    it('Function should return null value, if given standing position is not in correct format - test two', function(){
        assert.equal(getStandingPosition('U 3 N', 5, 5, sides), null);
    });
})

