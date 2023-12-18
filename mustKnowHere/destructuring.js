// 1. array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65]

const [x, y] = numbers;

const employee = {
  ide: "VS Code",
  designation: "developer",
  machine: "mac",
  languages: ["html", "css", "js"],
  specification: {
    height: 66,
    weight: 67,
    address: "kumarkhali",
    drink: "water",
    watch: {
      color: "black",
      price: 500,
      brand: "garmin",
    },
  },
};

const { ide, machine } = employee;
console.log(ide, machine);

const { brand, price } = employee.specification.watch;
console.log(price);
