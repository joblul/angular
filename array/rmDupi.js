/*
How to remove duplicate from an array?
*/
// Using Set
const arra = [1,1,2,2,3,3,4,5];
const uniqueSet = new Set(arra);
const backToArray = [...uniqueSet];
console.log(backToArray);

/***Filter***/

const withoutDpl = arra.filter((item,index)=>{
    return arra.indexOf(item) === index;
});

console.log(withoutDpl);

/*****With reduce ******/

const withReduce = arra.reduce((unique,item) => {
    return unique.includes(item) ? unique : [...unique,item];

},[]);
console.log(withReduce);

