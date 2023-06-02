let array1 = [2,5]
console.log("length", array1.length)

array1.push(9);
array1.push(6);
console.log("after push", array1)

array1.pop();
console.log("after pop", array1)

array1.shift();
console.log("after shift", array1)

array1.unshift(12,18);
console.log("after unshift", array1)

const firstTwo = array1.slice(0,2);
console.log(firstTwo);
console.log(array1);

array1.splice(2,0,2);
console.log(array1); 

console.log(array1.indexOf(18));

const array2 = [16,23]
console.log("Concat array2 + array1", array1.concat(array2));

let message = "donkey"
console.log("join", array1.join(`${message}`));

let myArr = new Array()
let myArr2 = new Array(4).fill("*")
console.log("fill", myArr2);

console.log("Check if elements are even", array1.every((value) =>{
    return value %2 == 0
}))

console.log("Check if elements are even", array1.some((value) =>{
    return value %2 == 0
}))

console.log("Check for number 18", array1.find((value) =>{
    return value  == 18
}))

console.log("Check for number 18", array1.findIndex((value) =>{
    return value  == 18
}))


console.log(array1.sort());

console.log(array1.reverse());

let person = {
    firstname: "Lyle",
    Surname: "Kepkey",
    age: 12,
}

console.log("Object Key", Object.keys(person));

console.log("Object Value", Object.values(person));

console.log("Object Entries", Object.entries(person));



//CREATE AN ARRAY and add values from HTML to array & display array Array on HTML

//CREATE AN ARRAY of Objects(person) and add 3 people, then display in browser (HTML)