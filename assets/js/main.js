// 사이트 동작: 다크 모드, 모바일 메뉴, 스크롤 위치에 따른 메뉴 강조, 논문 필터
(function () {
  "use strict";

  var root = document.documentElement;
  var header = document.getElementById("site-header");

  // ---------- Theme ----------
  var themeToggle = document.getElementById("theme-toggle");
  var darkQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function currentTheme() {
    var t = root.getAttribute("data-theme");
    if (t === "light" || t === "dark") return t;
    return darkQuery && darkQuery.matches ? "dark" : "light";
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
    });
  }

  // ---------- Print ----------
  var printButton = document.getElementById("print-button");
  if (printButton) {
    printButton.addEventListener("click", function () {
      window.print();
    });
  }

  // ---------- Header: shadow on scroll ----------
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---------- Mobile navigation ----------
  var navToggle = document.getElementById("nav-toggle");
  function setNav(open) {
    if (!header || !navToggle) return;
    header.classList.toggle("nav-open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  }
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      setNav(!header.classList.contains("nav-open"));
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setNav(false);
    });
    document.addEventListener("click", function (e) {
      if (header && !header.contains(e.target)) setNav(false);
    });
  }

  // ---------- Active section in nav ----------
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav-link[data-section]"));
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      setNav(false);
    });
  });

  var sections = links
    .map(function (link) {
      return document.getElementById(link.getAttribute("data-section"));
    })
    .filter(Boolean);

  function setActive(id) {
    links.forEach(function (link) {
      var active = link.getAttribute("data-section") === id;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  function updateActive() {
    // 헤더 바로 아래 기준선을 지난 마지막 섹션을 활성화
    var line = (header ? header.offsetHeight : 0) + Math.min(window.innerHeight * 0.3, 240);
    var current = sections.length ? sections[0].id : null;
    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top <= line) current = section.id;
    });
    // 페이지 끝에 도달하면 마지막 섹션
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2 && sections.length) {
      current = sections[sections.length - 1].id;
    }
    setActive(current);
  }

  var ticking = false;
  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          updateActive();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
  window.addEventListener("resize", updateActive);
  updateActive();

  // 언어 전환 시 현재 보고 있는 섹션 유지
  Array.prototype.forEach.call(document.querySelectorAll("a.lang-option"), function (a) {
    a.addEventListener("click", function () {
      var active = document.querySelector(".nav-link.is-active");
      var id = active && active.getAttribute("data-section");
      if (id && id !== "about") a.setAttribute("href", a.getAttribute("href").split("#")[0] + "#" + id);
    });
  });

  // ---------- Publication filter ----------
  var segments = Array.prototype.slice.call(document.querySelectorAll(".segment[data-filter]"));
  var pubs = Array.prototype.slice.call(document.querySelectorAll(".pub"));
  var years = Array.prototype.slice.call(document.querySelectorAll(".pub-year"));
  var empty = document.querySelector(".pub-empty");

  function matches(pub, filter) {
    if (filter === "all") return true;
    if (filter === "first") return pub.getAttribute("data-first") === "true";
    return pub.getAttribute("data-type") === filter;
  }

  function applyFilter(filter) {
    segments.forEach(function (s) {
      s.setAttribute("aria-pressed", s.getAttribute("data-filter") === filter ? "true" : "false");
    });
    pubs.forEach(function (pub) {
      pub.hidden = !matches(pub, filter);
    });
    var shown = 0;
    years.forEach(function (year) {
      var visible = year.querySelectorAll(".pub:not([hidden])").length;
      year.hidden = visible === 0;
      var count = year.querySelector("[data-count]");
      if (count) count.textContent = visible;
      shown += visible;
    });
    if (empty) empty.hidden = shown !== 0;
  }

  segments.forEach(function (s) {
    s.addEventListener("click", function () {
      applyFilter(s.getAttribute("data-filter"));
    });
  });
  // ---------- Banner (auto-rotating highlights) ----------
  var banner = document.getElementById("highlights");
  if (banner) {
    var slides = banner.querySelectorAll(".banner-slide");
    var dots = banner.querySelectorAll(".banner-dot");
    var current = 0;
    var timer = null;
    var interval = parseInt(banner.getAttribute("data-interval"), 10) || 6000;
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var showSlide = function (i) {
      current = (i + slides.length) % slides.length;
      Array.prototype.forEach.call(slides, function (slide, k) {
        var active = k === current;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", active ? "false" : "true");
        Array.prototype.forEach.call(slide.querySelectorAll("a"), function (a) {
          if (active) a.removeAttribute("tabindex");
          else a.setAttribute("tabindex", "-1");
        });
      });
      Array.prototype.forEach.call(dots, function (dot, k) {
        dot.classList.toggle("is-active", k === current);
        if (k === current) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
    };
    var stop = function () {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };
    var start = function () {
      stop();
      if (reduceMotion || slides.length < 2) return;
      timer = setInterval(function () {
        showSlide(current + 1);
      }, interval);
    };

    var prev = banner.querySelector(".banner-prev");
    var next = banner.querySelector(".banner-next");
    if (prev) prev.addEventListener("click", function () { showSlide(current - 1); start(); });
    if (next) next.addEventListener("click", function () { showSlide(current + 1); start(); });
    Array.prototype.forEach.call(dots, function (dot) {
      dot.addEventListener("click", function () {
        showSlide(parseInt(dot.getAttribute("data-slide"), 10));
        start();
      });
    });
    banner.addEventListener("mouseenter", stop);
    banner.addEventListener("mouseleave", start);
    banner.addEventListener("focusin", stop);
    banner.addEventListener("focusout", start);

    // 모바일 스와이프
    var touchX = null;
    banner.addEventListener("touchstart", function (e) { touchX = e.touches[0].clientX; }, { passive: true });
    banner.addEventListener("touchend", function (e) {
      if (touchX === null) return;
      var dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 40) {
        showSlide(current + (dx < 0 ? 1 : -1));
        start();
      }
      touchX = null;
    }, { passive: true });

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop();
      else start();
    });
    start();
  }
})();
