# 4. How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects?

Object-Oriented Programming (OOP) is a programming paradigm that organizes code using objects and classes. It is one of the most important approaches for building scalable and maintainable software systems.

In large-scale TypeScript projects, OOP helps developers manage complexity, organize logic, and improve code reusability. The four main pillars of OOP are:

1. Inheritance
2. Polymorphism
3. Abstraction
4. Encapsulation

These four pillars work together to create software that is scalable, reusable, flexible, and easier to maintain.

---

# 1. Inheritance

Inheritance allows one class to inherit properties and methods from another class. This helps reduce code duplication and promotes code reuse.

### Example of Inheritance

```ts id="5qg8xz"
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

const dog = new Dog("Tom");

dog.makeSound();
dog.bark();
```

In this example, the `Dog` class inherits the `name` property and `makeSound()` method from the `Animal` class.

### Benefits of Inheritance

* Reduces duplicate code
* Promotes code reuse
* Improves maintainability
* Makes large applications easier to organize

Inheritance is especially useful when multiple classes share similar functionality.

---

# 2. Polymorphism

Polymorphism means “many forms.” It allows different classes to provide different implementations of the same method.

### Example of Polymorphism

```ts id="6pzn0n"
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
```

Here, different payment classes implement the `pay()` method in different ways.

### Benefits of Polymorphism

* Makes code more flexible
* Simplifies feature expansion
* Reduces conditional logic
* Improves scalability
* Creates cleaner architecture

Polymorphism helps developers extend applications without changing existing code significantly.

---

# 3. Abstraction

Abstraction focuses on exposing only the essential details while hiding internal implementation details. Users interact with what an object does rather than how it works internally.

### Example of Abstraction

```ts id="d1o8k7"
abstract class Vehicle {
  abstract startEngine(): void;

  move() {
    console.log("Vehicle is moving");
  }
}

class Car extends Vehicle {
  startEngine(): void {
    console.log("Car engine started");
  }
}
```

In this example, the abstract class defines a structure while hiding implementation details.

### Benefits of Abstraction

* Simplifies complex systems
* Separates implementation from usage
* Improves readability
* Makes code easier to maintain
* Encourages consistent design

Abstraction allows developers to focus on high-level functionality instead of low-level details.

---

# 4. Encapsulation

Encapsulation means restricting direct access to internal data and controlling modifications through methods. It protects objects from unintended changes.

### Example of Encapsulation

```ts id="5xv1u2"
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

const account = new BankAccount();

account.deposit(500);

console.log(account.getBalance());
```

In this example, the `balance` property cannot be accessed directly from outside the class.

### Benefits of Encapsulation

* Protects internal data
* Improves security
* Increases predictability
* Simplifies debugging
* Improves maintainability

Encapsulation ensures that object data remains controlled and consistent.

---

# OOP in Large-Scale TypeScript Projects

The four pillars of OOP are not just theoretical concepts. They are practical tools used in real-world software development to manage complexity and organize large codebases effectively.

By combining:

* **Inheritance** for code reuse
* **Polymorphism** for flexibility
* **Abstraction** for simplicity
* **Encapsulation** for protection

developers can build TypeScript applications that are:

* Scalable
* Maintainable
* Reusable
* Flexible
* Easier to extend over time

OOP helps teams structure large applications more efficiently, making development and maintenance much easier in long-term projects.
