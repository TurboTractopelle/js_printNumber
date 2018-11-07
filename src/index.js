
function printNumber(number, char) {
  
  let numbers= {
    1: ["011110", "110011", "110011", "110011", "110011", "011110"]
  }

  function replaceChar(numberArr){
    return numberArr.replace(/0/g, ' ').replace(/1/g, char)
  }

  let elements = String(number).split("") // ["1", "1"]
  console.log(elements)

  //console.log(numbers[1][0])

  let msg='';

  //msg = numbers[elements[0][0]]

  for(let i=0; i < 2; i++){
    
  }

  console.log(numbers[elements[0]][0] )
  //console.log(msg)

}



console.log(printNumber(11,"5"))



