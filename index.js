// Array Destructuring
const [first, second] = [10, 20];
console.log(first);  // Output: 10
console.log(second); // Output: 20

// Object Destructuring
const person = { name: 'John', age: 25 };
const { name, age } = person;
console.log(name);  // Output: John
console.log(age);   // Output: 25


const user = {
    name: 'Alice',
    address: {
        street: '123 Main St',
    }
};

console.log(user?.address?.street);  // Output: 123 Main St
console.log(user?.contact?.phone);   // Output: undefined (instead of throwing an error)


let value = null;
let defaultValue = value ?? 'Default Value';
console.log(defaultValue);  // Output: Default Value

value = 'Actual Value';
defaultValue = value ?? 'Default Value';
console.log(defaultValue);  // Output: Actual Value




function tag(strings, ...values) {
    console.log(strings);  // Array of string literals
    console.log(values);   // Array of interpolated values
    return 'Tagged result';
}

const nameee = 'John';
const ageee = 30;
const result = tag`My name is ${name} and I am ${age} years old.`;
console.log(result);  // Output: Tagged result

let weakRef = new WeakRef({ name: 'John' });
console.log(weakRef.deref());  // Output: { name: 'John' } (or `undefined` if already garbage collected)

// FinalizationRegistry allows you to perform cleanup after an object is garbage collected
const registry = new FinalizationRegistry((heldValue) => {
    console.log(`Object with ${heldValue} has been garbage collected`);
});

let obj = { name: 'test' };
registry.register(obj, 'name');

// Deregister by nullifying the reference
obj = null;

const sym1 = Symbol('description');
const sym2 = Symbol('description');

console.log(sym1 === sym2);  // Output: false (each symbol is unique)

const objj = {
    [sym1]: 'value'
};

 
 


 