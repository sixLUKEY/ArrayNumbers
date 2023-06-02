
let array1 = [];


function arrayPush (){
    let arrayValue = document.getElementById('arrayNumber').value;
    console.log(arrayValue);
    array1.push(arrayValue);
    console.log(array1);
}

function arrayClear (){
    array1 = []
}

function undo (){
    array1.pop();
}

const outputBox = document.getElementById('outputBox');

function printArrayValue(){
    outputBox.innerHTML ='';
    for(let i=0; i<array1.length; i++) {
    outputBox.innerHTML =`
    ${array1[i]}
    `
    }
}

const outputBox2 = document.getElementById('outputBox2');

function printArray(){
    outputBox2.innerHTML = `
    ${array1.join("<br>")}
    `;
}


setInterval(function () {
	printArrayValue(), printArray();
}, 100);

