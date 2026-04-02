function filterArray(numbers, value) {
  // 1. Створюємо порожній масив для результатів
  const filteredNumbers = [];

  // 2. Використовуємо цикл для перебору кожного числа в масиві numbers
  for (const number of numbers) {
    // 3. Якщо число більше за значення value, додаємо його в наш масив
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  // 4. Повертаємо новий масив із підходящими числами
  return filteredNumbers;
}

// Код для перевірки
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
