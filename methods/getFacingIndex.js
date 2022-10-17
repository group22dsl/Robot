const { movements } = require('../constants/constants')

// This method use to get Robot's facing side after every movement.
// This function doesn't contain any error handling since parent method handle all the posible errors.
function getFacingIndex(currentIndex, currentPosition, sides) { 
    if(currentPosition === movements.TURN_RIGHT){
        currentIndex = currentIndex + 1;
    }
    else if(currentPosition === movements.TURN_LEFT){
        currentIndex = currentIndex - 1;
    }

    if(currentIndex >= sides.length){
        return 0;
    }
    if(currentIndex < 0){
        return sides.length - 1;
    }
    return currentIndex;
};

module.exports = getFacingIndex