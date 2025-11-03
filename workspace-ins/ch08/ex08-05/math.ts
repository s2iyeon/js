// Named Export
function plus(a: number, b: number) {
  console.log(`${a} + ${b} = ${a + b}`);
  return a + b;
}

// Named Export
function minus(a: number, b: number) {
  console.log(`${a} - ${b} = ${a - b}`);
  return a - b;
}

// Named Export
export function multiply(a: number, b: number) {
  console.log(`${a} * ${b} = ${a * b}`);
  return a * b;
}

function printUser(user: User) {
  console.log(`${user.name} ${user.age}`);
}

export type User = {
  name: string;
  age: number;
}

// Named Export
export { plus, minus };

// Default Export
export default { plus, minus, multiply, printUser };