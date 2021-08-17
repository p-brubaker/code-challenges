export const capitalizeObjectKeys = (obj) => {
    return Object.keys(obj).map(key => key.toUpperCase())
}

export const sortKeys = (obj) => {
    return Object.keys(obj).sort((a, b) => a.length - b.length);
}

export const getFilteredKey = (obj) => {
    return Object.keys(obj).filter(key => key === 'age');
}

export const getArrayOfKeysAndValues = (obj) => {
    return Object.entries(obj);
}

export const sortedArraysByValuesLength = (obj) => {
    return Object.entries(obj).sort((a, b) => b[1].length - a[1].length);
}