// Scrivi un programma che
// stampi i numeri da 1 a 100 ma per i multipli di
// 3 stampi “Fizz” al posto del numero e per i
// multipli di 5 stampi Buzz. Per i numeri che
// sono sia multipli di 3 che di 5 stampi
// FizzBuzz.

// stampa i numeri da 1 a 100

var multiplo3 = 3;

for (var i = 1; i < 100; i++) {
  console.log(i);

  if (i == multiplo3) {
    multiplo3 = i + 3;
    console.log('Fizz');
  }
}

console.log(i);
