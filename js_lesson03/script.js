// Задача №1
// Отримати в константу елемент <body>
// function getBodyEl() {
// 	const bodyElement = document.body
// 	return bodyElement
// }
// const bodyElement = document.body
// -------- Трохи безглуздий варіант
// function getBodyEl() {
//   const bodyElement = document.body;
//   if (bodyElement) {
//     return bodyElement;
//   }
// }
// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)
// function appendList(listElementQuantity = 1) {
//   const createList = document.createElement(`ul`);
//   for (let i = 0; i < listElementQuantity; i++) {
//     const listElement = document.createElement(`li`);
//     listElement.textContent = `я ${i + 1} елемент`;
//     createList.append(listElement);
//   }
//   return createList;
// }
// document.body.append(appendList(10));
// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.
// const body = document.body;
// body.classList.add(`loaded`)
// function addGreenTextCheckedClass(element, className) {
//   if (element.classList.contains(`${className}`)) {
//     element.style.color = `green`;
//   }
//   else{
// 	console.log('Нема класу, текст не стане Шреком');
//   }
// }
// addGreenTextCheckedClass(body, `loaded`)
// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active,
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".
// const itemsList = document.querySelectorAll(".item");
// function getElementProcessing(itemsList) {
// for (let i = 0; i < itemsList.length; i++) {
// 	itemsList[i].classList.add(`active`)
// 	itemsList[i].textContent = `Я елемент номер: ${i+1}`
// }
// Або версія цікавіше (цикл завжди буде оптимальніше, але звісно писати менше через методи обробки масивів)
//   itemsList.forEach((el, index) => {
//     el.classList.add(`active`);
//     el.textContent = `Я елемент номер: ${index + 1}`;
//   });
// }
// getElementProcessing(itemsList);

// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки
// const myButton = document.querySelector(".button");
// function showElement(element) {
//   if (element) {
//     element.scrollIntoView({
//       block:"center",
//       inline:"nearest",
// 		behavior:"smooth"
//     });
//   }
// }
// showElement(myButton)
// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний
// const myLink = document.querySelector(`.link`)
// myLink.dataset.num = "100"

// function checkDataValue(element,elementAttr) {
// 	if (element && element.hasAttribute(`${elementAttr}`)) {
// 		let elementAttrValue = parseFloat(element.getAttribute(elementAttr))
// 		if(elementAttrValue < 200){
// 			element.style.color = `red`
// 		}
// 	}
// }
// checkDataValue(myLink ,'data-num')
