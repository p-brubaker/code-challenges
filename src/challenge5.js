export function sillyHowMuchPencil(str) {
    let myArr = [];
    
    for (let i = str.length; i >= 0; i--) {
        for (let j = i; j >= 0; j--) {
            myArr[j] ? 
                myArr[j] = str[i] + myArr[j] : 
                myArr[j] = str[i] || '';
        }
    }
    return myArr;
}

export function howMuchPencil(str) {
    let myArr = [];
    for (let i = 0; i <= str.length; i++) {
        myArr.push(str.slice(i))
    }
    return myArr;
}

export function wordsToCharList(str) {
    return str.split('');
}

export function listFoods(obj) {
    return obj.ingredients.map(ingredient => {
        return ingredient.split(' ').slice(2).join(' ');
    })
}

export function stepActions(obj) {
    return obj.steps.map(step => {
        return step.split(' ')[0];
    })
}

export function removeLastCharacters(str, numChars) {
    if (numChars <= 0) return str;
    if (numChars >= str.length) return '';
    return str.slice(0, str.length - numChars);
}

// Stretch

export function totalSumCSV(str) {
    const vals = str.split(',');
    if (vals.length > 1) return vals.reduce((a, b) => +a + +b);
    return +str;
}

export function removeVowells(s) {
    const vowells = 'aeiou';
    let output = '';
    for (let i = 0; i < s.length; i++) {
        if (vowells.indexOf(s[i]) === -1) output += s[i];
    }
    return output;
}

export function extractVowells(s) {
    const vowells = 'aeiou';
    let out = ['', ''];
    for (let i = 0; i < s.length; i++) {
        vowells.indexOf(s[i]) === -1 ? out[0] += s[i] : out[1] += s[i];
    }
    return out;
}