//2

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, REACT, PYTHON.'
let arr = text.split(/[,\s]+|[\s]/);
console.log(arr);
console.log("Length is >>>>", arr.length);

//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//3(1)
shoppingCart.unshift('Meat');
console.log(shoppingCart);

//3(2)
shoppingCart.push("Sugar");
console.log(shoppingCart);

//3(3)
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
console.log(shoppingCart);

//3(4)
shoppingCart[shoppingCart.indexOf('Tea')] = "Green Tea";
console.log(shoppingCart);


//4
// console.log(countries.includes("Ethiopia") == true);
if (countries.includes("Ethiopia") == true) {
    console.log("ETHIOPIA");
}
else {
    countries.push("Ethiopia");
}

//5
if (webTechs.includes("Sass") == true) {
    console.log("Sass is a CSS preprocess");
}
else {
    webTechs.push("Sass");
}
console.log(webTechs);

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MangoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);


