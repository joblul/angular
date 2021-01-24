const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flat = data.reduce((total,amount)=>{
    return total.concat(amount);
},[])
console.log(flat);

const dataColor = [
    {a: 'happy', b: 'robin', c: ['blue','green']}, 
    {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
    {a: 'sad', b: 'goldfish', c: ['green','red']}
  ];

  const colors = dataColor.reduce((total,amount) =>{
    amount.c.forEach(color => {
        total.push(color);
    })
    return total;
  },[]);
  console.log(colors);

  const uniqueColor = dataColor.reduce((total,amount) => {
      amount.c.forEach(color => {
        if(total.indexOf(color) === -1){
            total.push(color);
        }
      });
      return total;
  },[]);
  console.log(uniqueColor);