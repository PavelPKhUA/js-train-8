// Завдання 1
// В даному завданні створимо функцію, яка використовує метод `Array.from` для створення масиву зі списку користувачів з бази даних.

/**
 * Функція `getUsersFromDatabase` отримує дані користувачів та використовує метод `Array.from` для створення масиву користувачів зі списку.
 * array - Вхідний масив
 * Повертає: Масив користувачів.
 */
function getUsersFromDatabase(array) {
  //   let userArray = Array.from(array) // Використовуємо метод `Array.from` для створення масиву користувачів зі списку, елементи якого це об'єкти які міститять
  //   for (let item of userArray) {
  //     item.name = item.name.toUpperCase() //   id який дорівнює id користувача,firstName який дорівнює firstName користувача в верхньому регістрі та years який дорівнює age користувача

  //перейменування ключів властивостей об'єкту item спосіб 1 (не спрацював):
  // for (let key in item) {
  //   if (key === 'name') {
  //     key = 'firstName'
  //   }
  //   if (key === 'age') {
  //     key = 'years'
  //   }
  // }

  //перейменування ключів властивостей об'єкту item спосіб 2 (не спрацював):
  // item = {
  //   id: item.id,
  //   firstName: item.name,
  //   years: item.age,
  // }

  // "перейменування"/перестворення ключів властивостей об'єкту item у newItem спосіб 3 (спрацював частково):
  // let newitem = {
  //   id: item.id,
  //   firstName: item.name,
  //   years: item.age,
  // }
  // console.log(newitem)
  //   }
  //   return userArray // Повертаємо масив користувачів

  // Варіант викладача:
  const userArray = Array.from(array, (item) => {
    return {
      id: item.id,
      firstName: item.name.toUpperCase(),
      years: item.age,
    }
  })
  return userArray
}

// Приклад використання функції getUsersFromDatabase
const userRecords = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 28 },
  { id: 3, name: 'Mike', age: 32 },
]
console.log('Завдання: 1 ==============================')

console.log(getUsersFromDatabase(userRecords))
// Виведе
// [
//   { id: 1, firstName: 'JOHN', years: 30 },
//   { id: 2, firstName: 'JANE', years: 28 },
//   { id: 3, firstName: 'MIKE', years: 32 }
// ]

// Завдання:2 - Видалення останнього елементу з масиву

/**
 * Функція `removeLastElement` видаляє останній елемент з масиву, використовуючи метод `pop`.
 * Якщо масив порожній, повертає `undefined`.
 *  arr - Вхідний масив, з якого буде видалений останній елемент.
 * Повертає Видалений останній елемент або `undefined`, якщо масив порожній.
 */
function removeLastElement(arr) {
  if (arr.length === 0) {
    return undefined // Перевіряємо, чи масив не є порожнім, якщо порожній повертаємо  undefined
  }
  arr.pop() // Використовуємо метод `pop` для видалення останнього елементу з масиву
  return arr // Повертаємо оновлений масив
}

// Приклад використання функції removeLastElement
console.log('Завдання: 2 ==============================')

console.log(removeLastElement([1, 2, 3, 4, 5])) // Виведе [1, 2, 3, 4]

// Завдання: 3 - Фільтрація масиву за певною умовою

/**
 * Функція `filterByCondition` фільтрує вхідний масив за певною умовою, використовуючи метод `filter`.
 *  arr - Вхідний масив, який буде фільтруватись.
 * condition - Функція-умова, яка визначає, чи задовольняє елемент умові.
 * Повертає: Новий масив, який містить елементи, що задовольняють умову.
 */
function filterByCondition(arr, condition) {
  const newArr = arr.filter(condition) // Використовуємо метод `filter` для фільтрації масиву
  return newArr // Повертаємо відфільтрований масив
}

// Приклад використання функції filterByCondition

let condition = (item) => item % 2 === 0 // Фільтруємо парні числа
console.log('Завдання: 3 ==============================')
console.log(filterByCondition([1, 2, 3, 4, 5], condition)) // Виведе [2, 4]

// Завдання: 4

/**
 * Функція `checkArray` перевіряє, чи є вхідний об'єкт масивом, використовуючи метод `Array.isArray`.
 *  obj - Вхідний об'єкт, який буде перевірятись.
 *Повертає: `true`, якщо об'єкт є масивом, `false` - у протилежному випадку.
 */
