const getFacingIndex = require('./getFacingIndex');
const { movements, directions } = require("../constants/constants");

const commandValidate = (finalCommand) => {
    // validation for the final command. Command shouldn't contain any values rather tha 'R', 'L' or 'F'
    const charactorArray = [movements.TURN_RIGHT,movements.MOVE_FORWARD,movements.TURN_LEFT];
    for(let i=0; i<finalCommand.length; i++){
        if(!charactorArray.includes(finalCommand[i])){
            return false
        }
    }
    return true
}

const getDeepAndWidePoint = (widePoint, deepPoint, facedTo) => {
    // This method use to change actual wide point and deep point after every movement.
    if(facedTo === directions.NORTH){
        deepPoint = deepPoint - 1;
    }
    else if(facedTo === directions.SOUTH){
        deepPoint = deepPoint + 1;
    }
    else if(facedTo === directions.EAST){
        widePoint = widePoint + 1;
    }
    else if(facedTo === directions.WEST){
        widePoint = widePoint - 1;
    }
    return {
        widePoint,
        deepPoint,
        facedTo
    }
}

function getReportFromFinalCommand(finalCommand, widePoint, deepPoint, facedTo, sides){
    const validationResult = commandValidate(finalCommand);
    let facingSideIndex = sides.indexOf(facedTo);
    if(!validationResult){
        // Error handling: Validate the final command and return null value from the function with console log if given command is not in correct format.
        console.log('Command is not valid. Please check and try again')
        return null;
    }
    for(let i=0; i<finalCommand.length; i++){
        if(finalCommand[i] === movements.TURN_RIGHT || finalCommand[i] === movements.TURN_LEFT){
            facingSideIndex = getFacingIndex(facingSideIndex, finalCommand[i], sides);
            facedTo = sides[facingSideIndex];
        }
        else{
            const currentDeepAndWidePoint = getDeepAndWidePoint(widePoint, deepPoint, facedTo);
            widePoint = currentDeepAndWidePoint.widePoint;
            deepPoint = currentDeepAndWidePoint.deepPoint;
            facedTo = currentDeepAndWidePoint.facedTo;
        }
    }
    return {
        widePoint,
        deepPoint,
        facedTo
    };
}

module.exports = getReportFromFinalCommand