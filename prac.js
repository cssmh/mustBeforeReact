const person = {
    name: 'kana',
    age: 24,
    vill: 'tangail'
}

const {name, age, vill} = person;
console.log(name);
console.log(age);
console.log(vill);

const arr = [1,2,3,4,5,6,7,8];

// const balance = arr[1];
// console.log(balance);

const [, balance] = arr;
console.log(balance);