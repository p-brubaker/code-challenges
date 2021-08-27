export function containsW(str) {
    const re = /w/;
    return re.test(str);
}

export function isNum(input) {
    const re = /[0-9]/;
    return re.test(String(input));
}

export function containsWorld(input) {
    const re = /world/;
    return re.test(input);
}

export function isCapitalized(str) {
    const caps = new RegExp(/[A-Z][a-z]*/g)
    return str.match(caps) || [];
}

export function citiesAtoJ(arr) {
    const cities = new RegExp(/^[A-J]/);
    const result = [];
    arr.forEach(elem => {
        if (cities.test(elem)) {
            result.push(elem);
        }
    });
    return result;
}

export function noPunctuation(str) {
    const re = new RegExp(/[a-z0-9][a-z0-9]* /, 'ig');
    return str.match(re);
}

export function hangman(str) {
    const re = new RegExp(/[aeiou]/gi);
    return str.replace(re, '_');
}

export function findShells(str) {
    const re = new RegExp(/[^\s]*ells/g);
    return str.match(re);
}
