function RomanNumber (param) {
    throw new Error('value required');
}

////
// TEST
////

(function () {

const testCases = [
    { param: null, error: 'value required' }
];

function stdoutRed (message) { console.log('\x1b[31m%s\x1b[0m', message); }
function stdoutGreen (message) { console.log('\x1b[32m%s\x1b[0m', message); }

for (const testCase of testCases) {
    try {
        new RomanNumber(testCase.param);
        stdoutRed(`Expected ${testCase.param} to throw '${testCase.error}'`);
    } catch (e) {
        if (e.message !== testCase.error) {
            stdoutRed(`Expected ${testCase.param} to throw '${testCase.error}' instead got '${e.message}'`);
        } else {
            stdoutGreen(`Success ${testCase.param} threw '${testCase.error}'`);
        }
    }
}

})();
