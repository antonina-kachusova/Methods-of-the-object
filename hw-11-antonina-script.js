let car1 = {
  brand: "Tesla",
  model: "S",
  year: 2022,
  color: "grey",
  showInfo: function () {
    console.log(
      `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`
    );
  },
};
car1.showInfo();

let car2 = {
  brand: "Maserati",
  model: "Grecale",
  year: 2024,
  color: "blue",
  showInfo: function () {
    console.log(
      `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`
    );
  },
};
car2.showInfo();

let car3 = {
  brand: "Mercedes",
  model: "EQA",
  year: 2023,
  color: "black",
  showInfo: function () {
    console.log(
      `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`
    );
  },
};
car3.showInfo();

let book = {
  title: '"The 48 Laws Of Power"',
  author: "Robert Greene",
  pages: 480,
  describe: function () {
    console.log(
      `Book title: ${this.title} \nAuthor: ${this.author} \nNumber of pages: ${this.pages}`
    );
  },
};
book.describe();

let student = {
  firstName: "Antonina",
  lastName: "Kachusova",
  course: "JavaScript",
  introduction: function () {
    console.log(
      `Hello, everyone! \nMy name is ${this.firstName} and I am studying ${this.course} on the Frontend course.`
    );
  },
};
student.introduction();

