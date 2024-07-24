//promise

// synchronous and asynchronous

// console.log("First");
// const data = fetch(0); // network request
// updateHomeFeed(data);

const fetchDataPromise = new Promise((resolve, reject) => {
  //   reject("Reject");
  setTimeout(() => {
    //   reject("Reject")
  }, 3000);
  //   resolve("Resolve");
});

fetchDataPromise
  .then((data) => {
    console.log("Inside then :", data);
  })
  .catch((data) => {
    console.log("Inside Catch :", data);
  });

const login = () => {
  const loginPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Login resolve is work!");
    }, 1000);
  });

  return loginPromise;
};

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from fetchData is ready!");
    }, 1000);
  });
};

const getData = () => {
  console.log("Data is Ged!");
};

login().then(() => {
  console.log("Hello")
}).catch((data) => {
  console.log(data)
})


// login()
// .then((data) => {
//   console.log(data);
//   fetchData()
//   .then((data) => {
//     console.log(data);
//     getData();
//   });
// });
