
function printNumber(number, char) {
  
  let numbers= {
    1: ["011110", "110011", "110011", "110011", "110011", "011110"]
  }

  function replaceChar(numberArr){
    return numberArr.replace(/0/g, ' ').replace(/1/g, char)
  }

  let elements = String(number).split("") // ["1", "1"]

  let msg="";
  let ligne="";

  for(let i=0; i < 6; i++){
    for(let j=0; j<2; j++){
      ligne += numbers[elements[j]][i] 
    }
    msg += ligne + "\n"
    ligne = ""   
  }

  
  console.log(replaceChar(msg))

}



console.log(printNumber(11,"5"))



