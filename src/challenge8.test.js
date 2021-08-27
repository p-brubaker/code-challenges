import { replaceZeros, validatePin, validateWord, hasNumber, validateEmail } from './challenge8.js';

test('replaces zeros with the word zero', () => {
    const input = [
        '0dayexpl0it',
        'number of people who like regex: 0 that I know of',
        '3, 2, 1, 0'
    ];
    const output = input.map(item => replaceZeros(item));
    expect(output).toEqual([
        'zerodayexplzeroit',
        'number of people who like regex: zero that I know of',
        '3, 2, 1, zero'
    ]);
});

test('validates a four digit pin', () => {
    const input = [
        '1234',
        '0000',
        '000O',
        '12345',
        'HELL0W0RLD',
        'hel0',
        'helo',
        '911',
    ];
    const output = input.map(item => validatePin(item));
    expect(output).toEqual([
        true, true, false, false, false, false, false, false
    ]);
});

test('validates a word that is between five and ten characters long', () => {
    const input = [
        'helloworld',
        'hellomanyworlds',
        'iamateapot',
        'Iamateapotpourri',
        'Hi!',
        'booger'
    ];
    const output = input.map(item => validateWord(item));
    expect(output).toEqual([
        true, false, true, false, false, true
    ]);
});

test('checks for one or more letter followed by one or more digits', () => {
    const input = [
        'I like turtles',
        'one two three 4 five',
        '99 bottles of beer',
        '42',
    ];
    const output = input.map(item => hasNumber(item));
    expect(output).toEqual([
        false, true, false, false
    ]);
})

// test('validates an email', () => {
//     const input = [
//         'john@arbuckle.com',
//         'ramamooojan1729@holymathcow.net',
//         'dot.dot@dot.org',
//         'dot.dot@dot.dot',
//         'dotty.dotdot.dot@dot.dot.dot.com',
//         'dodderingdotty@dotdodders.org:4000',
//         'hihihellohihihi',
//         'zaphodBeeblebrox42@fish.org'
//     ];
//     const output = input.map(item => validateEmail(item));
//     expect(output).toEqual([
//         true, true, false, false, false, false, false, true
//     ]);
// });