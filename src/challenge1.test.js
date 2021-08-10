import { doubleNumbers, stringItUp, capitalizeNames, namesOnly } from './challenge1';


test('doubles numbers', () => {
    const input = [2, 5, 100];
    const output = doubleNumbers(input);
    expect(output).toEqual([4, 10, 200]);
});

test('stringifies numbers', () => {
    const input = [2, 5, 100];
    const output = stringItUp(input);
    expect(output).toEqual(['2', '5', '100']);
})

test('catpitalizes names', () => {
    const input = ['john', 'JACOB', 'jinGleHeimer', 'schmidt'];
    const output = capitalizeNames(input);
    expect(output).toEqual(['John', 'Jacob', 'Jingleheimer', 'Schmidt']);
});

test('returns names only', () => {
    const input = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
    ];
    const output = [
    "Angelina Jolie", 
    "Eric Jones", 
    "Paris Hilton", 
    "Kayne West", 
    "Bob Ziroll"
    ];
    expect(output).toEqual(namesOnly(input));
})