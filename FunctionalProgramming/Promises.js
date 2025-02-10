/* Promises: */
const myPromise = new Promise((resolve, reject) => {
  if (Math.random() * 100 <= 50) {
    resolve("Hello, Promises!");
  }
  reject(new Error("In 50% of the cases, I fail. Miserably."));
});

// Using Promises:
const onResolved = (resolvedValue) => console.log(resolvedValue);
const onRejected = (error) => console.log(error);

myPromise.then(onResolved, onRejected);

// Same as above, written concisely:
myPromise.then(
  (resolvedValue) => {
    console.log(resolvedValue);
  },
  (error) => {
    console.log(error);
  }
);

/* Async/Await: */
