let myPromise = new Promise((resolve, reject) => {
  const randomNumber = Math.random();

  if (randomNumber > 0.5) {
    resolve("Success!"); // Resolve the promise
  } else {
    reject("Error!"); // Reject the promise
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));