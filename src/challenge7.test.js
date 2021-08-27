import { containsW, isNum, containsWorld, isCapitalized, citiesAtoJ, noPunctuation, hangman, findShells } from './challenge7.js';


test('returns true if word contains w', () => {
    const input = ['hello world', 'Hello World', 'hello everyon'];
    const output = input.map(elem => containsW(elem));
    expect(output).toEqual([true, false, false]);
});

test('returns true if input contains a number', () => {
    const input = [1234567890, '12345', 'h3llo w0rld', 'hello world', ''];
    const output = input.map(elem => isNum(elem));
    expect(output).toEqual([true, true, true, false, false]);
});

test('returns true if string contains world', () => {
    const input = ['hello world', 'Hello World', 'hello everyone'];
    const output = input.map(elem => containsWorld(elem));
    expect(output).toEqual([true, false, false]);
})

test('returns an array of capitalized words', () => {
    const input = [
        'We only want to Return the Words that begin With a capital Letter',
        'Given by our hand in the meadow that is called Runnymede, between Windsor and Staines, on the fifteenth day of June in the seventeenth year of our reign (i.e. 1215: the new regnal year began on 28 May).',
        'these words are all failures'
    ];
    const output = input.map(elem => isCapitalized(elem));
    expect(output).toEqual([
        ['We', 'Return', 'Words', 'With', 'Letter'],
        ['Given', 'Runnymede', 'Windsor', 'Staines', 'June', 'May'],
        []
    ]);
});

test('returns names of cities that start with A through J', () => {
    const input = [
        ['Cleveland', 'San Diego', 'Birmingham', 'Seattle', 'Miami', 'New York City', 'Omaha', 'Portland', 'Austin', 'Boston', 'Newport Beach', 'Hoboken'],
        ['Albuquerque', 'Chicago', 'Philadelphia', 'Newark', 'Sacramento', 'Eugene'],
        []
    ];
    const output = input.map(elem => citiesAtoJ(elem).sort());
    expect(output).toEqual([
        ['Cleveland', 'Birmingham', 'Austin', 'Boston', 'Hoboken'].sort(),
        ['Albuquerque', 'Chicago', 'Eugene'].sort(),
        []
    ]);
});

test('returns only words that have a space at the end, still with the space', () => {
    const input = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia vel massa sed egestas. Nunc faucibus iaculis elit, a scelerisque enim condimentum sed. Aenean ac scelerisque sem, et pharetra diam.',
        'Given by our hand in the meadow that is called Runnymede, between Windsor and Staines, on the fifteenth day of June in the seventeenth year of our reign (i.e. 1215: the new regnal year began on 28 May).'
    ];
    const output = input.map(elem => noPunctuation(elem));
    expect(output).toEqual([
        ['Lorem ', 'ipsum ', 'dolor ', 'sit ', 'consectetur ', 'adipiscing ', 'Cras ', 'lacinia ', 'vel ', 'massa ', 'sed ', 'Nunc ', 'faucibus ', 'iaculis ', 'a ', 'scelerisque ', 'enim ', 'condimentum ', 'Aenean ', 'ac ', 'scelerisque ', 'et ', 'pharetra '],
        ['Given ', 'by ', 'our ', 'hand ', 'in ', 'the ', 'meadow ', 'that ', 'is ', 'called ', 'between ', 'Windsor ', 'and ', 'on ', 'the ', 'fifteenth ', 'day ', 'of ', 'June ', 'in ', 'the ', 'seventeenth ', 'year ', 'of ', 'our ', 'reign ', 'the ', 'new ', 'regnal ', 'year ', 'began ', 'on ', '28 ']
    ]);
})

test('replaces vowells with underscores', () => {
    const input = [
        'This is a regex challenge. We are trying to create a hangman phrase where all of the vowels are missing!',
        'I wAnt them all tO bE removed and replaced with Underscores.'
    ];
    const output = input.map(elem => hangman(elem));
    expect(output).toEqual([
        'Th_s _s _ r_g_x ch_ll_ng_. W_ _r_ try_ng t_ cr__t_ _ h_ngm_n phr_s_ wh_r_ _ll _f th_ v_w_ls _r_ m_ss_ng!',
        '_ w_nt th_m _ll t_ b_ r_m_v_d _nd r_pl_c_d w_th _nd_rsc_r_s.'
    ]);
});

test('finds all instances of sells, shells, and seashells', () => {
    const input = `She sells seashells by the seashore. The shells she sells are surely seashells. So if she sells shells on the seashore, I'm sure she sells seashore shells.`;
    const output = findShells(input);
    expect(output).toEqual(['sells', 'seashells', 'shells', 'sells', 'seashells', 'sells', 'shells', 'sells', 'shells']);
});