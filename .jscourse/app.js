const defaultResult = 0
let currentResult = defaultResult;

function getUserNumberInput (){
    return parseInt(userInput.value)
}

function createAndWriteOutput(operator, resultBeforeCalc, CalcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${CalcNumber}`
    outputResult(currentResult, calcDescription);
}

function add() {
    const enteredNum =  getUserNumberInput();
    const intialResult = currentResult;
    currentResult += enteredNum;
    createAndWriteOutput('+', intialResult, enteredNum)
    const logEntry = {
        operation: "ADD",
        prevResult: intialResult,
        number: enteredNum,
        result: currentResult

    }
    logEntries.push(logEntry);
    console.log(logEntries);
}

function subtract(){
    const enteredNum =  getUserNumberInput();
    const intialResult = currentResult;
    currentResult -= enteredNum;
    createAndWriteOutput('-', intialResult, enteredNum)
}

function multiply(){
    const enteredNum =  getUserNumberInput();
    const intialResult = currentResult;
    currentResult *= enteredNum;
    createAndWriteOutput('*', intialResult, enteredNum)
}

function divide(){
    const enteredNum =  getUserNumberInput();
    const intialResult = currentResult;
    currentResult /= enteredNum;
    createAndWriteOutput('/', intialResult, enteredNum);
}

addBtn.addEventListener('click', add)


