function printNumber(number, char) {
  let numbers = {
    0: ["011110", "110011", "110011", "110011", "110011", "011110"],
    1: ["001100", "011100", "101100", "001100", "001100", "111111"],
    2: ["011110", "110011", "000110", "001100", "011000", "111111"],
    3: ["011110", "110011", "000110", "000110", "110011", "011110"],
    4: ["110011", "110011", "110011", "011111", "000011", "000011"],
    5: ["111111", "110000", "111110", "000011", "000011", "111110"]
  };

  function replaceChar(numberArr) {
    return numberArr.replace(/0/g, " ").replace(/1/g, char);
  }

  let elements = String(number).split("");

  let msg = "";
  let ligne = "";

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < elements.length; j++) {
      ligne += numbers[elements[j]][i] + " ";
    }
    msg += ligne + "\n";
    ligne = "";
  }

  console.log(replaceChar(msg));
}

console.log(printNumber(102345, "5"));
