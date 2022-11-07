"use strict";
(function () {
  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    },
  };
  const mediaQuery = window.matchMedia("(min-width: 992px)");
  mediaQuery.addListener(handleTabletChange);
  handleTabletChange(mediaQuery);

  function handleTabletChange(e) {
    if (e.matches) {
      // menu.classList.remove("js-menu--open");
    }
  }
  const body = document.querySelector("body");
  console.log(body);
  window.addEventListener("resize", watchDevice);
  watchDevice();

  function watchDevice() {
    if (isMobile.any() || !mediaQuery.matches) {
      if (body.classList.contains("pc")) {
        body.classList.remove("pc");
      }
      body.classList.add("mobile");
    } else {
      if (body.classList.contains("mobile")) {
        body.classList.remove("mobile");
      }
      body.classList.add("pc");
    }
  }

  // ----------show mobile menu---------
  const menuIcon = body.querySelector(".js-menu");
  menuIcon.addEventListener("click", showMobileMenu);
  const header = menuIcon.closest(".header");
  let isOpenMobileMenu = false;

  function showMobileMenu(event) {
    const menu = event.currentTarget;

    if (event.target.closest(".menu__icon")) {
      if (!isOpenMobileMenu) {
        menu.classList.add("js-menu--open");
        body.classList.add("_lock");
        addScrollWidth();
        isOpenMobileMenu = true;
      } else {
        menu.classList.remove("js-menu--open");
        body.classList.remove("_lock");
        removeScrollWidth();
        isOpenMobileMenu = false;
      }

      const mediaQuery = window.matchMedia("(min-width: 992px)");
      mediaQuery.addListener(handleTabletChange);
      handleTabletChange(mediaQuery);

      function handleTabletChange(e) {
        console.log(mediaQuery);
        if (e.matches) {
          menu.classList.remove("js-menu--open");
          body.classList.remove("_lock");
        }
      }
      function addScrollWidth() {
        const scrollWidth = getScrollWidth();
        header.style.paddingRight = scrollWidth;
        body.style.paddingRight = scrollWidth;
      }
      function removeScrollWidth() {
        header.style.paddingRight = "";
        body.style.paddingRight = "";
      }
      function getScrollWidth() {
        let div = document.createElement("div");

        div.style.overflowY = "scroll";
        div.style.width = "50px";
        div.style.height = "50px";

        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove();
        return scrollWidth + "px";
      }
    }
  }

  if (isMobile.any() || !mediaQuery.matches) {
    body.addEventListener("click", showSubmenu);
    let submenuIsOpen = false;

    function showSubmenu(e) {
      const submenuButton = e.target.closest(".js-item-menu--has-submenu");
      const body = e.currentTarget;

      if (submenuButton) {
        if (!submenuIsOpen) {
          submenuButton.classList.add("js-item-menu--submenu-open");
          body.addEventListener("click", hideSubmenu);
          submenuIsOpen = true;
        } else {
          body.removeEventListener("click", hideSubmenu);
        }
      }

      function hideSubmenu(e) {
        if (!e.target.closest(".submenu")) {
          submenuButton.classList.remove("js-item-menu--submenu-open");
          body.removeEventListener("click", hideSubmenu);
          submenuIsOpen = false;
        }
      }
    }
  }
})();
