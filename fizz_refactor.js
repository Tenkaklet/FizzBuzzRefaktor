function fizzbuzz(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      document.write('<h3 class="both">Fizz Buzz!</h3>');
    } else if (i % 3 === 0) {
      document.write('<h3>Fizz</h3>');
    } else if (i % 5 === 0) {
      document.write('<h3>Buzz</h3>');
    } else {
      document.write("<h3 class='variable'>" + i + "</h3>");
    }
  }
}

var input = prompt("How much do YOU fizzbuzz?");
input = parseInt(input);

if (isNaN(input)) {
  input = prompt("Please input a number");
}

fizzbuzz(+input);