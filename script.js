/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap(element) {
  //Write your code here
  arr.map(PrintDevelopersUsingMap);

  function PrintDevelopersUsingMap(item) {
    if (item.profession === "developer") {
      console.log(item);
    }
  }
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(PrintDevelopersUsingForEach);

  function PrintDevelopersUsingForEach(item) {
    if (item.profession === "developer") {
      console.log(item);
    }
  }
}

function addData() {
  //Write your code here
  let newItem = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newItem);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
  let removedArr = arr.filter(function (item) {
    if (item.profession !== "admin") {
      return item;
    }
  });
  console.log(removedArr);
}

function concatenateArray() {
  //Write your code here
  let arr2 = [
    { id: 5, name: "Henry Hill", age: "23", profession: "Gangster" },
    { id: 6, name: "Vito Corleone", age: "35", profession: "Godfather" },
    { id: 7, name: "Sonny", age: "30", profession: "Mobster" },
  ];

  let concatArr = arr.concat(arr2);
  console.log(concatArr);
}