function checkArray(obj) {
  let result = false
  if (obj !== null && obj !== undefined) {
    // Перевіряємо, чи є об'єкт не null і не undefined
    result = Array.isArray(obj) // Використовуємо метод `Array.isArray` для перевірки, чи є об'єкт масивом
    return result // Повертаємо результат перевірки
  } else {
    // Якщо об'єкт є null або undefined, виводимо повідомлення про помилку Помилка: Вхідний об'єкт є null або undefined.
    return `Вхідний об'єкт є null або undefined. ${result}` //Повертаємо false
  }
}

// Приклад використання функції checkArray
console.log('Завдання:4 ==============================')
console.log(checkArray([1, 2, 3, 4, 5])) // Виведе true

// Завдання:5 - Створення нового масиву з переданих елементів

/**
 * Функція `createArray` створює новий масив з переданих елементів, використовуючи метод `Array.of`.
 * Повертає: elements - Елементи, з яких буде створений новий масив.
 * Повертає: Новий масив з переданих елементів.
 */
function createArray(...elements) {
  let newArray = []
  if (elements.toString().length > 0) {
    // Перевіряємо, чи кількість переданих елементів більше нуля
    newArray = Array.of(...elements) // Використовуємо метод `Array.of` для створення нового масиву з переданих елементів
    return newArray // Повертаємо створений масив
  } else {
    return `Нема елементів для обробки ${newArray}` // Якщо не передано жодного елементу, виводимо повідомлення про помилку
    //Повертаємо пустий масив
  }
}

// Приклад використання функції createArray
console.log('Завдання:5 ==============================')
console.log(createArray(1, 2, 3, 4, 5)) // Виведе [1, 2, 3, 4, 5]

// Завдання: 6 - Отримання елементу масиву за заданим індексом

/**
 * Функція `getElementAtIndex` отримує елемент з масиву за заданим індексом, використовуючи метод `at`.
 *  arr - Вхідний масив.
 *  index - Індекс елементу, який потрібно отримати.
 * Повертає Елемент з масиву за заданим індексом або `undefined`, якщо індекс виходить за межі масиву.
 */
function getElementAtIndex(arr, index) {
  if (arr.length !== 0) {
    // Перевіряємо, чи масив не є порожнім
    // Повертаємо undefined (вивід спільний переніс у кунець)
    if (index < arr.length && index >= -arr.length) {
      // Перевіряємо, чи індекс знаходиться в межах довжини масиву
      let elem = arr.at(index) // Отримуємо елемент з масиву за заданим індексом
      return elem // Повертаємо отриманий елемент
    }
  } else {
    return undefined // Якщо індекс виходить за межі масиву,повертаємо undefined
  }
}

// Приклад використання функції getElementAtIndex
console.log('Завдання:6 ==============================')

console.log(getElementAtIndex([1, 2, 3, 4, 5], 2)) // Виведе 3

// Завдання:7

/**
 * Об'єднує два масиви, обертає результат та повертає новий масив.
 *  arr1 - Перший масив.
 *  arr2 - Другий масив.
 * Повертає: Об'єднаний та обернутий масив.
 */
function combineAndReverseArrays(arr1, arr2) {
  let newArr = []
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    // Перевіряємо, чи обидва аргументи є масивами
    //  Якщо ні повертаємо пустий масив
    newArr = arr1.concat(arr2) // Об'єднуємо два масиви за допомогою методу `concat`
    newArr.reverse() // Обертаємо отриманий об'єднаний масив за допомогою методу `reverse`
    // Повертаємо об'єднаний та обернутий масив
  }
  return newArr
}

// Приклад використання функції combineAndReverseArrays
console.log('Завдання:7 ==============================')

console.log(combineAndReverseArrays([1, 2, 3], [4, 5, 6])) //Виведе [ 6, 5, 4, 3, 2, 1 ]

// Завдання: 8

/**
 * Перевіряє, чи масив містить заданий елемент та повертає його індекс(и).
 *  arr - Вхідний масив.
 *  element - Елемент для пошуку.
 * Повертає: Масив індексів, де знайдено елемент, або пустий масив, якщо елемент не знайдено.
 */
