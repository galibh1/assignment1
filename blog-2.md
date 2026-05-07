4. How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects?

OOP means object oriented programming. Object Oriented Programming is one the important thing to scale your code. To maintain a large codebase you need object oriented programming. There are four pillars of object oriented programming:
1.Inheritance 
2.Polymorphism
3.Abstraction
4.Encapsulation

these four pillars are very important to build a scalable and reusable software.

1. Inheritance: Inheritance is basically when one class inherit properties and methods from another class. Inheritance helps to reduce duplicated code and code reuse.
example:

class Animal {
  constructor(public name: string) {}

  makeSound() {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const dog = new Dog("tom");

dog.makeSound();
dog.bark()

Inheritance is very useful to repeat the same logic across multiple classes.
Inheritance helps by reusing common functions,reducing code duplication and improving availabily and maintability.

2. Polymorphism means many more forms. It allows different classes to provide different implementations of the same method.
Example:
class Payment {
  pay(amount: number): void {
    console.log("Processing payment");
  }
}

class CreditCardPayment extends Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Credit Card`);
  }
}

class BkashPayment extends Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Bkash`);
  }
}
polymorphism makes it easier scale the code. polymorphism includes: cleaner architecture, easier feature expansion, reduced logic and better scalability.

3. Abstraction: Abstraction focuses on exposing only essential details while hiding internal implementation. Users interact with what an object does, not how it does it. Abstraction helps developers to simplify complex, Separate implementation from usage and improve maintainability.

4. Encapsulation means restricting direct access to internal data and controlling modifications through methods.This protects objects from unintended changes. Encapsulation helps with data security,predictability,debugging and maintainibility.

OOP in large scale TypeScript Projects:
The four pillars of OOP are not just theoretical concepts. They are practical tools for managing complexity in real-world software systems.
By combining:Inheritance for reuse, Polymorphism for flexibility, Abstraction for simplicity, Encapsulation for protection and developers can create TypeScript applications that are scalable, maintainable, and easier to evolve over time.
