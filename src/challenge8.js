export function replaceZeros(str) {
    const re = /0/g;
    return str.replace(re, 'zero');
};

export function validatePin(str) {
    const re = /^[0-9][0-9]{2}[0-9]$/;
    return re.test(str);
}

export function validateWord(str) {
    const re = /^[a-z]{5,10}$/i;
    return re.test(str);
}

export function hasNumber(str) {
    const re = /.*[a-z]{1,}.*[0-9]{1,}.*/i;
    console.log(str, re.test(str));
    return re.test(str);
}

