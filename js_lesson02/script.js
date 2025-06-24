// Задача №1
// Що потрапить в консоль?
// let someVar = 0;
// ++someVar;
// if (someVar) {
// console.log(someVar);
// }
// У консоль потрапить 1, тому що інкремент ++someVar збільшує значення змінної до 1, і ця одиниця передається в if,
// де перетворюється в true. Навіть якби ми використали постфіксний інкремент (someVar++), результат був би той самий,
// оскільки результат інкременту не використовується в жодному виразі до if.
//--------------------------------------------------------------------------------------------------------------
// Задача №2
// За допомогою циклу FOR виведіть в консоль 10 рядків:
// Пункт №1
// Пункт №2
// і т.д.
// for (let i = 1; i <= 10; i++) {
// 	console.log(`Пункт №${i}`);
// }
//--------------------------------------------------------------------------------------------------------------
// Задача №3
// Що потрапить в консоль ?
// if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
// console.log('000');
// }
//Умова не буде виконана false || false && true || false; false && true => false
//--------------------------------------------------------------------------------------------------------------
// Задача №4
// Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
// Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
// Функція не має повертати NaN, Infinite або помилку

// function validationFunc(someArgument) {
//   let validResult = Number(someArgument);
//   if (validResult !== validResult || validResult === Infinity || validResult === -Infinity ) {
//     return 0;
//   }
//   else{
// 	return validResult
//   }
// }

// function getDivisionNumbers(a = 0, b = 0, validFunc) {
// 	let firstNum = validFunc(a)
// 	let secondNum = validFunc(b)
// 	let result = firstNum / secondNum
// 	if(result === Infinity || result === -Infinity){
// 		throw new Error ("Ай, ай, ай, не треба ділити на нуль") //програма "впала", це погано, я знаю, зроблено навмисно
// 	}
// 	else{
// 		return result
// 	}
// }
// console.log(getDivisionNumbers( "hello",  2, validationFunc));
// console.log(getDivisionNumbers( undefined,  2, validationFunc));
// console.log(getDivisionNumbers( 10,  2, validationFunc));
// console.log(getDivisionNumbers( 5,  0, validationFunc));

// function getDivisionNumbers(a = 0, b = 0) {
// 	let result = a / b
// 	if (!isFinite(result) || Number.isNaN(result)) {
// 		return "Ви ввели не коректні значення";
// 	}
// 	else{
// 		return `Результат ділення : ${result}`;
// 	}
// }
// console.log(getDivisionNumbers("hello", 2));
// console.log(getDivisionNumbers(undefined, 2));
// console.log(getDivisionNumbers(10, 2));
// console.log(getDivisionNumbers(5,0));
//--------------------------------------------------------------------------------------------------------------
// Задача №5
// Створіть масив даних - 5 елементів, один з яких число 10
// Обробіть масив за допомогою методу перебору
// Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль
// const myArr = [5,2,3,10,4]
//  myArr.forEach((el,index) =>{
// if(el === 10){
// 	console.log(`${el} за індксом: ${index}`);
// }
// })

