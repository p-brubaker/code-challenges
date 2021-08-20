export function getHouses(arr) {
    return arr.map(item => {
        return item.house;
    })
}

export function upDateNumbers(obj) {
    return Object.entries(obj).map(elem => elem.join(': '));
}

export function totalCharacters(arr) {
    return arr.map(item => {
        return 1 + (item.spouse ? 1 : 0) + item.children.length
    }).reduce((a, b) => a + b);
}

export function hasChildrenEntries(arr, character) {
    let charObject;
    arr.forEach(item => {
        if (item.name === character) {
            charObject = item;
        }
    });
    if(charObject.children.length) {
        return true;
    } else {
        return false;
    }
}

export function sortByChildren(arr) {
    const alphaSortedArr = arr.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
    const childrenSortedArr = alphaSortedArr.sort((a, b) => {
        return a.children.length - b.children.length;
    });
    return childrenSortedArr;
}