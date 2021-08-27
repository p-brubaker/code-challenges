export function returnTen(str) {
    return str.slice(str.length - 10).split('');
}

export function findMax(matrix) {
    if (typeof matrix === 'number') {
        return matrix;
    }
    return Math.max(...matrix.map(item => {
        return (findMax(item))
    }));
}

export function totalSum(matrix) {
    if (matrix.length === 0) return 0;
    if (typeof matrix === 'number') {
        return matrix;
    }
    return matrix.reduce((a, b) => totalSum(a) + totalSum(b));
}

export function grandTotal(arr) {
    let result = [];
    for (let item of arr) {
        for (let value in item) {
            result[value] ? 
            result[value] += item[value] : 
            result[value] = item[value];
        } 
    }
    return result;
}

export function salesData(hoursOpen, cookieSums) {
    let result = [];
    for (let i in cookieSums) {
        result.push({ 
            sales: `${cookieSums[i]} cookies`, 
            time: hoursOpen[i]
        })
    };
    return result;
}
