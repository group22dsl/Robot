const assert = require('chai').assert;
const getFacingIndex = require('../methods/getFacingIndex');
const { movements, sides } = require('../constants/constants');

describe('Facing index tests', function(){
    it('Function should return correct side index when turn into right', function(){
        assert.equal(getFacingIndex(0, movements.TURN_RIGHT, sides), 1);
    });

    it('Function should return correct side index when turn into left', function(){
        assert.equal(getFacingIndex(2, movements.TURN_LEFT, sides), 1);
    });

    it('Function should return correct side index when index is greater than sides array length', function(){
        assert.equal(getFacingIndex(4, movements.TURN_RIGHT, sides), 0);
    });

    it('Function should return correct side index when index is less than 0', function(){
        assert.equal(getFacingIndex(0, movements.TURN_LEFT, sides), 3);
    });
})

