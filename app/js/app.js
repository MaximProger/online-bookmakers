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

  // Закрыть все вкладки
  function closeAll(items) {
    items.forEach((item) => {
      item.classList.remove("header__nav__item--active");
    });
  }

  mask.addEventListener("click", () => {
    body.classList.remove("fixed");
    headerIntroCenter.classList.remove("header__intro__center--active");
    burgerBtn.classList.remove("header__burger--active");
    navInner.classList.remove("header__intro__nav--active");
    closeAll(navItems);
    mask.classList.remove("mask--active");
  });

  // Меню
  burgerBtn.addEventListener("click", () => {
    closeAll(navItems);
    burgerBtn.classList.toggle("header__burger--active");
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

  document.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > windowH) {
      headerNav.classList.add("header__nav--scroll");

      navItems.forEach((navItem) => {
        navItem.addEventListener("mouseover", maskOpen);

        navItem.addEventListener("mouseout", maskHide);
      });
    } else {
      headerNav.classList.remove("header__nav--scroll");

      navItems.forEach((navItem) => {
        navItem.removeEventListener("mouseover", maskOpen);

        navItem.removeEventListener("mouseout", maskHide);
      });
    }
  });

  // Вкладки в футере
  const footerTitles = document.querySelectorAll(".footer__title");
  footerTitles.forEach((footerTitle) => {
    footerTitle.addEventListener("click", () => {
      const parentFooterTitle = footerTitle.parentNode;

      parentFooterTitle.classList.toggle("footer__col--active");
    });
  });

  // Мобильное меню
  const headerNavItemsWrapper = document.querySelectorAll(
    ".header__intro__nav__item__wrapper"
  );
  headerNavItemsWrapper.forEach((headerNavItemWrapper) => {
    headerNavItemWrapper.addEventListener("click", () => {
      const cuurNavParent = headerNavItemWrapper.parentNode;
      cuurNavParent.classList.toggle("header__intro__nav__item--active");
    });
  });

  // Открыть поиск
  openSearch.addEventListener("click", (evt) => {
    evt.preventDefault();
    headerIntroCenter.classList.add("header__intro__center--active");
    mask.classList.add("mask--active");
    body.classList.add("fixed");
  });

  // Подсказки в поиске
  searchInput.addEventListener("input", (evt) => {
    evt.preventDefault();
    searchHints.classList.add("search__hints--active");

    if (!searchInput.value) {
      searchHints.classList.remove("search__hints--active");
    }
  });

  function findAncestor(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
  }

  // Табы в таблице рейтинга
  const ozorBtns = document.querySelectorAll(".obzor__open");
  ozorBtns.forEach((ozorBtn) => {
    ozorBtn.addEventListener("click", () => {
      const currParentLine = findAncestor(ozorBtn, "best__table__line");
      currParentLine.classList.toggle("best__table__line--active");
    });
  });

  // Slider
  new Glider(document.querySelector(".experts__line"), {
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    infinity: true,
    dots: false,
    arrows: {
      prev: ".experts__btn--prev",
      next: ".experts__btn--next",
    },
  });
});
