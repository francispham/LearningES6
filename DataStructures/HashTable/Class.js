/* Reference Type: */
var obj1 = { value: 10 };
var obj2 = obj1; //reference!
var obj3 = { value: 10 };

// console.log(obj1 === obj2);
// console.log(obj1 === obj3);

obj1.value = 15;
// console.log("Object 2 Value: ", obj2.value);
// console.log("Object 3 Value: ", obj3.value);

/* Context vs Scope: */
//? Scope is created inside Curry Brackets:
function b() {
  let a = 4; // 'a' is not defined outside this Scope
}

//? Context will tell you where we are within the Object:
function a() {
  console.log(this); // 'this' will be preferred as the window on Browser
}
const obj4 = {
  // Context is created with Object a!
  a: function () {
    console.log(this); // 'this' will be referred as
  },
};
// obj4.a();

/* Instantiation:  (when we make a Copy (Instance) of an Object & Reuse the Code) */
class Player {
  constructor(name, type) {
    console.log("Inside Player Constructor: ", this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(
      "From Introduce Method: ",
      `Hi I am ${this.name}, I'm a ${this.type}`
    );
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    // This will pass the Properties to the Constructor of the extended Class Wizard
    console.log("Inside Wizard Constructor: ", this);
  }

  //? Method Overloading:
  play() {
    console.log("From Play Method: ", `WEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Francis", "Healer");
const wizard2 = new Wizard("Phong", "Dark Magic");

// wizard1.play();
// wizard1.introduce();
// wizard2.introduce();
