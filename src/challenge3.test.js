import { getArrayOfKeysAndValues, sortedArraysByValuesLength, capitalizeObjectKeys, sortKeys, getFilteredKey } from './challenge3.js';

// Object.keys

test('capitalizeObjectKeys capitalizes keys', () => {
    const dataObject = { name: 'Angelina Jolie', age: 80 };
    const output = capitalizeObjectKeys(dataObject);
    expect(output).toEqual(['NAME', 'AGE']);
});

test('sorts keys', () => {
    const dataObject = { name: 'Spot', age: 3, isDog: true, friends: ['Rover', 'Steve', 'Fluffy'] };
    const output = sortKeys(dataObject);
    expect(output).toEqual(['age', 'name', 'isDog', 'friends']);
});

test('gets filtered keys', () => {
    const dataObject = { name: 'Angelina Jolie', isSpot: false, age: 80 };
    const output = getFilteredKey(dataObject);
    expect(output).toEqual(['age']);
});

// Object.entries

test('gets array of keys and values', () => {
    const dataObject = { name: 'Angelina Jolie', age: 80 };
    const output = getArrayOfKeysAndValues(dataObject);
    expect(output).toEqual([['name', 'Angelina Jolie'], ['age', 80]]);
});

test('gets array sorted by obj values length', () => {
    const dataObject = { name: 'Bob', friend: 'Tom Hanks', location: 'Los Angeles' };
    const output = sortedArraysByValuesLength(dataObject);
    expect(output).toEqual([['location', 'Los Angeles'], ['friend', 'Tom Hanks'], ['name', 'Bob']]);
});

