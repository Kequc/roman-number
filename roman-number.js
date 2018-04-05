function getInt (param) {
    const parsed = parseInt(param, 10);

    if (typeof parsed === 'number') {
        if (parsed < 1 || parsed > 3999) throw new Error('invalid range');
    }
    if (!param) throw new Error('value required');

    return parsed;
}

function RomanNumber (param) {
    getInt(param);
}

////
// TEST
////

(function () {

const testCases = [
    { param: null, error: 'value required' },
    { param: '', error: 'value required' },
    { param: 0, error: 'invalid range' }
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
