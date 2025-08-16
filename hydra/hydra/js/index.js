"use strict";
window.addEventListener("load", () => {
  let mediaDynamicBurger = window.matchMedia("(max-width: 950.98px)");
  let mediaHeaderActionBtn = window.matchMedia("(max-width: 550.98px)");
  let sliderActivated = window.matchMedia("(max-width: 550.98px)");
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
        let curIndex = 0;
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

          if (mql) {
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
            curIndex++;
            updateSliderPosition();
            if (prevSliderBtn.classList.contains("disable")) {
              prevSliderBtn.classList.remove("disable");
            }
          }
          if (curIndex === maxIndex) {
            nextSliderBtn.classList.add("disable");
          }
        });
        prevSliderBtn.addEventListener("click", () => {
          if (curIndex > 0) {
            curIndex--;
            updateSliderPosition();
            if (nextSliderBtn.classList.contains("disable")) {
              nextSliderBtn.classList.remove("disable");
            }
          }
          if (curIndex - 1 < 0) {
            prevSliderBtn.classList.add("disable");
          }
        });
        window.addEventListener("resize", updateSliderPosition);
      }
    }
  }
  createSlider(sliderActivated);
  dynamicAdap(createSlider, sliderActivated);

//   function sliderHardware() {
//     const hardwareSlider = new Swiper(".content-hardware", {
//       slidesPerView: "auto", // скільки влізе по ширині
//       spaceBetween: 20, // відстань між картинками
//       loop: true, // зациклення
//       speed: 6000, // чим більше число → тим плавніше і повільніше
//       autoplay: {
//         delay: 0, // без пауз
//         disableOnInteraction: false,
//       },
//       freeMode: true, // вільний рух
//       freeModeMomentum: false, // без інерції/ривків
//     });
//   }
//   sliderHardware();
});