function findElementIndexes(arr, element) {
  let newArr = []
  if (Array.isArray(arr)) {
    // Перевіряємо, чи аргумент є масивом
    // якщо ні повертаємо пустий масив
    const index1 = arr.indexOf(element) // Знаходимо індекс першого знайденого елементу за допомогою методу `indexOf`
    const index2 = arr.lastIndexOf(element) // Знаходимо індекс останнього знайденого елементу за допомогою методу `lastIndexOf`
    // Створюємо пустий масив індексів знайдених елементів
    if (index1 != -1) {
      newArr[0] = index1 // Додаємо перший знайдений індекс, якщо елемент знайдено
    }
    if (index2 !== index1) {
      newArr[1] = index2 // Додаємо останній знайдений індекс, якщо він відрізняється від першого
    }
  }
  return newArr // Повертаємо масив індексів
}

// Приклад використання функції findElementIndexes
console.log('Завдання:8 ==============================')

console.log(findElementIndexes([1, 2, 3, 4, 5, 2], 2)) //Виведе [ 1, 5 ]

// Завдання:9

/**
 * Копіює та переставляє задану кількість елементів з масиву в нове місце за допомогою методу `copyWithin`.
 *  arr - Вхідний масив, з якого будуть копіюватись елементи.
 *  target - Індекс, починаючи з якого розміщувати копійовані елементи.
 *  start - Індекс, з якого починається копіювання елементів.
 *  end - Індекс, на якому закінчується копіювання елементів (не включно).
 * Повертає: Модифікований масив з копійованими та переставленими елементами.
 */
function copyAndSwapElements(arr, target, start, end) {
  let test = arr.length
  if (
    target < arr.length &&
    target >= -arr.length &&
    start < arr.length &&
    start >= -arr.length &&
    end < arr.length + 1 &&
    end >= -arr.length
    // И еще куча условий типа модуля end болье положительного start, но меньше меньше отрицательного  и т.д
  ) {
    // Перевіряємо, чи індекси належать межам масиву якщо ні виводимо рядок Неприпустимі індекси
    arr.copyWithin(target, start, end) // Копіюємо та переставляємо елементи за допомогою методу `copyWithin`
    return arr // Повертаємо модифікований масив
  } else {
    return `Неприпустимі індекси`
  }
}

// Приклад використання функції copyAndSwapElements

console.log('Завдання:9 ==============================')

console.log(copyAndSwapElements([1, 2, 3, 4, 5], 0, 2, 4)) // Виведе [3, 4, 3, 4, 5]*

// Завдання:10
// В даному завданні ми створимо функцію, яка використовує метод `sort` для сортування масиву об'єктів за допомогою певного ключа.

/**
 * Функція `sortByKey` сортує вхідний масив об'єктів за допомогою методу `sort` та заданого ключа.
 *  arr - Вхідний масив об'єктів.
 * Повертає:  Ключ, за яким потрібно сортувати об'єкти.
 * Повертає: Відсортований масив об'єктів.
 */
function sortByKey(arr, key) {
  //   function methodFunc(a, b) {
  let newArr = arr.sort((a, b) => {
    // Використовуємо метод `sort` передаємо в нього два аргументи a та b, для сортування масиву об'єктів за заданим ключем
    if (a[key] < b[key]) {
      return -1 // якщо a[key] < b[key] повертаємо -1
    } else if (a[key] > b[key]) {
      return 1 // якщо a[key] > b[key] повертаємо 1
    } else {
      return 0 // інакше повертаємо 0
    }
  })
  return newArr // Повертаємо відсортований масив об'єктів
}

console.log('Завдання: 10 ==============================')

let unsortedArray = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Mike', age: 20 },
]
console.log(sortByKey(unsortedArray, 'age'))
// Виведе:
// [
//   { name: 'Mike', age: 20 },
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 30 }
// ]

// Завдання: 11

/**
 * Функція `customEvery` перевіряє, чи всі елементи масиву задовольняють заданому умову за допомогою методу `every`.
 *  arr - Вхідний масив, який буде перевірятись.
 * condition - Функція-умова, яка буде застосовуватись до кожного елементу масиву.
 *Повертає: Результат перевірки.
 */
