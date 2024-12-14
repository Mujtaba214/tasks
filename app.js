// Q1
/*
var v1 = "I'm in var";
let v2 = "I'm in let";
const v3 = "I'm in const";
console.log(v1);
console.log(v2);
console.log(v3);
//Yes, they are accessible globally

// Q2

let q2 = () => {
  var v1 = "I'm in var";
  let v2 = "I'm in let";
  const v3 = "I'm in const";
};
console.log(v1);
console.log(v2);
console.log(v3);

//Variables declared with var,let and const are only accessible in the function scope, it cannot be accessed outside the cope

// Q3

if (true) {
  var v1 = "I'm in var";
  let v2 = "I'm in let";
  const v3 = "I'm in const";
}
console.log(v1);
console.log(v2);
console.log(v3);

// Variable declared with var are accessible outside the statement block but variables decalred with let and const are not accessible outside the statement block

// Q4

console.log(v);
var v = "I'm in var";

// Here we will get the output: undefined , because it is hoisted with var

// Q5

console.log(v1);
console.log(v2);

let v1 = "I'm in let";
const v2 = "I'm in const";

// Here we will get the output: v1 and v2 cannot be accessed before the initialization

// Q6

var name = "Muhammad";
var name = "Mujtaba";

// we can redeclare the variables with same name in var

let name1 = "Muhammad";
let name1 = "Mujtaba";

// we can't redeclare the variables with same name in let

const name2 = "Muhammad";
const name2 = "Mujtaba"

// we can't redeclare the variables with same name in const

// Q7

var name = "Muhammad";
name = "Mujtaba";

// here we can reassign the value using var

let name1 = "Shan";
name1 = "Hasan";

// here we can reassign the value using let

const name2 = "Shehroz";
name2 = "Habib";

// here we can't reassign the value using const

// Q8

{
    console.log(letVariable);
    let letVariable = "I'm in let";
}

{
    console.log(constVariable);
    const constVariable = "I'm in const";
}

// Here we can't access both variables before initialization

// Q9

function greet() {
    var msg = "hello";
    if (true) {
        var msg = "hello there";
    }
    console.log(msg);
    
}

greet();

// Here we understand that the var will update the values of msg

function greeting() {
    let msg = "hey";
    if (true) {
        let msg = "hey there";
        console.log(msg);
        
    }
    console.log(msg);
    
}

greeting();

// Here we understand that the let will not update the values of msg in both scope and it will //remain distinct

// Q10

let firstName = "Mujtaba";
let lastName = "Usman";
console.log(`First name is ${firstName} and last name is ${lastName}`);

// Q11

const address = `John Doe
123 Main Street
Apt 4B
Springfield, IL 62704
USA`;

console.log(address);

// Q12

let a = 2;
let b = 3;

let ans = `${a + b}`;
console.log(ans);

// Q13

function multiply(a, b) {
  return a * b;
}

let a = 3;
let b = 3;

let ans = `${a} * ${b} is ${multiply(a, b)}`;
console.log(ans);

// Q14

function tagTemplate(strings, ...values) {
  console.log("Strings", strings);
  console.log("Values", values);
}

let name = "Mujtaba";
let age = 19;

tagTemplate`Hello, my name is ${name} and I am ${age} years old`;

// Q15

function toUpperCaseTag(strings, ...values) {
    return strings.reduce((res, str, i) => res + str + (values[i] || "")).toUpperCase();
}

const name = "John";
const city = "New York";

const result = toUpperCaseTag`Hello, my name is ${name} and I live in ${city}.`;

console.log(result);

// Q16

let currentHour = new Date().getHours();

let message =
  currentHour < 12
    ? `Good Morning, its currently ${currentHour} AM`
    : `Good afternoon! It's currently ${currentHour % 12 || 12} PM.`;
console.log(message);

// Q17

let arr = ["milk", "bread", "yogurt", "rice", "flour"];
let output="";
for (let i = 0; i < arr.length; i++)
{
   output += `<li>${arr[i]}</li>`;
}
console.log(output);

// Q18

let text = `This is a backtic character: \``;
console.log(text);

// Q19

const pageTitle = "Welcome to My Website";
const introText = "Here are some useful links:";
const links = [
  { name: "Google", url: "https://www.google.com" },
  { name: "YouTube", url: "https://www.youtube.com" },
  { name: "GitHub", url: "https://github.com" },
];

const generateLinks = () => `
  <ul>
    ${links.map((link) => `<li><a href="${link.url}">${link.name}</a></li>`).join("")}
  </ul>
`;

const pageHTML = `
 
    ${pageTitle}
    ${introText}
    ${generateLinks()}
  `;

console.log(pageHTML);

// Q20

let age = 20;
let canVote = age > 18 ? "yes" : "no";
console.log(canVote);

// Q21

let num = 2;
let evenOrOdd = num % 2 == 0 ? "even" : "odd";
console.log(evenOrOdd);

// Q22

let score = 80;
let grade =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";
console.log(grade);

// Q23

let isLoggedIn = true;
let statusMessage = isLoggedIn === true ? "Welcome Back" : "Please Log in";
console.log(statusMessage);

// Q24

let isMember = true;
let purchaseAmount = 23000;
let discount =
  isMember === true && purchaseAmount > 100 ? "discount 10%" : "discount 0%";
console.log(discount);

// Q25

function maxValue(a, b) {
  let greater = a > b ? a : b;
  console.log(greater);
}

maxValue(10, 12);

// Q26

function greet(name = "hello") {
  console.log(`Hello ${name}`);
}

greet("shakeel");

// Q27

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let mapping = arr.map((e,i) => {
  let check = e % 2 == 0 ? e * e : e * e * e;
  console.log(check);
  
})
console.log(mapping);

// Q28

let arr = ["hello", "heyy", "hi", "yo man"];
let filtering = arr.filter((e, i) => {
  return e.length > 3 ? true : false;
  // console.log(check);
});
console.log(filtering);

// Q29

let originalArray = [1, 3, 5, 6, 7, 8, 9];
let copiedArray = [...originalArray];
console.log(originalArray);
console.log(copiedArray);

// Q30

let array1 = [1, 3, 5, 6, 7, 8, 9];
let array2 = [2, 4, 5, 6, 7, 8, 9];
let mergedArray = [...array1, ...array2];
console.log(mergedArray);

// Q31

let numbers = [1, 3, 5, 6, 7, 8, 9];
let updatedArray = [2, ...numbers, 11];
console.log(updatedArray);

// Q32

let originalObject = {
  name: "Mujtaba",
  age: 19,
  education:"undergrad"
}

let copiedObject = { ...originalObject };
console.log(originalObject);
console.log(copiedObject);

// Q33

let object1 = {
  name: "muhammad",
  age: 19,
};

let object2 = {
  education: "undergrad",
  city: "karachi",
};

let mergedObject = { ...object1, ...object2 };
console.log(mergedObject);

// Q34

let user = {
  name: "Mujtaba",
  age: 19,
  email: "mujtabausman21@gmail.com",
};

let updatedUser = { ...user };
updatedUser.email = "abc@gmail.com";
updatedUser.address = "khi";

console.log(updatedUser);

// Q35

function sum(a,b,c) {
  return a + b + c;
}

let numbers = [23, 34, 56];

let res = sum(...numbers);
console.log(res);

// Q36

function combineArrays(...arr) {
  let res = [].concat(...arr);
  console.log(res);

}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
combineArrays(arr1, arr2);

// Q37

function multiply(num, ...number) {
  let res = [];

  for (let i = 0; i < number.length; i++) {
    res[res.length] = number[i] * num;
  }

  return res;
}

let output = multiply(6, 2, 3, 4);
console.log(output);

// Q38

let nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let shallowCopy = [...nestedArray];
shallowCopy[0][0] = 25;
nestedArray[1][1] = 23;
console.log(nestedArray);
console.log(shallowCopy);

// Q39

function sum(...numbers) {
  let res = 0;
  for (let num of numbers) {
    res += num;
  }
  return res;
}

let output1 = sum(2, 3, 4, 5, 6);
let output2 = sum(12, 23, 14, 25, 36);
console.log(output1);
console.log(output2);

// Q40

function average(...numbers) {
  let res = 0;
  for (let i = 0; i < numbers.length; i++) {
    res += numbers[i];
  }
  return res / numbers.length;
}

let output = average(2, 3, 4);
let output1 = average(1, 2, 3, 4, 5, 6);
console.log(output);
console.log(output1);

// Q41

let arr = [1, 2, 3, 4, 5];
let [first, ...rest] = arr;
console.log(first);
console.log(rest);

// Q42

let colors = ["red", "pink", "blue", "black", "white"];
let [, , ...remainingColors] = colors;
console.log(remainingColors);

// Q43

let person = {
  name: "shan",
  age: 18,
  email: "shan@gmail.com",
  address: "sector 48 north karachi",
};

let { name, email, ...rest } = person;
console.log(name);
console.log(email);
console.log(rest);

// Q44

let student = {
  id: "B0001",
  name: "James",
  grades: "A",
  info: {
    age: 21,
    major: "Computer Science",
  },
};

let {
  id,
  name,
  info: { major },
  ...rest
} = student;
console.log(id);
console.log(name);
console.log(major);
console.log(rest);

// Q45

function filterEven(...numbers) {
  let output = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0)
    {
      output.push(numbers[i]);
    }
  }
  return output;
}

let ans = filterEven(1, 2, 3, 4, 5, 6);
console.log(ans);

// Q46

function combineAndSort(...arr) {
  let output = [];
  for (let index = 0; index < arr.length; index++) {
    output.push(arr[index]);
  }
  console.log(output);
}
combineAndSort([1, 2, 3, 4], [4, 5, 6, 7, 8, 9]);
combineAndSort([10, 12, 23, 14], [4, 5, 6, 7, 8, 9]);

// Q47

let fruits = ["apple", "banana", "cherry"];
let [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);

// Q48

let colors = ["red", "pink", "blue", "black"];
let [primaryColor,,tertiaryColor] = colors;
console.log(primaryColor);
console.log(tertiaryColor);

// Q49

let numbers = [1, 2, 3, 4, 5];
let [firstNumber, ...remainingNumbers] = numbers;
console.log(firstNumber);
console.log(remainingNumbers);

// Q50

let person = {
  name: "Shakeel",
  age: 19,
  city: "lahore",
};

let { name, age, city } = person;
console.log(name);
console.log(age);
console.log(city);

// Q51

let car = {
  make: "corolla",
  model: "570",
  year:2022
}

let { make: carMake, model: carModel, year: carYear } = car;
console.log(carMake);
console.log(carModel);
console.log(carYear);

// Q52

let settings = {
  theme: "dark",
};

let { theme, language = "English" } = settings;
console.log(theme);
console.log(language);

// Q53

let nestedArray = [[1, 2], [3, 4], [5, 6]];
let [a, b, c] = nestedArray;
console.log(a);
console.log(b);
console.log(c);

// Q54

let profile = {
  username: "abc123",
  details: {
    email: "abc@fmail.com",
    address: "ABC street",
  },
};

let {
  username,
  details: { email },
  details: { address },
} = profile;
console.log(username);
console.log(email);
console.log(address);

// Q55

let data = {
  id: "B002",
  info: [{ name: "Alice" }, { age: 25 }],
};

let {
  id,
  info: [{ name }, { age }],
} = data;
console.log(id);
console.log(name);
console.log(age);

// Q56

function printCoordinates([x, y]) {
  let [a, b] = [x, y];

  console.log(a);
  console.log(b);
}

printCoordinates([2, 3]);
printCoordinates([4, 5]);
printCoordinates([7, 8]);

// Q57

function displayUser({ name, age }) {
  let { name:ans1, age:ans2 } = { name, age };
  console.log(ans1);
  console.log(ans2);
}

displayUser({ name: "haseeb", age: 12 });

// Q58

let book = {
  title: "MSD",
  author: "SSR",
  year:2016
}

console.log(Object.keys(book));

// Q59

let student = {
  name: "hussain",
  age: 20,
  grade: "B",
  school: "HPS",
};

let count = Object.keys(student);
let output = count.length;
console.log(output);

// Q60

let product = {
  name: "hair dryer",
  price: 3000,
  category:"accessories"
}
let values = Object.keys(product);
values.forEach((keys) => {
  console.log(`${keys}:${product[keys]}`)
  
})

// Q61

let movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  genre: "Science Fiction",
};

console.log(Object.values(movie));

// Q62

let scores = {
  math: 98,
  science: 97,
  english: 99,
};

let marks = Object.values(scores);
let sum = 0;
for (let i = 0; i < marks.length; i++)
{
  sum+=marks[i]
}
console.log(sum);

// Q63

let user = {
  username: "hey123",
  email: "hey@gmail.com",
  location: "new york",
};

let values = Object.values(user);
values.forEach((val) => {
  console.log(val);
});

// Q64

let car = {
  make: "corolla",
  model: "570",
  year: 2022,
};

console.log(Object.entries(car));

// Q65

let person = {
  firstName: "James",
  lastName: "Hope",
  age:65
}
console.log(Object.entries(person));

// Q66

let settings = {
  theme: "light",
  notifications: 23,
  privacy: true,
};

let e = Object.entries(settings);
e.forEach(([e, v]) => {
  console.log(`${e}:${v}`);
});

// Q67

let inventory = {
  apples: 12,
  banana: 14,
  oranges: 34,
  grapes: 2,
};

let values = Object.keys(inventory);

let output = values.filter((e) => {
  return inventory[e] > 10;
});
console.log(output);

// Q68

let temp = {
  morning: 30,
  afternoon: 36,
  night: 28,
};

let values = Object.entries(temp).map(([e, i]) => {
  return [e, (i * 9) / 5 + 32];
});

let ans = Object.fromEntries(values);

console.log(ans);

// Q69

let roles = {
  admin: "Has full access",
  editor: "Can edit content",
  viewer: "Can view content",
};

let values = Object.entries(roles).map(([e, i]) => {
  return [i, e];
});
let ans = Object.fromEntries(values);
console.log(ans);

// Q70

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterAndMap(arr) {
  let odd = arr.filter((e, i) => {
    return e % 2 !== 0;
  });
  let square = odd.map((e, i) => {
    return e * e;
  });
  return square;
}
let ans = filterAndMap(arr);
console.log(ans);

// Q71

let words = ["date", "cherry", "banana", "apple"];
function sortAndReduce(arr,reduce) {
  let sorting = arr.sort();
  console.log(sorting);
  return sorting.reduce(reduce);
}

let reduceFn = (a, b) => a + " " + b;

let ans = sortAndReduce(words,reduceFn);
console.log(ans);

// Q72

function greet(name, callback) {
  let msg = `hello ${name}`;
  callback(msg);
}
function printGreeting(msg) {
  console.log(msg);
}

greet("james", printGreeting);

// Q73

function fetchData(callback) {
  setTimeout(() => {
    const data = { message: "data fetched successfully" };
    callback(data);
  }, 2000);
}

function displayData(data) {
  console.log(data);
  
}

fetchData(displayData);

// Q74

let add = (a, b) => {
  return a + b;
}

console.log(add(3,5));

// Q75

let numbers = [1, 2, 3, 4, 5];
let ans = numbers.map((e, i) => {
  return e * e;
})
console.log(ans);

// Q76

function outer() {
  let x = "I'm x";
  function inner(params) {
    console.log(x);
    
  }
  inner();
}
outer();

// Q77

function createCounter() {
  let counter = 2;
  function func() {
    counter++;
    console.log(counter);
    
  }
  return func();
}

createCounter()
createCounter()

// Q78

let greet = (name, greetings = "hello") => {
  console.log(`${greetings} ${name}`);
};
greet("hasseb", "heyy");
greet("hassan");

// Q79

let calculateArea = (width = 10, height = 5) => {
  return width * height;
};
console.log(calculateArea());
console.log(calculateArea(20, 23));

// Q80

let numbers = [1, 2, 3, 4, 5];
let ans = numbers.map((e, i) => {
  return e * e;
});
console.log(ans);

// Q81

let words = ["apple", "banana", "cherry"];
let ans = words.map((e, i) => {
  return e.toUpperCase( );
});
console.log(ans);

// Q82

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ans = numbers.filter((e, i) => {
  return e % 2 == 0;
});
console.log(ans);

// Q83

let words = ["apple", "banana", "cherry", "date"];
let ans = words.filter((e, i) => {
  return e.length > 5;
});
console.log(ans);

// Q84

let numbers = [1, 2, 3, 4, 5];
numbers.forEach((e, i) => {
  console.log(e);
  
})

// Q85

let words = ["apple", "banana", "cherry"];
words.forEach((e, i) => {
  console.log(e.length);
});

// Q86

let numbers = [1, 2, 3, 4, 5];
let ans = numbers.reduce((e, i) => {
  return e + i;
}, 0)
console.log(ans);

// Q87

let words = ["Hello", "world", "this", "is", "JavaScript"];
let ans = words.reduce((a, b) => {
  return a + " " + b;
}, "");
console.log(ans);

// Q88

let numbers = [1, 3, 5, 7, 8];
let ans = numbers.some((e, i) => {
  return e % 2 == 0;
});
console.log(ans);

// Q89

let words = ["apple", "banana", "cherry", "date"];
let ans = words.some((e, i) => {
  return e.length > 5;
});
console.log(ans);

// Q90

let numbers = [2, 4, 6, 8, 10];
let ans = numbers.every((e, i) => {
  return e % 2 == 0;
});
console.log(ans);

// Q91

let words = ["elephant", "giraffe", "hippopotamus"];
let ans = words.every((e, i) => {
  return e.length > 5;
});
console.log(ans);

// Q92

let numbers = [1, 3, 5, 7, 8];
let ans = numbers.find((e, i) => {
  return e % 2 == 0;
});
console.log(ans);

// Q93

let words = ["apple", "banana", "cherry", "date"];
let ans = words.find((e, i) => {
  return e.length > 5;
});
console.log(ans);

// Q94

let numbers = [1, 3, 5, 7, 8];
let ans = numbers.findIndex((e, i) => {
  if (e % 2 == 0) {
    return i;
  }
});

console.log(ans);

// Q95

let words = ["apple", "banana", "cherry", "date"];
let ans = words.findIndex((e, i) => {
  if (e.length > 5) {
    return i;
  }
});

console.log(ans);

// Q96

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}
delay(2000).then(() => {
  console.log("hello world");
});

// Q97

function fetchData() {
  return new Promise((resolve, reject) => {
    resolve({ name: "haseeb" });
  });
}
fetchData().then((data) => {
  console.log(data);
});

// Q98

function fetchUserData() {
  return new Promise((resolve, reject) => {
    let obj = {
      name: "shayan",
      age:19
    }

    if (obj.name && obj.age)
    {
      resolve(true);
    }
    else {
      reject(false)
    }
  })
}
fetchUserData().then((data) => {
  console.log("all data available");
  
}).catch((err) => {
  console.log("age is missing");
  
})

// Q99

function getWeather(location) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let randomValue = Math.random() > 0.3;
      if (randomValue) {
        let data = {
          location: `${location}`,
          temp: Math.floor(Math.random() > 0),
          condition: "sunny",
        };
        resolve(data);
      } else {
        reject("Failed to fetch data");
      }
    }, 1000);
  });
}

getWeather("lahore")
  .then((data) => {
    console.log("Data received", data);
  })
  .catch((err) => {
    console.log(err);
  });

// Q100

let delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve,ms)
  })
}

let sayHello = async () => {
  await delay(2000);
  console.log("Hello world");
  
}
sayHello();

// Q101

let fetchUserData = (data) => {
  return new Promise((resolve, reject) => {
    if (data) {
      resolve(data);
    } else {
      reject("No data available");
    }
  });
};

let getUserData = async () => {
  try {
    let data = await fetchUserData({ name: "haseeb", age: 20 });
    console.log("Data fetched:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

getUserData();

// Q102

let fetchUser = () => {
  return new Promise((resolve, reject) => {
    let data = {
      name: 'shakib',
      age:22
    }
    if (data)
    {
      resolve(data)
    }
    else {
      reject("error")
    }
  })
}

let fetchPosts = () => {
  return new Promise((resolve, reject) => {
    let arr = ["post1", "post2", "post3"];
    if (arr)
    {
      resolve(arr);
    }
    else {
      reject("error in fetching posts")
    }
  })
} 

let getUserAndPosts = async () => {
  let user = await fetchUser();
  let posts = await fetchPosts();
  console.log(user);
  console.log(posts);
  
}

getUserAndPosts()

// Q103

let fetchUser = () => {
  return new Promise((resolve, reject) => {
    let data = {
      name: "shakib",
      age: 22,
    };
    if (data.name && data.age) {
      resolve(data);
    } else {
      reject("error in fetching data");
    }
  });
};

let getUserInfo = async () => {
  try {
    let data = await fetchUser();
    console.log("data fetched", data);
  } catch (error) {
    console.log("data not fetched,", error);
  }
};

getUserInfo();

// Q104

let apiCall = () => {
  return new Promise((resolve, reject) => {
    let random = Math.floor(Math.random() * (3000 - 5 + 1)) + 5;

    setTimeout(() => {
      let data = {
        name: "shayan",
        age: 20,
      };
      resolve(data);
    }, random);
  });
};

let getData = async () => {
  let res1 = await apiCall();
  let res2 = await apiCall();
  let res3 = await apiCall();
  console.log(res1);
  console.log(res2);
  console.log(res3);
};
getData();
*/
