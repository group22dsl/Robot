const assert = require('chai').assert;
const getReportFromFinalCommand = require('../methods/getReportFromFinalCommand');
const { sides, directions } = require('../constants/constants');

describe('Final command tests', function(){
    // Test cases for given scinarios
    it('Function should return correct wide point, deep point and facing side index - test one', function(){
        assert.deepEqual(getReportFromFinalCommand('RFRFFRFRF', 1, 2, directions.NORTH, sides), { "widePoint": 1, "deepPoint": 3, "facedTo": directions.NORTH });
    });

    it('Function should return correct wide point, deep point and facing side index - test two', function(){
        assert.deepEqual(getReportFromFinalCommand('RFLFFLRF', 0, 0, directions.EAST, sides), { "widePoint": 3, "deepPoint": 1, "facedTo": directions.EAST });
    });

    it('Function should return null value if command includes any letters rather than R, L or F', function(){
        assert.equal(getReportFromFinalCommand('RFLFFLRA', 0, 0, directions.EAST, sides), null);
    });
})

