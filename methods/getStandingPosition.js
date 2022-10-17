function getStandingPosition(standingPosition, wide, deep, sides) {
    if(standingPosition.length === 5){
        const widePoint = parseInt(standingPosition[0]);
        const deepPoint = parseInt(standingPosition[2]);
        const facedTo = standingPosition[4];

        if(!isNaN(widePoint) && !isNaN(deepPoint) && sides.includes(facedTo)){
            if(widePoint <= wide + 1 && deepPoint <= deep + 1){
                return {
                    widePoint,
                    deepPoint,
                    facedTo
                }
            }
            // this function will terminate in here if given standing position is not correct.
            console.log(`Standing point wide and deep shouldn't be greater than room wide and deep`)
            return null
        }
        else{
            // this function will terminate in here if given standing position is not in given position.
            console.log('input is not in correct format. Please try again');
            return null;
        }
    }
    else{
        // this function will terminate in here if given standing position is not in given position.
        console.log('input is not in correct format. Please try again');
        return null;
    }
}

module.exports = getStandingPosition