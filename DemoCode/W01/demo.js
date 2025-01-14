// basics
// function forms
// callbacks
// array methods
// fetch
// DOM and events

let myNum = 1;

if (myNum == "1"); // would return true, coerces the string to a number

if (myNum === "1"); // would return false, strict comparison

double(2);
//double2(2); // causes an error because it is not hoisted to the top with it being a function expression


// function declaration
function double(x) {
    return x * 2;
}


// function expression
const double2 = function (x) { //anonymous function
    return x * 2;
}


// arrow function
const double3 = (x) => {
    return x * 2;
}

const double4 = x => x * 2;

const myList = [1, 2, 3, 4];

function doubleList(list) {
    const doubled = [];
    list.forEach((item) => {
        doubled.push(item * 2)
    });
    return doubled;
}

// callbacks
function modifyList(list, action){
    const modified = [];
    list.forEach((item) => {
        modified.push(action(item));
    });
    return modified;
}

const newList = modifyList(myList, double4);

const newList2 = myList.map(double4); // same thing as line 55

// fetch

const baseURL =  "https://pokeapi.co/api/v2/pokemon/";

async function getData(url){
    const response = await fetch(baseURL + url);
    console.log(response);
    return response.json();
}

getData("pikachu");