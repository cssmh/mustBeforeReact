const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}

const person = {
    name: 'Alice',
    age: 25,
    occupation: 'Engineer'
  };
  
  for (const key in person) {
    console.log(`${key} : ${person[key]}`);
  }