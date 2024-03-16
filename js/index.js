//Создать массив «Список покупок». Каждый элемент массива
//является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
//1. Вывод всего списка на экран таким образом, чтобы сначала
//шли некупленные продукты, а потом – купленные.
//2. Добавление покупки в список. Учтите, что при добавлении
//покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке,
//а не добавлять новую.
//3. Покупка продукта. Функция принимает название продукта
//и отмечает его как купленный.

// let shoppingList = [
//   { name: "Milk", quantity: 1, bought: false },
//   { name: "Bread", quantity: 2, bought: false },
//   { name: "Eggs", quantity: 12, bought: true },
//   { name: "Sugar", quantity: 1, bought: false },
// ];

// function printShoppingList(shoppingList) {
//   console.log("Product List: ");
//   shoppingList.forEach((item) =>
//     console.log(
//       `${item.name} - ${item.quantity} шт (${
//         item.bought ? "куплено" : "не куплено"
//       })`
//     )
//   );
// }

// function addPurchaseToList(shoppingList, productName, quantity) {
//   const index = shoppingList.findIndex((item) => item.name === productName);
//   if (index !== -1) {
//     shoppingList[index].quantity += quantity;
//   } else {
//     shoppingList.push({ name: productName, quantity, bought: false });
//   }
// }

// function buyProduct(shoppingList, productName) {
//   const item = shoppingList.find((item) => item.name === productName);
//   if (item) item.bought = true;
// }

// printShoppingList(shoppingList);

// addPurchaseToList(shoppingList, "Milk", 2);
// addPurchaseToList(shoppingList, "Tomatoes", 2);
// printShoppingList(shoppingList);

// buyProduct(shoppingList, "Bread");
// buyProduct(shoppingList, "Butter");
// printShoppingList(shoppingList)

//Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за
//единицу товара. Написать следующие функции.
//1. Распечатка чека на экран.
//2. Подсчет общей суммы покупки.
//3. Получение самой дорогой покупки в чеке.
//4. Подсчет средней стоимости одного товара в чеке.

// let receipt = [
//   { name: "Milk", quantity: 1, price: 50 },
//   { name: "Bread", quantity: 2, price: 30 },
//   { name: "Eggs", quantity: 12, price: 5 },
//   { name: "Sugar", quantity: 1, price: 40 },
// ];

// function printReceipt(receipt) {
//   console.log("Receipt: ");
//   for (const item of receipt) {
//     console.log(
//       `${item.name} - ${item.quantity} шт x ${item.price} = ${
//         item.quantity * item.price
//       } `
//     );
//   }
// }

// function getTotal(receipt) {
//   let total = 0;
//   for (const item of receipt) {
//     total += item.quantity * item.price;
//   }
//   return total;
// }

// function getMostExpensivePurchase(receipt) {
//   if (receipt.length === 0) return null;

//   let maxPrice = receipt[0].price;
//   let mostExpensivePurchase = receipt[0];

//   for (let i = 1; i < receipt.length; i += 1) {
//     const item = receipt[i];
//     if (item.price > maxPrice) {
//       maxPrice = item.price;
//       mostExpensivePurchase = item;
//     }
//   }
//   return mostExpensivePurchase;
// }

// function getAveragePrice(receipt) {
//   let totalQuantity = 0;
//   let totalPrice = 0;
//   for (const item of receipt) {
//     totalQuantity += item.quantity;
//     totalPrice += item.quantity * item.price;
//   }
//   return totalPrice / totalQuantity;
// }

// printReceipt(receipt);
// console.log(`Total Purchase Sum:${getTotal(receipt)} `);
// console.log(`Most Expensive :${getMostExpensivePurchase(receipt).name} `);
// console.log(`Average Item Price:${getAveragePrice(receipt)} `);

//Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
//Написать функцию, которая принимает массив стилей и
//текст, и выводит этот текст с помощью document.write() в тегах
//<p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

// let stylesArray = [
//   { name: "color", value: "black" },
//   { name: "font-size", value: "16px" },
//   { name: "text-align", value: "center" },
//   { name: "text-decoration", value: "none" },
// ];

// function applyStyles(styles, text) {
//   let openingTag = '<p style ="';
//   let styleString = "";
//   for (let i = 0; i < styles.length; i += 1) {
//     styleString += styles[i].name + ":" + styles[i].value + ";";
//   }
//   openingTag += styleString + '">';
//   document.write(openingTag + text + "</p>");
// }

// applyStyles(stylesArray, "Текст для примера");

//Cоздать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и
//названия факультета, для которого она предназначена.
//Написать несколько функций для работы с ним.
//1. Вывод на экран всех аудиторий.
//2. Вывод на экран аудиторий для указанного факультета.
//3. Вывод на экран только тех аудиторий, которые подходят для
//переданной группы. Объект-группа состоит из названия,
//количества студентов и названия факультета.
//4. Функция сортировки аудиторий по количеству мест.
//5. Функция сортировки аудиторий по названию (по алфавиту).

// const auditoriums = [
//   { name: "Auditorium 1", seats: 15, faculty: "Engineering" },
//   { name: "Auditorium 2", seats: 20, faculty: "Engineering" },
//   { name: "Auditorium 3", seats: 12, faculty: "Science" },
//   { name: "Auditorium 4", seats: 18, faculty: "Science" },
//   { name: "Auditorium 5", seats: 10, faculty: "Arts" },
//   { name: "Auditorium 6", seats: 17, faculty: "Arts" },
// ];

// function displayAllAuditoriums() {
//   console.log("All Auditoriums");
//   auditoriums.forEach((auditorium) => {
//     console.log(
//       `${auditorium.name}, Seats: ${auditorium.seats}, Faculty: ${auditorium.faculty}`
//     );
//   });
// }

// function displayAuditoriumsForFaculty(faculty) {
//   console.log(`Auditoriums for ${faculty}:`);
//   auditoriums.forEach((auditorium) => {
//     if (auditorium.faculty === faculty) {
//       console.log(`${auditorium.name}, Seats: ${auditorium.seats}`);
//     }
//   });
// }
