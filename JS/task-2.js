
function makeArray(firstArray, secondArray, maxLength) {
  // 1. Створюємо новий масив, об'єднуючи обидва вхідні масиви
  const combinedArray = firstArray.concat(secondArray);

  // 2. Перевіряємо, чи довжина перевищує ліміт maxLength
  // Якщо так — повертаємо "відрізану" копію, якщо ні — весь масив
  if (combinedArray.length > maxLength) {
    return combinedArray.slice(0, maxLength);
  }

  return combinedArray;
}

// Код для перевірки
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
