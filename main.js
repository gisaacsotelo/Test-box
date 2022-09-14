const MyArray = [9,3,5,7,1];

function minMax (arr){
  console.log(arr)
  let NewArray = arr.sort() // sorts arr min to max
  console.log(arr)
  console.log(NewArray)
  /* 
  modifies the existing array, no need to call for a new one
  */
  let min = arr.slice(0,4)
  console.log(min)
  let max = arr.slice(1,5)
  console.log(max)
  const minSum = min.reduce((acumulator, currentItem)=> {
    return acumulator + currentItem
  },0)
  console.log(minSum)
  const maxSum = max.reduce((acumulator, currentItem)=> {
    return acumulator + currentItem
  },0)
  console.log(maxSum)
}

minMax(MyArray);