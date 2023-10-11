//   for (let i = 0; i < NUMBERS.length; i++) {
//     const num = NUMBERS[i];
//     if (num % 2 === 0) {
//       console.log('Jestem parzystą liczbą:', num);
//       continue;
//     }
//     console.log('Jestem nieparzystą liczbą:', num);
//   }

const firstEven = NUMBERS.find((num) => num % 2 === 0);
console.log(firstEven);
