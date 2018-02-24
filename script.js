//1st
const strinSum = (x = 'Hello', y = 'World') => console.log(`${x} ${y}`);
strinSum();
//2nd
const multiply = (a, b = 1) => console.log(a*b);
multiply(2);
//3rd
const average = (...args) => console.log(args.reduce((a,b) => a+b)/args.length);
average(1,3,6,6);
//4th
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
const average = (x) => console.log(x.reduce((a,b) => a+b)/x.length);
average(grades);
//5th
const data = [1, 4, 'Iwona', false, 'Nowak'];
const checkMe = (putthedata) => putthedata.forEach((x)=> (typeof x =='string' ? console.log(x) : false));
checkMe(data);


//codewars 
//1
let buildString = (...args) => {
    let ret = args.join(', ');
    return `I like ${ret}!`
    console.log(ret);
};
//2

//3

//4

//5