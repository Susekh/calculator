const equalsTo = document.querySelector(".equalsTo");
const operatorBtn = document.querySelectorAll('.operators-btn');
const displayResult = document.querySelector('.display');
let displayVar = '';
let calcVar = 0;
let previousVal = '';

// function for operands
function clickOperand(value){
    equalsTo.removeAttribute('disabled')
    operatorBtn.forEach((item)=>{
        item.removeAttribute('disabled')
    })
    displayVar+= value;
    renderDisplay();
}




// function for operators


function clickOperator(value){
    operatorBtn.forEach((item)=>{
        item.setAttribute('disabled', '')
    })
    equalsTo.setAttribute('disabled', "");
    displayVar += value;
    renderDisplay();
}

// function to change string to int

function parse(str) {
    return Function(`'use strict'; return (${str})`)()
  }



// function responsible for equal CE button's functioning

function CEbtn(){
    displayVar = displayVar.slice(0, -1); 
    renderDisplay();
}


// function responsible for equal button's functioning

function clickEqual(){
    calcVar = parse(displayVar)
    operatorBtn.forEach((item)=>{
        item.removeAttribute('disabled')
    })
    displayVar = `${calcVar}`;
    
    renderDisplay();
    // to update the value of previous value
    previousVal = displayVar; 
}


// Renders the ontents of display

function renderDisplay(){
    displayResult.innerHTML = `
    <p>${previousVal.replace('*','x')}</p>
    <h1>${displayVar.replace('*','x')}</h1>`;
}

