function find_number() {
  let x = prompt("Enter a number: ");
  let number = [-4, 3, 55, 23, 68, -11, 22];
  for (i = 0; i < number.length; i++) {
    if (x == number[i]) {
      document.getElementById("result").innerHTML =
        "x: " + number[i] + " được tìm thấy ở vị trí " + parseInt(i + 1);
    }
  }
}
