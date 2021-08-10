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