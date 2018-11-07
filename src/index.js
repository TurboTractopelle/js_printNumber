function printNumber(number, char) {
  let numbers = {
    0: ["011110", "110011", "110011", "110011", "110011", "011110"],
    1: ["001100", "011100", "101100", "001100", "001100", "111111"],
    2: ["011110", "110011", "000110", "001100", "011000", "111111"],
    3: ["011110", "110011", "000110", "000110", "110011", "011110"],
    4: ["110011", "110011", "110011", "011111", "000011", "000011"],
    5: ["111111", "110000", "111110", "000011", "000011", "111110"],
    6: ["000110", "001100", "011110", "110011", "110011", "011110"],
    7: ["111111", "110011", "000110", "001100", "011000", "011000"],
    8: ["011110", "110011", "011110", "011110", "110011", "011110"],
    9: ["011110", "110011", "110011", "011110", "001100", "011000"]
  };

  // complete with 0
  let elements = String(number)
    .split("")
    .reverse();
  for (let k = 0; k < 5 - String(number).length; k++) {
    elements.push("0");
  }
  elements = elements.reverse();

  // draw
  let fullLign = Array(5 * 6 + 6 + 5).join("1");
  let lignFill = "1" + Array(5 * 7 + 4).join("0") + "1\n";
  let msg = fullLign + "\n" + lignFill;
  let ligne = "";

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 5; j++) {
      ligne += numbers[elements[j]][i] + " ";
    }
    msg += "1  " + ligne + " 1\n";
    ligne = "";
  }
  msg += lignFill + fullLign;

  return msg.replace(/0/g, " ").replace(/1/g, char);
}

console.log(printNumber(9951, "*"));
