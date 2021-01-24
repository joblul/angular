const array = [1,2,3,4,5,6,7];

/*
with for loop
*/

const sumWithLoop = arr => {
    let sum = 0;
    for(let val of arr){
        sum += val;
    }
    return sum;
}

console.log(sumWithLoop(array));
const sum = arr => {
 const reducer = arr.reduce((acc,item)=>{
    return acc + item;
 });
 return reducer;
}
console.log(sum(array));