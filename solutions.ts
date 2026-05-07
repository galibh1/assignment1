// 1. Filter Even Numbers
function filterEvenNumbers(nums: number[]): number[] {
  return nums.filter((num) => num % 2 === 0);
}

//console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));


//2. Reverse String
function reverseString(input: string): string {
  let reversed = "";

  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }

  return reversed;
}




// 3. Union Type + Type Guard

type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
}



//4. Generic getProperty

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = { id: 1, name: "John Doe", age: 21 };
//console.log(getProperty(user, "name"));



//5. Book Interface + toggleReadStatus
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
//console.log(toggleReadStatus(myBook));



//6. Class + Inheritance

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}
const student = new Student("Alice", 20, "A");
//console.log(student.getDetails());



// 7.Array Intersection
function getIntersection(arr1: number[], arr2: number[]): number[] {
  const set2 = new Set(arr2);
  return arr1.filter((num) => set2.has(num));
}
//console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));



