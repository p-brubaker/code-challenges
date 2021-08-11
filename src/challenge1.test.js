import { doubleNumbers, stringItUp, capitalizeNames, makeHeaders, namesOnly, makeStrings } from './challenge1';


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

test('makes strings', () => {
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
    "Angelina Jolie can go to The Matrix", 
    "Eric Jones is under age!!", 
    "Paris Hilton is under age!!", 
    "Kayne West is under age!!", 
    "Bob Ziroll can go to The Matrix"
];
    expect(output).toEqual(makeStrings(input));
});

test('makes headers', () => {
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
    "<h1>Angelina Jolie</h1><h2>80</h2>", 
    "<h1>Eric Jones</h1><h2>2</h2>", 
    "<h1>Paris Hilton</h1><h2>5</h2>", 
    "<h1>Kayne West</h1><h2>16</h2>", 
    "<h1>Bob Ziroll</h1><h2>100</h2>"
];
    expect(output).toEqual(makeHeaders(input));
})