function customEvery(arr, condition) {
  if (
    Array.isArray(arr) === false ||
    typeof condition !== 'function'
  ) {
    // Перевірка вхідних параметрів
    // якщо arr не масив повертаємо false
    return false // якщо condition не function повертаємо false
  } else {
    let result = arr.every(condition) // Використання методу `every` для перевірки умови для кожного елементу масиву
    return result // Повернення результату перевірки
  }
}

const numbers = [2, 4, 6, 8, 10]

console.log('Завдання: 11 ==============================')
console.log(customEvery(numbers, (num) => num % 2 === 0)) // Виведе true

// Завдання: 12

/**
 * Функція `customFill` заповнює вказаний діапазон елементів масиву заданою значенням за допомогою методу `fill`.
 *  arr - Вхідний масив, який буде заповнюватись.
 * value - Значення, яким будуть заповнені елементи масиву.
 *  start - Початковий індекс для заповнення (включно).
 *  end - Кінцевий індекс для заповнення (не включаючи).
 * Повертає: Заповнений масив.
 */
function customFill(
  arr,
  value,
  start = 0,
  end = arr.length,
) {
  // Перевірка вхідних параметрів
  if (
    Array.isArray(arr) === false || // якщо arr не масив повертаємо false
    start < 0 ||
    start >= arr.length ||
    end < 0 ||
    end > arr.length
  ) {
    // якщо start та end не входять в діапазон від 0 до довжини масиву arr повертаємо false
    return false
  } else {
    const newArr = arr.fill(value, start, end) // Використання методу `fill` для заповнення вказаного діапазону елементів масиву заданим значенням
    return newArr // Повернення заповненого масиву
  }
}

// Приклад використання функції customFill
console.log('Завдання: 12 ==============================')
console.log(customFill([1, 2, 3, 4, 5], 0, 1, 4)) // Виведе [ 1, 0, 0, 0, 5 ]

// Завдання: 13

/**
 * Функція `customShift` видаляє перший елемент з масиву за допомогою методу `shift`.
 * arr - Вхідний масив, з якого буде видалено перший елемент.
 * Повертає - Видалений елемент та оновлений масив або undefined, якщо масив порожній.
 */
function customShift(arr) {
  if (
    Array.isArray(arr) === false || // перевірка на масив,якщо ні повертаємо undefined
    (arr.length && arr.length === 0)
  ) {
    return undefined // перевірка чи масив не пустий,якщо так повертаємо undefined
  } else {
    const shiftedElement = arr.shift() // видаляємо перший елемент та записуємо його в змінну shiftedElement
    return { shiftedElement, arr } // повертаємо об'єкт { shiftedElement, arr }
  }
}

// Приклад використання функції customShift

console.log('Завдання: 13 ==============================')

console.log(customShift([1, 2, 3, 4, 5])) // Виведе { shiftedElement: 1, arr: [ 2, 3, 4, 5 ] }

// Завдання: 14

/**
 * Функція `customUnshift` додає один або більше елементів на початок масиву за допомогою методу `unshift`.
 *  arr - Вхідний масив, до якого будуть додані елементи.
 *  elements - Елементи, які будуть додані на початок масиву.
 *  Нова довжина масиву після додавання елементів.
 */
function customUnshift(arr, ...elements) {
  if (Array.isArray(arr) === true) {
    // Перевіряємо, чи вхідний параметр є масивом
    const initialLength = arr.length // Зберігаємо початкову довжину масиву в змінну initialLength
    let newLength = 0
    // for (let i = arr.length - 1; i >= 0; i--) {
    newLength = arr.unshift(...elements) // Додаємо елементи на початок масиву за допомогою методу `unshift` та циклу for, початкове значення лічильника на 1 менше ніж довжина масива,
    // при кожній ітерації лічильник зменшуємо на 1 та продовжуємо поки лічильник більше, або дорівнює нулю
    // Отримуємо нову довжину масиву
    // }
    return { initialLength, newLength, arr } // повертаємо об'єкт {initialLength, newLength, arr }
  } else {
    return `${arr} should be array`
  }

  // Рішення викладача:
  //   if (!Array.isArray(arr)) {
  //     return
  //   }
  //   const initialLength = arr.length
  //   for (let i = elements.length - 1; i >= 0; i--) {
  //     arr.unshift(elements[i])
  //   }
  //   const newLength = arr.length
  //   return { initialLength, newLength, arr }
}

console.log('Завдання: 14 ==============================')

