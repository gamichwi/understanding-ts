var userInput;
var userName;
userInput = 5;
userInput = 'GW';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('An error has occured!', 500);
console.log('undefined', result);
