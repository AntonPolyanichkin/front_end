// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас
//-------------Делегування-------------
// const element = document.querySelector(".item")
// document.addEventListener("click",addClss)
// function addClss(e){
// 	const currentElement = e.target
// 	if(currentElement.closest(".item")){
// 		currentElement.classList.toggle("active")
// 	}
// }
//-------------Обробник на кожний елемент, що небажано, але для практики-------------
// const elements = document.querySelectorAll(".item");
// function addClassEvent(elementCollection, classAdd) {
//   elementCollection.forEach(el => {
//     el.addEventListener("click", () => {
//       el.classList.toggle(classAdd);
//     });
//   });
// }
// addClassEvent(elements, "active");
// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.
// window.addEventListener("DOMContentLoaded",pageLoaded)
// function pageLoaded(e) {
// 	document.documentElement.classList.add('visible')
// }
// Задача №3
// Дано в html: header main footer
// При наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.
// const pageHeader = document.querySelector(".header")
// const pageFooter = document.querySelector(".footer");
// const footerStyle = getComputedStyle(pageFooter)
// const firstFooterStyle = footerStyle.backgroundColor
// pageHeader.addEventListener("mouseenter", addFooterClass);
// pageHeader.addEventListener("mouseleave", removeFooterClass);
// function addFooterClass(e) {
//   const currentElement = e.target;
//   const searchHeader = currentElement.classList.contains("header");
//   if (searchHeader) {
//     pageFooter.style.backgroundColor = "lightgreen"
//   }
// }
// function removeFooterClass(e) {
// 	const currentElement = e.target;
//   const searchHeader = currentElement.classList.contains("header");
//   if (searchHeader) {
//     pageFooter.style.backgroundColor  = firstFooterStyle
//   }
// }
// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.
// const element = document.querySelector(".item");
// function showStopWatch(trimming = 1000, numberQuantity = 1, item) {
//   item.setAttribute("data-triming", trimming);
//   item.setAttribute("data-number-quantity", numberQuantity);
//   let counter = 1;
//   let timer = setInterval(() => {
//     item.innerText = `${counter}`;
//     counter++;
//   }, trimming);
//   setTimeout(() => {
//     clearInterval(timer);
//   }, numberQuantity * 1000);
// }
// const blockObserve = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       showStopWatch(1000, 5, entry.target);
//       observer.unobserve(entry.target);
//     }
//   });
// });
// blockObserve.observe(element);
