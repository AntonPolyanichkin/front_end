"use strict";
window.addEventListener("load", () => {
  let mediaDynamicBurger = window.matchMedia("(max-width: 950.98px)");
  let mediaHeaderActionBtn = window.matchMedia("(max-width: 550.98px)");
  let sliderActivated = window.matchMedia("(max-width: 550.98px)");
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
        headerMenu.insertAdjacentElement("afterend", actionButton);
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
  function getBurgerActive() {
    const body = document.body;
    document.body.addEventListener("click", (e) => {
      if (e.target === burgerMenu) {
        body.classList.toggle("active");
        body.classList.toggle("scroll-lock");
      }
    });
  }
  getBurgerActive();

  function createSlider(mql) {
    if (mql.matches) {
      const sliderWrapper = document.querySelector(".contacts-information__slider-wrapper");
      const sliderElements = document.querySelectorAll(".element-information");
      const nextSliderBtn = document.querySelector(".contacts-information__next-btn");
      const prevSliderBtn = document.querySelector(".contacts-information__prev-btn");
      // Зібрав необхідні елементи
      if (!sliderWrapper || !sliderElements.length || !nextSliderBtn || !prevSliderBtn) {
        return;
        //Якщо хоч один з елементів відсутній - покинути функцію
      } else {
        console.log("active");
        nextSliderBtn.classList.remove("disable");
        let curIndex = 0;
        function sliderReset() {
          sliderElements[0].scrollIntoView({
            behavior: "smooth",
            inline: "start",
          });
        }
        sliderReset();
        function getSlideWidthWithGap() {
          let slideWidth = sliderElements[0].offsetWidth; // ширина одного із елементів слайдера
          let sliderWrapperStyles = window.getComputedStyle(sliderWrapper); // беремо стилі враппера
          let gap = parseFloat(sliderWrapperStyles.columnGap || sliderWrapperStyles.gap || 0);
          // через флоат беремо можливі гепи або повертаємо 0. Чому флоат, бо перетворить рядок в число, проігнорує px. Через parseInt не варіант, бо тоді виключаємо можливість дробових чисел
          return slideWidth + gap;
        }
        function getMaxIndex() {
          const wrapperWidth = sliderWrapper.getBoundingClientRect().width;
          //ширина враппера

          const slideWithGap = getSlideWidthWithGap();
          // ширина одного елемента з гепом

          const visibleSlides = Math.floor(wrapperWidth / slideWithGap);
          // скільки влізе слайдв в область видимості

          const totalSlide = sliderElements.length;
          // загальна кількість слайдів
          return Math.max(0, totalSlide - visibleSlides); //повартаємо наскільки слайдів можна зсунутись або взагалі не можна
        }
        function updateSliderPosition() {
          const windowWidth = window.innerWidth; //взяли ширину вʼюпорта
          const slideWithGap = getSlideWidthWithGap(); //отримали слайдер із урахуванням гепу
          let shift;

          if (windowWidth) {
            shift = curIndex * slideWithGap; //отримали зсув слайду
          }

          sliderWrapper.style.transform = `translateX(-${shift}px)`;
        }
        // вішаємо події на кнопки
        if (curIndex === 0) {
          prevSliderBtn.classList.add("disable");
        }
        nextSliderBtn.addEventListener("click", () => {
          const maxIndex = getMaxIndex();
          if (curIndex < maxIndex) {
            curIndex += 1;
            console.log(curIndex);
            updateSliderPosition();
            if (prevSliderBtn.classList.contains("disable")) {
              prevSliderBtn.classList.remove("disable");
            }
          }
          if (curIndex === sliderElements.length - 1) {
            nextSliderBtn.classList.add("disable");
          } else {
            nextSliderBtn.classList.remove("disable");
          }
        });
        prevSliderBtn.addEventListener("click", () => {
          if (curIndex >= 0) {
            curIndex -= 1;
            console.log(curIndex);
            updateSliderPosition();
            if (nextSliderBtn.classList.contains("disable")) {
              nextSliderBtn.classList.remove("disable");
            }
          }
          if (curIndex - 1 < 0) {
            prevSliderBtn.classList.add("disable");
          }
        });
      }
    } else {
      const sliderWrapper = document.querySelector(".contacts-information__slider-wrapper");
      sliderWrapper.style.transform = `translateX(0px)`;
    }
  }
  createSlider(sliderActivated);
  dynamicAdap(createSlider, sliderActivated);

  const joinHydraBtn = document.querySelector(".button-action__join");
  const joinHydraForm = document.querySelector(".join-hydra-form");
  const contactsHydraBtn = document.querySelector(".button-action__contacts");
  const contactsBlock = document.querySelector(".contacts-information");
  const heroSectionBuildBtn = document.querySelector(".hero-section__button");
  const footerSectionBuildBtn = document.querySelector(".social-media-footer__link");
  const mainSectionGetInTochBtn = document.querySelector(".about__link");
  const advantagesTryBtn = document.querySelectorAll(".item-cards__button");
  const linkAbout = document.querySelectorAll(".link-about");
  const linkServices = document.querySelectorAll(".link-services");
  const linkTechnologies = document.querySelectorAll(".link-technologies");
  const linkHow = document.querySelectorAll(".link-how");
  const linkJoin = document.querySelectorAll(".link-join");
  const aboutSection = document.querySelector(".about");
  const servicesSection = document.querySelector(".advantages");
  const technologiesSection = document.querySelector(".technology-hardware");
  const howToSection = document.querySelector(".build-process");
  function moveToObject(targetElement, showElement, block, inline, behavor) {
    if (!targetElement || !showElement) return;
    else {
      if (targetElement instanceof NodeList) {
        targetElement.forEach((el) => {
          el.addEventListener("click", function (e) {
            e.preventDefault();
            showElement.scrollIntoView({
              block: block,
              inline: inline,
              behavior: behavor,
            });
          });
        });
        {
        }
      } else {
        targetElement.addEventListener("click", function (e) {
          e.preventDefault();
          if (e.target && document.body.classList.contains("active")) {
            document.body.classList.remove("active");
            document.body.classList.remove("scroll-lock");
          }
          showElement.scrollIntoView({
            block: block,
            inline: inline,
            behavior: behavor,
          });
        });
      }
    }
  }
  moveToObject(joinHydraBtn, joinHydraForm, "start", "center", "smooth");
  moveToObject(heroSectionBuildBtn, joinHydraForm, "start", "center", "smooth");
  moveToObject(footerSectionBuildBtn, joinHydraForm, "start", "center", "smooth");
  moveToObject(advantagesTryBtn, joinHydraForm, "start", "center", "smooth");
  moveToObject(contactsHydraBtn, contactsBlock, "center", "center", "smooth");
  moveToObject(mainSectionGetInTochBtn, joinHydraForm, "start", "center", "smooth");
  moveToObject(linkAbout, aboutSection, "end", "center", "smooth");
  moveToObject(linkServices, servicesSection, "end", "center", "smooth");
  moveToObject(linkTechnologies, technologiesSection, "end", "center", "smooth");
  moveToObject(linkHow, howToSection, "end", "center", "smooth");
  moveToObject(linkJoin, joinHydraForm, "start", "center", "smooth");
});
