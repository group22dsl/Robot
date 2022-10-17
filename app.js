const prompt = require("prompt-sync")({ sigint: true });
const getStandingPosition = require('./methods/getStandingPosition');
const getReportFromFinalCommand = require('./methods/getReportFromFinalCommand');
const { commonConstants, sides } = require('./constants/constants')

const wideAndDeep = prompt("What is the wide and deep of room? (Ex: 3 5): ");

const main = (wideAndDeep) => {
    if(wideAndDeep.length === commonConstants.FIRST_COMMAND_ACCEPTANCE_LENGTH){
        const wide = parseInt(wideAndDeep[0]);
        const deep = parseInt(wideAndDeep[2]);
    
        if(!isNaN(wide) && !isNaN(deep)){
            const standingPositionInput = prompt("What is the standing position? (Ex: 1 2 N): ");
            const standingPosition = getStandingPosition(standingPositionInput, wide, deep, sides);
            if(standingPosition){
                const { widePoint, deepPoint, facedTo } = standingPosition;
                const finalCommand = prompt("Please insert the final command? (Ex: LRFLLFRFF): ");
                const report = getReportFromFinalCommand(finalCommand, widePoint, deepPoint, facedTo, sides);
                if(report){
                    console.log(`The final report is: ${report.widePoint} ${report.deepPoint} ${report.facedTo}`);
                }
            }
        }
        else{
            // function will terminate in here, if given standing position is not in correct format. (ex: '8 Y N')
            console.log('input is not in correct format');
        }
    }
    else{
        // function will terminate in here, if given standing position is not in correct format. (ex: '8 Y N B')
        console.log('input is not in correct format');
    }
}

main(wideAndDeep);