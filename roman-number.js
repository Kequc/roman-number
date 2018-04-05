const DICT = [
    { int: 1000, rom: 'M' },
    { int: 900, rom: 'CM' },
    { int: 500, rom: 'D' },
    { int: 400, rom: 'CD' },
    { int: 100, rom: 'C' },
    { int: 90, rom: 'XC' },
    { int: 50, rom: 'L' },
    { int: 40, rom: 'XL' },
    { int: 10, rom: 'X' },
    { int: 9, rom: 'IX' },
    { int: 5, rom: 'V' },
    { int: 4, rom: 'IV' },
    { int: 1, rom: 'I' }
];

////
// UTIL
////

function fromRoman (rom) {
    return 1;
}

function toRoman (int) {
    if (int === 0) return '';
    for (const obj of DICT) {
        if (int >= obj.int) return obj.rom + toRoman(int - obj.int);
    }
}

function getInt (param) {
    const parsed = parseInt(param, 10);

    if (typeof parsed === 'number') {
        if (parsed < 1 || parsed > 3999) throw new Error('invalid range');
    }
    if (!param) throw new Error('value required');

    if (isNaN(parsed)) {
        if (typeof param === 'string') return fromRoman(param);
    }

    return parsed;
}

////
// LIB
////

function RomanNumber (param) {
    this._int = getInt(param);
}

RomanNumber.prototype.toInt = function () {
    return this._int;
};

RomanNumber.prototype.toString = function () {
    return toRoman(this._int);
};

////
// TEST
////

(function () {

const testCases = [
    { param: null, error: 'value required' },
    { param: '', error: 'value required' },
    { param: 0, error: 'invalid range' },
    { param: 1, int: 1, rom: 'I' },
    { param: 3, int: 3, rom: 'III' },
    { param: 4, int: 4, rom: 'IV' },
    { param: 5, int: 5, rom: 'V'},
    { param: 'I', int: 1, rom: 'I' }
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
    const instance = buildInstance(testCase.param, testCase.error);
    if (instance === undefined) continue;

    const int = instance.toInt();
    if (int === testCase.int) {
        stdoutGreen(`Success ${testCase.param} toInt() returns ${testCase.int}`);
    } else {
        stdoutRed(`Expected ${testCase.param} toInt() to return ${testCase.int} instead got ${int}`);
    }

    const rom = instance.toString();
    if (rom === testCase.rom) {
        stdoutGreen(`Success ${testCase.param} toString() returns ${testCase.rom}`);
    } else {
        stdoutRed(`Expected ${testCase.param} toString() to return ${testCase.rom} instead got ${rom}`);
    }
}

})();
