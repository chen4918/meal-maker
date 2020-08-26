const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers
  },
  get mains() {
    return this._courses.mains
  },
  get desserts() {
    return this._courses.desserts
  },
  set appetizers(appetzers) {
    this._courses.appetizers = appetzers
  },
  set mains(mains) {
    this._courses.mains = mains
  },
  set desserts(desserts) {
    this._courses.desserts = desserts
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    let randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    let totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name} and the total price is $${totalPrice}.`
  },
};

menu.addDishToCourse('appetizers', 'kalimari', 7.99);
menu.addDishToCourse('appetizers', 'salad', 5.99);
menu.addDishToCourse('appetizers', 'miso soup', 7.99);

menu.addDishToCourse('mains', 'sushi', 13.99);
menu.addDishToCourse('mains', 'chicken teriyaki', 11.99);
menu.addDishToCourse('mains', 'bulgogi', 15.99);

menu.addDishToCourse('desserts', 'rice pudding', 4.99);
menu.addDishToCourse('desserts', 'green tea cheesecake', 5.99);
menu.addDishToCourse('desserts', 'cookies', 2.99);

console.log(menu.generateRandomMeal());