console.log(customUnshift([2, 3, 4, 5], 1, 0)) // Виведе { initialLength: 4, newLength: 6, arr: [ 1, 0, 2, 3, 4, 5 ] }

//--------------------------------------

// Завдання: 15

/**
 * Функція `customSome` перевіряє, чи хоча б один елемент масиву задовольняє задану умову за допомогою методу `some`.
 *  arr - Вхідний масив, який буде перевірятись.
 * condition - Функція-умова, яка буде застосовуватись до кожного елементу масиву.
 * Повертає: Результат перевірки.
 */
function customSome(arr, condition) {
  if (
    Array.isArray(arr) === true &&
    typeof condition === 'function'
  ) {
    // Перевіряємо, чи вхідний параметр є масивом якщо ні повертаємо false
    // Перевіряємо, чи condition є функцією  якщо ні повертаємо false
    let result = arr.some(condition) // Використовуємо метод `some` для перевірки умови хоча б для одного елементу масиву
    return result // Повертаємо результат перевірки
  } else {
    return false
  }
}
console.log('Завдання: 15 ==============================')

const isEven = (number) => number % 2 === 0
console.log(customSome([1, 2, 3, 4, 5], isEven))
// Виведе true

// Завдання: 16

/**

Функція customAt повертає елемент масиву за заданим індексом.
 arr - Вхідний масив, з якого буде отриманий елемент.
 index - Індекс елементу, який потрібно отримати.
Повертаємо- Елемент масиву або undefined, якщо індекс виходить за межі масиву.
*/
function customAt(arr, index) {
  if (
    Array.isArray(arr) &&
    index >= 0 &&
    index < arr.length
  ) {
    // Перевіряємо, чи вхідний параметр є масивом якщо ні повертаємо undefined
    //****************!!!!!!! Помилка в умові:**************************************************************!!!!!!!
    // Перевіряємо, чи індекс виходить за межі масиву якщо ні повертаємо undefined //!!!!!!! Помилка в умові:!!!!!!!
    //*********************************Помилка в умові:!!!!!!!****************************************************
    let elem = arr.at(index) // Отримуємо елемент масиву за заданим індексом
    if (typeof elem === 'string') {
      // перевіремо якого типу елемент ми отримали,якщо рядок виведом в консоль -Елемент є рядком,числом - Елемент є числом, об`єктом -Елемент є обєктом
      console.log(`Елемент є рядком`)
      return elem
    } else if (typeof elem === 'number') {
      console.log(`Елемент є числом`)
      return elem
    } else if (typeof elem === 'object') {
      console.log(`Елемент є обєктом`)
      return elem
    } else {
      console.log(
        `Вибачте, але ця функція не змогла визначити тип елементу`,
      )
      return elem
    }
  } else {
    return undefined
  }
}

console.log('Завдання: 16 ==============================')
console.log(customAt([1, 2, 3, 4, 5], 2))
// Виведе
// Елемент є числом.
// 3

//--------------------------------------

// Завдання 17

/**
  
  Функція customIncludes перевіряє, чи масив містить заданий елемент за допомогою методу includes.
   arr - Вхідний масив, який буде перевірятись.
   element - Елемент, наявність якого перевіряється.
  Повертає: Результат перевірки.
  */
function customIncludes(arr, element) {
  if (Array.isArray(arr)) {
    // Перевіряємо, чи вхідний параметр є масивом
    if (arr.includes(element)) {
      // Використовуємо метод includes для перевірки наявності елемента в масиві
      const filteredArr = arr.filter(
        (value) => value === element,
      ) // За допомогою методу filter перевіряємо скільки разів в масиві зустрічається елемент та виводимо число в консоль
      let result = filteredArr.length
      console.log(result)
      //************************************** !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*************************** */
      // не зовсім зрозуміло чому результат повинен бути true,  але якщо такт треба, то ось костиль:
      //*********************************************************************************************************************** */
      return result > 0 //Повертаємо результат
    } else {
      return `Масив ${arr} не містить елементу ${element}`
    }
  } else {
    return `Це не масив`
  }
}

console.log('Завдання: 17 ==============================')
console.log(
  customIncludes(
    ['apple', 'banana', 'orange', 'apple'],
    'banana',
  ),
)
// Виведе
// 1
// true
