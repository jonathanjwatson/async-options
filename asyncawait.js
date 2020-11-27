const { read } = require("fs");

function makeApiCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Jonathan",
      });
    }, 2500);
  });
}

function readFile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is the test from my file.");
    }, 2500);
  });
}

function getDataFromDatabase() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          name: "Bob",
          grade: "A+",
        },
      ]);
    }, 2500);
  });
}

getDataFromDatabase()
  .then((students) => {
    console.log(students);
    makeApiCall()
      .then((response) => {
        console.log(response);
        readFile()
          .then((fileData) => {
            console.log(fileData);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

async function getAllData() {
  try {
    const students = await getDataFromDatabase();
    console.log(students);
    const response = await makeApiCall();
    console.log(response);
    const fileData = await readFile();
    console.log(fileData);
  } catch (err) {
    console.log(err);
  }
}

getAllData();
