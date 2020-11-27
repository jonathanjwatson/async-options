const util = require("util");
const fs = require("fs");

function makeApiCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        name: "Jonathan",
      });
    }, 2500);
  });
}

// makeApiCall().then((response) => {
//   console.log(response);
// });

const readFileAsync = util.promisify(fs.readFile);

fs.readFile("hello.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

readFileAsync("hello.txt", "utf-8")
  .then((data) => {
    console.log(data);
    makeApiCall().then((response) => {
      console.log(response);
    });
  })
  .catch((err) => {
    console.log(err);
  });
