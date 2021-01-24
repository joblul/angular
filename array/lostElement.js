/***
 You are given two arrays. The elements in arr1 threw a party 
 and started to mix around. However, one of the elements got lost!
Your task is to return the element which was lost.
 **/
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
const arr2 = [1, 3, 4, 5, 6, 7, 8];
function missing(arr1, arr2) {
    

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] != arr2[i]){
            return arr1[i];
        }
    }
    

	
}
console.log(missing(arr1,arr2))