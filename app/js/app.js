document.addEventListener("DOMContentLoaded", function (event) {
  const headerIntro = document.querySelector(".header__intro");
  const navInner = document.querySelector(".header__intro__nav");
  const burgerBtn = document.querySelector(".header__burger");
  const navItems = document.querySelectorAll(".header__nav__item");
  const mask = document.querySelector(".mask");
  const headerNav = document.querySelector("#headerNav");
  const windowH = window.innerHeight;
  const body = document.querySelector("body");
  const searchInput = document.querySelector("#search");
  const searchHints = document.querySelector(".search__hints");
  const openSearch = document.querySelector("#openSearch");
  const headerIntroCenter = document.querySelector(".header__intro__center");
  const socialBtn = document.querySelector(".social__btn");
  const social = document.querySelector(".social");
  const filterBox = document.querySelector(".whole__left");
  const headerBtnAbsolute = document.querySelector(".header__burger--absolute");

  // Закрыть все вкладки
  mask.addEventListener("click", () => {
    body.classList.remove("fixed");
    headerIntroCenter.classList.remove("header__intro__center--active");
    burgerBtn.classList.remove("header__burger--active");
    navInner.classList.remove("header__intro__nav--active");

    if (social) {
      social.classList.remove("social--active");
      socialBtn.classList.remove("social__btn--active");
    }

    if (filterBox) {
      filterBox.classList.remove("whole__left--bonus");
    }

    mask.classList.remove("mask--active");
  });

  // Меню
  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("header__burger--active");
    navInner.classList.toggle("header__intro__nav--active");

    if (window.innerWidth < 1200) {
      mask.classList.add("mask--active");
      body.classList.add("fixed");
    }
  });

  const mobileMenuBtn = document.querySelector("#mobileMenuBtn");
  mobileMenuBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    navInner.classList.toggle("header__intro__nav--active");

    if (window.innerWidth < 1200) {
      mask.classList.add("mask--active");
      body.classList.add("fixed");
    }
  });

  const navClose = document.querySelector("#navClose");
  navClose.addEventListener("click", () => {
    navInner.classList.remove("header__intro__nav--active");
    burgerBtn.classList.remove("header__burger--active");
    mask.classList.remove("mask--active");
    body.classList.remove("fixed");
  });

  // Копирование промокода
  const codeList = document.querySelectorAll(".best__table__promo__code");
  codeList.forEach((item) => {
    item.addEventListener("click", (evt) => {
      evt.preventDefault();
      const copyText = item.textContent.trim();

      const area = document.createElement("textarea");

      document.body.appendChild(area);
      area.value = copyText;
      area.select();
      document.execCommand("copy");
      document.body.removeChild(area);
    });
  });

  // Навигация
  function maskOpen() {
    mask.classList.add("mask--active");
  }

  function maskHide() {
    mask.classList.remove("mask--active");
  }

  // document.addEventListener("scroll", () => {
  //   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  //   if (scrollTop > windowH) {
  //     headerNav.classList.add("header__nav--scroll");

  //     navItems.forEach((navItem) => {
  //       navItem.addEventListener("mouseover", maskOpen);

  //       navItem.addEventListener("mouseout", maskHide);
  //     });
  //   } else {
  //     headerNav.classList.remove("header__nav--scroll");
  //     navInner.classList.remove("header__intro__nav--fixed");
  //     headerBtnAbsolute.classList.remove("header__burger--active");

  //     navItems.forEach((navItem) => {
  //       navItem.removeEventListener("mouseover", maskOpen);

  //       navItem.removeEventListener("mouseout", maskHide);
  //     });
  //   }
  // });

  // Вкладки в футере
  const footerTitles = document.querySelectorAll(".footer__title");
  if (footerTitles) {
    footerTitles.forEach((footerTitle) => {
      footerTitle.addEventListener("click", () => {
        const parentFooterTitle = footerTitle.parentNode;

        parentFooterTitle.classList.toggle("footer__col--active");
      });
    });
  }

  // Мобильное меню
  const headerNavItemsWrapper = document.querySelectorAll(
    ".header__intro__nav__item__wrapper"
  );
  if (headerNavItemsWrapper) {
    headerNavItemsWrapper.forEach((headerNavItemWrapper) => {
      headerNavItemWrapper.addEventListener("click", () => {
        const cuurNavParent = headerNavItemWrapper.parentNode;
        cuurNavParent.classList.toggle("header__intro__nav__item--active");
      });
    });
  }

  // Открыть поиск
  if (openSearch) {
    openSearch.addEventListener("click", (evt) => {
      evt.preventDefault();
      headerIntroCenter.classList.add("header__intro__center--active");
      mask.classList.add("mask--active");
      body.classList.add("fixed");
    });
  }

  // Подсказки в поиске
  if (searchInput) {
    searchInput.addEventListener("input", (evt) => {
      evt.preventDefault();
      searchHints.classList.add("search__hints--active");

      if (!searchInput.value) {
        searchHints.classList.remove("search__hints--active");
      }
    });
  }

  function findAncestor(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
  }

  // Табы в таблице рейтинга
  const ozorBtns = document.querySelectorAll(".obzor__open");
  if (ozorBtns) {
    ozorBtns.forEach((ozorBtn) => {
      ozorBtn.addEventListener("click", () => {
        const currParentLine = findAncestor(ozorBtn, "best__table__line");
        currParentLine.classList.toggle("best__table__line--active");
      });
    });
  }

  // Slider
  if (document.querySelector(".experts__line")) {
    new Glider(document.querySelector(".experts__line"), {
      slidesToShow: 4,
      slidesToScroll: 4,
      draggable: true,
      dots: false,
      arrows: {
        prev: ".experts__btn--prev",
        next: ".experts__btn--next",
      },
    });
  }

  // News
  // Соцсети
  if (socialBtn) {
    socialBtn.addEventListener("click", (evt) => {
      evt.preventDefault();
      social.classList.toggle("social--active");
      socialBtn.classList.toggle("social__btn--active");

      if (window.innerWidth < 1200) {
        mask.classList.toggle("mask--active");
      }
    });
  }

  // Табы в фильтре
  const filterLinesWrapper = document.querySelectorAll(
    ".filter__line__wrapper"
  );
  if (filterLinesWrapper) {
    filterLinesWrapper.forEach((filterLine) => {
      filterLine.addEventListener("click", () => {
        filterLine.parentNode.classList.toggle("filter__line--active");
      });
    });
  }

  // Закрыть фильтр
  const closeFilter = document.querySelector("#closeFilter");

  if (closeFilter) {
    closeFilter.addEventListener("click", () => {
      filterBox.classList.remove("whole__left--bonus");
      mask.classList.remove("mask--active");
      body.classList.remove("fixed");
    });
  }

  // Открыть фильтр
  const openFilter = document.querySelector("#openFilter");
  if (openFilter) {
    openFilter.addEventListener("click", () => {
      filterBox.classList.add("whole__left--bonus");
      mask.classList.add("mask--active");
      body.classList.add("fixed");
    });
  }

  // Progonoz
  if (document.querySelector("#prognozSlider")) {
    let prognozSlider = new Glider(document.querySelector("#prognozSlider"), {
      slidesToShow: 7,
      slidesToScroll: 1,
      draggable: true,
      dots: false,
      arrows: {
        prev: ".prognoz__btn--prev",
        next: ".prognoz__btn--next",
      },
    });

    if (window.innerWidth < 1199) {
      prognozSlider.destroy();
    }
  }

  // Переключение вкладок
  const prognozPannelItems = document.querySelectorAll(
    ".prognoz__pannel__item"
  );
  const prognozSeries = document.querySelectorAll(".prognoz__series");

  function resetPrognoz() {
    prognozPannelItems.forEach((prognozPannelItem) => {
      prognozPannelItem.classList.remove("prognoz__pannel__item--current");
    });

    prognozSeries.forEach((prognozSerieslItem) => {
      prognozSerieslItem.classList.remove("prognoz__series--active");
    });
  }

  if (prognozPannelItems) {
    prognozPannelItems.forEach((prognozPannelItem) => {
      prognozPannelItem.addEventListener("click", (evt) => {
        evt.preventDefault();
        resetPrognoz();
        prognozPannelItem.classList.add("prognoz__pannel__item--current");
        const currDataTab = prognozPannelItem.dataset.tab;
        const currSeriesSection = document.getElementById(currDataTab);
        currSeriesSection.classList.add("prognoz__series--active");
      });
    });
  }

  // Books
  // Переключение вкладок
  const booksPannelItems = document.querySelectorAll(".books__pannel__item");
  const booksSeries = document.querySelectorAll(".books__body");

  function resetbooks() {
    booksPannelItems.forEach((booksPannelItem) => {
      booksPannelItem.classList.remove("books__pannel__item--active");
    });

    booksSeries.forEach((booksSerieslItem) => {
      booksSerieslItem.classList.remove("books__body--active");
    });
  }

  if (booksPannelItems) {
    booksPannelItems.forEach((booksPannelItem) => {
      booksPannelItem.addEventListener("click", (evt) => {
        evt.preventDefault();
        resetbooks();
        booksPannelItem.classList.add("books__pannel__item--active");
        const currDataTab = booksPannelItem.dataset.books;
        const currSeriesSection = document.getElementById(currDataTab);
        currSeriesSection.classList.add("books__body--active");
      });
    });
  }

  // Открыть карточки
  const booksOpenBtns = document.querySelectorAll(".books__app__open");
  if (booksOpenBtns) {
    booksOpenBtns.forEach((booksOpenBtn) => {
      booksOpenBtn.addEventListener("click", () => {
        const currBookLine = findAncestor(booksOpenBtn, "books__app");
        currBookLine.classList.toggle("books__app--active");
      });
    });
  }

  // Читать полностью
  const readMoreList = document.querySelectorAll(".best__link__inner");
  if (readMoreList) {
    readMoreList.forEach((readMoreItem) => {
      readMoreItem.addEventListener("click", (evt) => {
        evt.preventDefault();
        const linkParent = readMoreItem.parentNode;
        const currHiddenText = linkParent.querySelector(".hide");
        currHiddenText.classList.remove("hide");

        readMoreItem.remove();
      });
    });
  }

  // INFOPAGE

  //Tabs
  const tabsHead = document.querySelectorAll(".whole__section__tab__header");
  if (tabsHead) {
    tabsHead.forEach((tabHead) => {
      tabHead.addEventListener("click", (evt) => {
        evt.preventDefault();
        const tabHeadParent = findAncestor(tabHead, "whole__section--tab");
        tabHeadParent.classList.toggle("whole__section--tab--active");
      });
    });
  }

  // Выбор способа оплаты
  const wholeOptionBtns = document.querySelectorAll(
    ".whole__section__tab__options__btn"
  );
  if (wholeOptionBtns) {
    wholeOptionBtns.forEach((wholeOptionBtn) => {
      wholeOptionBtn.addEventListener("click", (evt) => {
        evt.preventDefault();

        const wholeOptionBtnParent = findAncestor(
          wholeOptionBtn,
          "whole__section__tab__option"
        );
        const wholeOptionBtnsInner = wholeOptionBtnParent.querySelectorAll(
          ".whole__section__tab__options__btn"
        );
        wholeOptionBtnsInner.forEach((wholeOptionBtnInner) => {
          wholeOptionBtnInner.classList.remove(
            "whole__section__tab__options__btn--active"
          );
        });

        wholeOptionBtn.classList.add(
          "whole__section__tab__options__btn--active"
        );
      });
    });
  }

  // // Копировать в буфер обмена
  const copyBtns = document.querySelectorAll(".whole__section__tab__info__btn");
  if (copyBtns) {
    copyBtns.forEach((copyBtn) => {
      copyBtn.addEventListener("click", (evt) => {
        evt.preventDefault();
        const currentCopyItem = findAncestor(
          copyBtn,
          "whole__section__tab__info__value--special"
        );
        console.log(currentCopyItem);
        const currentText = currentCopyItem.querySelector(
          ".whole__section__tab__info__value__text"
        );
        console.log(currentText);
        currentText.select();
        document.execCommand("copy");
      });
    });
  }

  // Меню сайдбар
  const menuItems = document.querySelectorAll(".menu__item");
  if (menuItems) {
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener("click", (evt) => {
        menuItem.classList.toggle("menu__item--active");
      });
    });
  }

  const menu = document.querySelector("#menu");
  if (menu) {
    const menuHead = menu.querySelector(".sidebar__head");
    menuHead.addEventListener("click", () => {
      menu.classList.toggle("menu--active");
    });
  }

  if (headerBtnAbsolute) {
    headerBtnAbsolute.addEventListener("click", (evt) => {
      evt.preventDefault();
      headerBtnAbsolute.classList.toggle("header__burger--active");
      navInner.classList.toggle("header__intro__nav--fixed");

      if (window.innerWidth < 1200) {
        mask.classList.add("mask--active");
        body.classList.add("fixed");
      }
    });
  }

  // Сортировка bonus 2
  function closeBonusDropdowns() {
    const bonusSortItemDropdowns = document.querySelectorAll(
      ".bonus__sort__item--dropdown"
    );
    bonusSortItemDropdowns.forEach((bonusSortItemDropdown) => {
      bonusSortItemDropdown.classList.remove("bonus__sort__item--active");
    });
  }

  const bonusSortItemWrappers = document.querySelectorAll(
    ".bonus__sort__item__wrapper"
  );
  if (bonusSortItemWrappers) {
    bonusSortItemWrappers.forEach((bonusSortItemWrapper) => {
      bonusSortItemWrapper.addEventListener("click", () => {
        const bonusSortItem = findAncestor(
          bonusSortItemWrapper,
          "bonus__sort__item--dropdown"
        );
        if (bonusSortItem.classList.contains("bonus__sort__item--active")) {
          bonusSortItem.classList.remove("bonus__sort__item--active");
        } else {
          closeBonusDropdowns();
          bonusSortItem.classList.add("bonus__sort__item--active");
        }
      });
    });
  }

  const bonusSortMenuItems = document.querySelectorAll(
    ".bonus__sort__menu__item"
  );
  if (bonusSortMenuItems) {
    bonusSortMenuItems.forEach((bonusSortMenuItem) => {
      bonusSortMenuItem.addEventListener("click", () => {
        const bonusSortItem = findAncestor(
          bonusSortMenuItem,
          "bonus__sort__item--dropdown"
        );
        bonusSortItem.classList.remove("bonus__sort__item--active");

        const bonusSortText = bonusSortItem.querySelector(".bonus__sort__text");
        bonusSortText.innerHTML = bonusSortMenuItem.innerHTML;
      });
    });
  }

  if (document.querySelector("#appPhonesSlider")) {
    new Glider(document.querySelector("#appPhonesSlider"), {
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      dots: false,
      arrows: false,
      responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 767,
          settings: {
            arrows: {
              prev: "#appPhonesPrev",
              next: "#appPhonesNext",
            },
          },
        },
      ],
    });
  }
});
