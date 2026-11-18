/*function greetUser(name, callback) {
  console.log("Hello " + name);
  callback();
}

function showMessage() {
  console.log("Welcome to JavaScript class");
}

greetUser("Priya", showMessage);*/


//async callback

function getData(callback) {
  setTimeout(() => {
    console.log("Data received from server");
    callback();
  }, 2000);
}

function displayData() {
  console.log("Displaying data on UI");
}

getData(displayData);

