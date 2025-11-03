// Named Export
function plus(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
    return a + b;
}
// Named Export
function minus(a, b) {
    console.log(`${a} - ${b} = ${a - b}`);
    return a - b;
}
// Named Export
export function multiply(a, b) {
    console.log(`${a} * ${b} = ${a * b}`);
    return a * b;
}
function printUser(user) {
    console.log(`${user.name} ${user.age}`);
}
// Named Export
export { plus, minus };
// Default Export
export default { plus, minus, multiply, printUser };
