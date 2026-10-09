import {Car} from './Car.ts';
import {Engine} from './Engine.ts';

const myEngine = new Engine(200);
const myCar = new Car('red', 'Toyota', myEngine)
console.log(`My car is a ${myCar.getColor()} ${myCar.getModel()}.`);
