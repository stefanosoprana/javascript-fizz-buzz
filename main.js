// Scrivi un programma che
// stampi i numeri da 1 a 100 ma per i multipli di
// 3 stampi “Fizz” al posto del numero e per i
// multipli di 5 stampi "Buzz". Per i numeri che
// sono sia multipli di 3 che di 5 stampi
// "FizzBuzz".

for (var i = 1; i <= 100; i++) {

  var quindici = (i % 15 == 0);
  var tre = (i % 3 == 0);
  var cinque = (i % 5 == 0);

  if (quindici) {
    console.log('FizzBuzz');
    document.writeln('FizzBuzz' + '<br>')
  }

  else if (tre) {
    console.log('Fizz');
    document.writeln('Fizz' + '<br>')
  }

  else if (cinque) {
    console.log('Buzz');
    document.writeln('Buzz' + '<br>')
  }

  else {
    console.log(i);
    document.writeln(i + '<br>')
  }

};
