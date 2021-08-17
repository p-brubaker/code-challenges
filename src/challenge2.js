// Filter

export function fiveAndGreaterOnly(arr) {
    return arr.filter(a => a >= 5);
}

export function evensOnly(arr) {
    return arr.filter(a => a % 2 === 0);
}

export function fiveCharactersOrFewer(arr) {
    return arr.filter(a => a.length <= 5);
}

export function peopleInTheIlluminati(arr) {
    return arr.filter(a => a.member)
}

export function ofAge(arr) {
    return arr.filter(a => a.age >= 18);
}

// Sort

export function leastToGreatest(arr) {
    return arr.sort((a, b) => a - b);
}

export function greatestToLeast(arr) {
    return arr.sort((a, b) => b - a);
}

export function shortestToLongest(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

export function alphabetical(arr) {
    return arr.sort();
}

export function byAge(arr) {
    return arr.sort((a, b) => a.age - b.age);
}

/*========================================
    EXTERNAL CODE CHALLENGES
========================================*/

/*      #1 ZIGZAG CONVERSION

The string "PAYPALISHIRING" is written in a 
zigzag pattern on a given number of rows like
this:

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make 
this conversion given a number of rows:

    string convert(string s, int numRows);

Example 1:

    Input: s = "PAYPALISHIRING", numrows = 3
    Output: "PAHNAPLSIIGYIR"

Example 2:

    Input: s = "PAYPALISHIRING", numrows = 4
    Output: "PINALSIGYAHRPI"
    Explanation:

    P    I    N
    A  L S  I G
    Y A  H R
    P    I

Example 3:

    Input: s = "A", numRows = 1
    Output: "A"

            SOLUTION                        */

// eslint-disable-next-line no-unused-vars
const convert = function(s, numRows) {
    
    if (numRows === 1) {
        return s;
    }

    const container = [];
    
    for (let i = 0; i < numRows; i++) {
        container.push('');
    }
    
    let row = 0;
    let up = true;
    
    for (let j = 0; j < s.length; j++) {
        container[row] += s[j];
        if (row === 0) {
            row++;
            up = true;
        } else if (row === numRows -1) {
            row--;
            up = false;
        } else {
            if (up) {
                 row++;
            } else {
                 row--;
            }
        }
    }

    return container.join('');
}

/*        #2 VALID PARENTHESES

Given a string s containing just the characters 

'(',  ')',  '{',  '}',  '[',  ']',

determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.


Example 1:

    Input: s = "()"
    Output: true

Example 2:

    Input: s = "()[]{}"
    Output: true

Example 3:

    Input: s = "(]"
    Output: false

Example 4:

    Input: s = "([)]"
    Output: false

Example 5:

    Input: s = "{[]}"
    Output: true

            
                SOLUTION                              */

// eslint-disable-next-line no-unused-vars
const isValid = function(s) {
    
    if (s.length % 2 !== 0) {
        return false;
    }
    
    function match(char1, char2) {
        if (char1 === '{' && char2 === '}') return true;
        if (char1 === '[' && char2 === ']') return true;
        if (char1 === '(' && char2 === ')') return true;
    }

    const stack = [];
    
    
    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0) {
            stack.push(s[i])
        } else {
            if (match(stack[stack.length - 1], s[i])) {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        }
    }

    if (stack.length) {
        return false;
    }


    return true;
};
