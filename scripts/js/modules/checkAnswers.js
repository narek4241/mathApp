// functionality in MAIN_TABLE

// Checks answers

function checkAnswers(){
    // Checking answers (comparing elem by elem)
    for(let i = 0; i < checkSheet.length; i++){
        resultSheet.push([]);
        for(let j = 0; j < checkSheet[0].length; j++){
            if(answerSheet[i][j] == checkSheet[i][j]){
                resultSheet[i].push("true");
            }
            else if(isNaN(answerSheet[i][j])){
                resultSheet[i].push("-");
            }
            else{
                resultSheet[i].push("false");
            }
        }
    }
    // console.log(`ResultSheet`);
    // console.log(resultSheet);

    // Getting Statistics ([resultSheet] -> {overallResultSheet})
    for(let i = 0; i < resultSheet.length; i++){
        for(let j = 0; j < resultSheet[0].length; j++){
            
            // presenting [resultSheet] elems in [simpleResultSheet] (from 2d -> 1d)
            simpleResultSheet.push(resultSheet[i][j]);

            // getting statistics in {overallResultSheet}
            overallResultSheet['trueAnswers'] = simpleResultSheet.filter(match => match == "true").length;
            overallResultSheet['falseAnswers'] = simpleResultSheet.filter(match => match == "false").length;
            overallResultSheet['emptyAnswers'] = simpleResultSheet.filter(match => match == "-").length;
            
            // console.log(overallResultSheet);
        }
    }

    // console.log(`overallResultSheet`);
    // console.log(overallResultSheet);
}