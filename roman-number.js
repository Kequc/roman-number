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

function buildInstance (param, error) {
    try {
        const instance = new RomanNumber(param);
        if (error !== undefined) {
            stdoutRed(`Expected ${param} to throw '${error}'`);
        }
        return instance;
    } catch (e) {
        if (error === undefined) {
            stdoutRed(`Expected ${param} to not throw an error instead got '${e.message}'`);
        } else if (e.message !== error) {
            stdoutRed(`Expected ${param} to throw '${error}' instead got '${e.message}'`);
        } else {
            stdoutGreen(`Success ${param} threw '${error}'`);
        }
    }
}

for (const testCase of testCases) {
    buildInstance(testCase.param, testCase.error);
}

})();
