/*
on load
    check allow input box, hide or show form appropriately
    check localStorage, render out any stored expenses
build html
    add checkbox: allow input
    build expense entry form
    add click listener to checkbox
        if checked show form
        else hide form
    add submit listener to form
        get values from form
        create a new object for the expense
        add the object to the list
        update localStorage 
        clear the form
        render expenses
*/

function setLocalStorage(key, data){
    localStorage.setItem(key, JSON.stringify(data)); // turns an object into a string
}

function getLocalStorage(key){
    return JSON.parse(localStorage.getItem(key)); // turns a string into an object
}

const allowInput = document.querySelector("#allow")

function allowHandler(){
    const formEl = document.querySelector(".form");
    console.dir(allowInput);
    if(allowInput.checked){
        formEl.classList.remove("hide");
    }else{
       formEl.classList.add("hide");
    }
}


allowInput.addEventListener("change", allowHandler)