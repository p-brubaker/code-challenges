import { sillyHowMuchPencil, extractVowells, removeVowells, totalSumCSV, howMuchPencil, wordsToCharList, listFoods, stepActions, removeLastCharacters } from './challenge5';

test('returns a list of shortening words', () => {
    expect(howMuchPencil('Welcome')).toStrictEqual(['Welcome', 'elcome', 'lcome', 'come', 'ome', 'me', 'e', '']);
    expect(howMuchPencil('Welcome').length).toStrictEqual(8);
    expect(howMuchPencil('')).toStrictEqual(['']);
    expect(howMuchPencil('abc')).toStrictEqual(['abc', 'bc', 'c', '']);
});

test('silly howMuchPencil works', () => {
    expect(sillyHowMuchPencil('Welcome')).toStrictEqual(['Welcome', 'elcome', 'lcome', 'come', 'ome', 'me', 'e', '']);
    expect(sillyHowMuchPencil('Welcome').length).toStrictEqual(8);
    expect(sillyHowMuchPencil('')).toStrictEqual(['']);
    expect(sillyHowMuchPencil('abc')).toStrictEqual(['abc', 'bc', 'c', '']);
});

test('turns words to char list', () => {
    expect(wordsToCharList('Gregor')).toStrictEqual(['G', 'r', 'e', 'g', 'o', 'r']);
    expect(wordsToCharList('Gregor').length).toStrictEqual(6);
    expect(wordsToCharList('hooray')).toStrictEqual(['h', 'o', 'o', 'r', 'a', 'y']);
    expect(wordsToCharList('')).toStrictEqual([]);
});

test('gets list of ingredient names', () => {
    const input = {
        name: 'How to make a Gruffalo Crumble',
        ingredients: [
            '1 medium-sized Gruffalo',
            '8 pounds oats',
            '2 pounds brown sugar',
            '4 pounds flour',
            '2 gallons pure maple syrup',
            '16 cups chopped nuts',
            '1 pound baking soda',
            '1 pound baking powder',
            '1 pound cinnamon',
            '6 gallons melted butter',
            '2 gallons fresh water',
        ],
        steps: [
            'Pre-heat a large oven to 375',
            'De-prickle the gruffalo',
            'Sprinkle with cinnamon, sugar, flour, and nuts',
            'Mix until evenly distributed',
            'Grease a 3-foot x 3-foot casserole dish',
            'Combine gruffalo compote with water to maintain moisture in the oven',
            'Fold together remaining ingredients to make the crisp',
            'Spread the crisp evenly over the gruffalo mixture',
            'Bake for 12-15 hours',
        ]
    };
    const output = listFoods(input);
    expect(output).toStrictEqual(['Gruffalo', 'oats', 'brown sugar', 'flour', 'pure maple syrup', 'chopped nuts', 'baking soda', 'baking powder', 'cinnamon', 'melted butter', 'fresh water']) 
});

test('gets step actions', () => {
    const input = {
        name: 'How to make a Gruffalo Crumble',
        ingredients: [
            '1 medium-sized Gruffalo',
            '8 pounds oats',
            '2 pounds brown sugar',
            '4 pounds flour',
            '2 gallons pure maple syrup',
            '16 cups chopped nuts',
            '1 pound baking soda',
            '1 pound baking powder',
            '1 pound cinnamon',
            '6 gallons melted butter',
            '2 gallons fresh water',
        ],
        steps: [
            'Pre-heat a large oven to 375',
            'De-prickle the gruffalo',
            'Sprinkle with cinnamon, sugar, flour, and nuts',
            'Mix until evenly distributed',
            'Grease a 3-foot x 3-foot casserole dish',
            'Combine gruffalo compote with water to maintain moisture in the oven',
            'Fold together remaining ingredients to make the crisp',
            'Spread the crisp evenly over the gruffalo mixture',
            'Bake for 12-15 hours',
        ]
    };
    const output = stepActions(input);
    expect(output).toStrictEqual(['Pre-heat', 'De-prickle', 'Sprinkle', 'Mix', 'Grease', 'Combine', 'Fold', 'Spread', 'Bake']);
});

test('removes last characters', () => {
    const input = [['Gregor', 2], ['hello', -1], ['wowow', -700], ['hello', 12], ['', 1], ['a', 1]];
    const output = input.map(item => removeLastCharacters(item[0], item[1]));
    expect(output).toStrictEqual(['Greg', 'hello', 'wowow', '', '', ''])
});

// Stretch

test('sums numbers in a string of CSVs', () => {
    const input = ['1,4,5,7,2', '147'];
    const output = input.map(item => totalSumCSV(item));
    expect(output).toStrictEqual([19, 147]);
});

test('removes vowells', () => {
    const input = ['gregor', 'asdf', 'why'];
    const output = input.map(item => removeVowells(item));
    expect(output).toStrictEqual(['grgr', 'sdf', 'why'])
})

test('extracts vowells', () => {
    const input = ['gregor', 'The quick brown fox'];
    const output = input.map(item => extractVowells(item));
    expect(output).toStrictEqual([['grgr', 'eo'], ['Th qck brwn fx', 'euioo']]);
})