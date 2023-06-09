// class Governor {
//   constructor(state, gender, house){
//     this.state = state;
//     this.gender = gender;
//     this.house = house;
//   }
  
// }

// const gov = new Governor('Mike DeWine', 'male', 'republican');
// console.log(gov);

class Person{
  constructor(eyes, hairColor, desire){
    this.eyes = eyes;
    this.hairColor = hairColor;
    this.desire = desire;
  }
}

class Postman extends Person{
  constructor(tools, company, ...args){
    super(...args);
    this.tools = tools;
    this.company = company;
  }
}

class Chef extends Person{
  constructor(restuarant, sigDish, ...args){
    super(...args);
    this.restuarant = restuarant;
    this.sigDish = sigDish;
  }
}

const bluePostman = new Postman('Delivery Truck', 'USPS', 'blue','brown' ,'rockstar');
console.log(bluePostman);

const brownPostman = new Postman('Bag', 'UPS', 'brown', 'white', 'millionaire');
console.log(brownPostman);

const gordonRamsey = new Chef("Hell's Kitchen", 'lamb sauce', 'dark brown', 'blonde', "Don't be an idiot sandwich");
console.log(gordonRamsey);

const guyFieri = new Chef('Flavortown', 'burger & wings', 'brown', 'gray', 'have a restuarant again' )
console.log(guyFieri);

