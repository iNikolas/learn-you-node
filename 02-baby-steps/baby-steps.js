const [,, ...args] = process.argv
const argsSum = args.reduce((accumulator, arg) => accumulator + +arg, 0)
console.log(argsSum);
