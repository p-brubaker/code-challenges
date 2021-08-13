export function doubleNumbers(arr) {
    return arr.map((num) => num + num);
}

export function stringItUp(arr) {
    return arr.map((num) => String(num));
}

export function capitalizeNames(arr) {
    return arr.map((word) => {
       return word[0].toUpperCase() + word.slice(1).toLowerCase();
})};

export function namesOnly(arr) {
    return arr.map(obj => obj.name);
}

export function makeStrings(arr) {
    return arr.map((elem) => {
        if (elem.age >= 18) {
            return elem.name + ' can go to The Matrix'
        } else {
            return elem.name + ' is under age!!'
        }
    })
}

export function makeHeaders(arr) {
    return arr.map((elem) => {
        return `<h1>${elem.name}</h1><h2>${elem.age}</h2>`;
    })
}

