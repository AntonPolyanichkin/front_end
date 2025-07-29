"use strict";
let mediaDynamicBurger = window.matchMedia("(max-width: 950.98px)");
let mediaHeaderActionBtn = window.matchMedia("(max-width: 550.98px)");
let swiperAppear = mediaHeaderActionBtn;
const burgerMenu = document.querySelector(".button-burger");
const actionButton = document.querySelector(".header__action-button");
const headerMenu = document.querySelector(".menu-header");
const menuWrapper = document.querySelector(".menu-header__list-wrapper");
const headerWrapper = document.querySelector(".header__contentent-wrapper");
function dynamicAdap(adaptingFunc, media) {
  media.addEventListener("change", () => {
    adaptingFunc(media);
  });
}
function moveBurgerButton(mql) {
  if (mql.matches) {
    if (burgerMenu.parentElement !== actionButton) {
      actionButton.insertAdjacentElement("beforeend", burgerMenu);
    }
  } else {
    if (burgerMenu.parentElement !== headerMenu) {
      headerMenu.insertAdjacentElement("beforeend", burgerMenu);
    }
  }
  burgerMenu.classList.toggle("button-burger--changePos", mql.matches);
}
function moveActionBtn(mql) {
  if (mql.matches) {
    if (actionButton.parentElement !== menuWrapper) {
      menuWrapper.insertAdjacentElement("beforeend", actionButton);
    }
  } else {
    if (actionButton.parentElement !== headerWrapper) {
      headerWrapper.insertAdjacentElement("beforeend", actionButton);
    }
  }
  if (burgerMenu.parentElement === actionButton) {
    headerWrapper.insertAdjacentElement("beforeend", burgerMenu);
  }
  actionButton.classList.toggle("button-burger--changePos", mql.matches);
}
dynamicAdap(moveBurgerButton, mediaDynamicBurger);
moveBurgerButton(mediaDynamicBurger);
dynamicAdap(moveActionBtn, mediaHeaderActionBtn);
moveActionBtn(mediaHeaderActionBtn);
const body = document.body;
document.body.addEventListener("click", (e) => {
  if (e.target === burgerMenu) {
    body.classList.toggle("active");
    body.classList.toggle("scroll-lock");
  }
});

// const swiper = document.querySelector(".swiper");
// let createSwiper
// function showSwiper(media) {
//   if (media.matches) {
//     swiper.classList.add("swiper-active");
// 	 createSwiper = new Swiper(".swiper", {
// 		slidesPerView: 1,
// 		speed: 400,
// 		spaceBetween: 20,
// 		navigation: {
// 			nextEl: '.swiper-button-next',
// 			prevEl: '.swiper-button-prev',
// 		 }
// 	 });
//   }
//   else{
// 	swiper.classList.remove("swiper-active");
//   }
// }
// dynamicAdap(showSwiper, swiperAppear);

