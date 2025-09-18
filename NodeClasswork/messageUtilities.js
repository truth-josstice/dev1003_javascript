function messageRepeater(message, repeatCount) {
    let repeatedResult = "";

    for (let i = 0; i < repeatCount; i++) {
        repeatedResult += message;
    };

    return repeatedResult;
};

module.exports = { messageRepeater };