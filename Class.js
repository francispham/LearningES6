// Reference Type:
var obj1 = { value: 10 };
var obj2 = obj1; //reference!
var obj3 = { value: 10 };

console.log(obj1 === obj2)
console.log(obj1 === obj3)

obj1.value = 15;
console.log(obj2.value)
console.log(obj3.value)


// Context vs Scope:
function b() {
  let a = 4;
  console.log(a)
}


// Instantiation:
class Player {
  constructor(name, type) {
    console.log('player',this)
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log('player', this);
  }
  play() {
    console.log(`WEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Francis', 'Healer');
// const wizard2 = new Wizard('Phong', 'Dark Magic');

wizard1.play()
wizard1.introduce()