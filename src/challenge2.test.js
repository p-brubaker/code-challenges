import { byAge, shortestToLongest, alphabetical, leastToGreatest, ofAge, fiveAndGreaterOnly, evensOnly, fiveCharactersOrFewer, peopleInTheIlluminati, greatestToLeast } from './challenge2.js';

// Filter

test('Five and greater only', () => {
    const input = [3, 6, 8, 2];
    const output = fiveAndGreaterOnly(input);
    expect(output).toEqual([6, 8]);
});

test('Evens only', () => {
    const input = [3, 6, 8, 2];
    const output = evensOnly(input);
    expect(output).toEqual([6, 8, 2]);
})

test('Five characters or fewer', () => {
    const input = ['dog', 'wolf', 'by', 'family', 'eaten', 'camping'];
    const output = fiveCharactersOrFewer(input);
    expect(output).toEqual(['dog', 'wolf', 'by', 'eaten']);
})

test('People in the illuminati', () => {
    const input = [
        { name: 'Angelina Jolie', member: true },
        { name: 'Eric Jones', member: false },
        { name: 'Paris Hilton', member: true },
        { name: 'Kanye West', member: false },
        { name: 'Bob Ziroll', member: true }
    ];
    const output = peopleInTheIlluminati(input);
    expect(output).toEqual([ 
        { name: 'Angelina Jolie', member: true }, 
        { name: 'Paris Hilton', member: true }, 
        { name: 'Bob Ziroll', member: true } 
    ]);
})

test('Of Age', () => {
    const input = [
        { name: 'Angelina Jolie', age: 80 },
        { name: 'Eric Jones', age: 2 },
        { name: 'Paris Hilton', age: 5 },
        { name: 'Kayne West', age: 16 },
        { name: 'Bob Ziroll', age: 100 }
    ];
    const output = ofAge(input);
    expect(output).toEqual([ 
        { name: 'Angelina Jolie', age: 80 },
        { name: 'Bob Ziroll', age: 100 } 
    ]);
})

// Sort 

test('Least to greatest', () => {
    const input = [1, 3, 5, 2, 90, 20];
    const output = leastToGreatest(input);
    expect(output).toEqual([1, 2, 3, 5, 20, 90]);
})

test('greatest to least', () => {
    const input = [1, 3, 5, 2, 90, 20];
    const output = greatestToLeast(input);
    expect(output).toEqual([90, 20, 5, 3, 2, 1]);
})

test('Shortest to longest', () => {
    const input = ['dog', 'wolf', 'by', 'family', 'eaten'];
    const output = shortestToLongest(input);
    expect(output).toEqual(['by', 'dog', 'wolf', 'eaten', 'family']);
})

test('Alphabetical', () => {
    const input = ['dog', 'wolf', 'by', 'family', 'eaten']
    const output = alphabetical(input);
    expect(output).toEqual(['by', 'dog', 'eaten', 'family', 'wolf'])
})

test('byAge', () => {
    const input = [
        { name: 'Quiet Samurai', age: 22 },
        { name: 'Arrogant Ambassador', age: 100 },
        { name: 'Misunderstood Observer', age: 2 },
        { name: 'Unlucky Swami', age: 77 }
    ];
    const output = byAge(input);
    expect(output).toEqual([ 
        { name: 'Misunderstood Observer', age: 2 },
        { name: 'Quiet Samurai', age: 22 },
        { name: 'Unlucky Swami', age: 77 },
        { name: 'Arrogant Ambassador', age: 100 } 
    ]);
})



