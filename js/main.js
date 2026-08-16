/* ==========================================================================
   Caffeine Media — site behaviour
   Plain JavaScript, no dependencies, no build step. Loaded with `defer`.

     1. Header: scrolled state + scroll progress
     2. Mobile menu
     3. Scroll reveals
     4. Headline word reveal
     5. Timecode
     6. FAQ accordion
     7. Contact form
   ========================================================================== */

(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* 1. Header --------------------------------------------------------------- */

  var header = document.querySelector(".site-header");
  var progress = document.querySelector(".scroll-progress");

  function onScroll() {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    }
    if (progress) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = max > 0 ? window.scrollY / max : 0;
      progress.style.transform = "scaleX(" + ratio + ")";
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  /* 2. Mobile menu ---------------------------------------------------------- */

  var toggle = document.querySelector(".menu-toggle");
  var menu = document.querySelector(".mobile-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      header.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.style.overflow = open ? "hidden" : "";
    });

    // Escape closes it, matching the button's own behaviour.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) {
        toggle.click();
      }
    });
  }

  /* 3. Scroll reveals ------------------------------------------------------- */

  var revealables = document.querySelectorAll("[data-reveal]");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealables.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          // data-reveal="0.12" staggers a group by seconds.
          var delay = parseFloat(el.getAttribute("data-reveal")) || 0;
          el.style.transitionDelay = delay + "s";
          el.classList.add("is-visible");
          observer.unobserve(el);
        });
      },
      { rootMargin: "-8% 0px -8% 0px" }
    );

    revealables.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* 4. Headline word reveal ------------------------------------------------- */

  // Each .rise > span is staggered by its position in the headline.
  document.querySelectorAll(".rise").forEach(function (el, i) {
    var inner = el.firstElementChild;
    if (inner) inner.style.transitionDelay = 0.3 + i * 0.055 + "s";
  });

  requestAnimationFrame(function () {
    document.documentElement.classList.add("is-loaded");
  });

  /* 5. Timecode ------------------------------------------------------------- */

  var timecode = document.querySelector("[data-timecode]");

  if (timecode) {
    if (reduceMotion) {
      timecode.textContent = "00:00:24:00";
    } else {
      var pad = function (n) {
        return String(n).padStart(2, "0");
      };
      var start = null;

      // Writes straight to the node, so 24fps costs no layout work elsewhere.
      var tick = function (now) {
        if (start === null) start = now;
        var frames = Math.floor(((now - start) / 1000) * 24);
        timecode.textContent =
          pad(Math.floor(frames / 86400)) +
          ":" +
          pad(Math.floor(frames / 1440) % 60) +
          ":" +
          pad(Math.floor(frames / 24) % 60) +
          ":" +
          pad(frames % 24);
        requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    }
  }

  /* 6. FAQ accordion -------------------------------------------------------- */

  var triggers = document.querySelectorAll(".faq__trigger");

  function closePanel(trigger) {
    var panel = document.getElementById(trigger.getAttribute("aria-controls"));
    if (!panel) return;
    panel.style.height = panel.scrollHeight + "px";
    requestAnimationFrame(function () {
      panel.style.height = "0px";
    });
    trigger.setAttribute("aria-expanded", "false");
  }

  function openPanel(trigger) {
    var panel = document.getElementById(trigger.getAttribute("aria-controls"));
    if (!panel) return;
    panel.style.height = panel.scrollHeight + "px";
    trigger.setAttribute("aria-expanded", "true");
    // Let it settle to auto so long answers stay correct if the page reflows.
    window.setTimeout(function () {
      if (trigger.getAttribute("aria-expanded") === "true") {
        panel.style.height = "auto";
      }
    }, 520);
  }

  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var isOpen = trigger.getAttribute("aria-expanded") === "true";

      triggers.forEach(function (other) {
        if (other !== trigger && other.getAttribute("aria-expanded") === "true") {
          var panel = document.getElementById(other.getAttribute("aria-controls"));
          if (panel) panel.style.height = panel.scrollHeight + "px";
          requestAnimationFrame(function () {
            closePanel(other);
          });
        }
      });

      if (isOpen) closePanel(trigger);
      else openPanel(trigger);
    });
  });

  // Open the first answer so the section never reads as empty.
  if (triggers.length) openPanel(triggers[0]);

  /* 7. Contact form --------------------------------------------------------- */

  var form = document.querySelector("[data-contact-form]");

  if (form) {
    var wrapper = form.parentElement;
    var sent = document.querySelector("[data-form-sent]");
    var chips = form.querySelectorAll(".chip");
    var noteTarget = form.querySelector("[data-route-email]");
    var route = {
      label: "Not sure yet",
      email: form.getAttribute("data-default-email"),
      theme: "",
    };

    function applyRoute(chip) {
      route = {
        label: chip.textContent.trim(),
        email: chip.getAttribute("data-email"),
        theme: chip.getAttribute("data-theme") || "",
      };

      chips.forEach(function (c) {
        c.setAttribute("aria-pressed", c === chip ? "true" : "false");
      });

      wrapper.className = wrapper.className.replace(/\btheme-\S+/g, "").trim();
      if (route.theme) wrapper.classList.add(route.theme);
      if (noteTarget) noteTarget.textContent = route.email;
    }

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        applyRoute(chip);
      });
    });

    function setError(name, message) {
      var field = form.querySelector('[data-field="' + name + '"]');
      if (!field) return;
      field.classList.toggle("has-error", Boolean(message));
      var slot = field.querySelector(".field__error");
      if (slot && message) slot.textContent = message;
      var input = field.querySelector("input, textarea");
      if (input) input.setAttribute("aria-invalid", message ? "true" : "false");
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var data = new FormData(form);
      var name = String(data.get("name") || "").trim();
      var email = String(data.get("email") || "").trim();
      var org = String(data.get("org") || "").trim();
      var stage = String(data.get("stage") || "");
      var message = String(data.get("message") || "").trim();
      var ok = true;

      if (!name) {
        setError("name", "We need something to call you.");
        ok = false;
      } else setError("name", "");

      if (!email) {
        setError("email", "An email address, so we can reply.");
        ok = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        setError("email", "That address does not look right.");
        ok = false;
      } else setError("email", "");

      if (message.length < 10) {
        setError("message", "A sentence or two about the project.");
        ok = false;
      } else setError("message", "");

      if (!ok) return;

      var lines = [
        "Name: " + name,
        "Email: " + email,
        org ? "Company: " + org : null,
        "Enquiry for: " + route.label,
        "Stage: " + stage,
        "",
        message,
      ].filter(Boolean);

      window.location.href =
        "mailto:" +
        route.email +
        "?subject=" +
        encodeURIComponent("Enquiry — " + route.label + " — " + name) +
        "&body=" +
        encodeURIComponent(lines.join("\n"));

      form.style.display = "none";
      if (sent) {
        sent.classList.add("is-visible");
        var target = sent.querySelector("[data-sent-email]");
        if (target) target.textContent = route.email;
      }
    });

    var again = document.querySelector("[data-write-again]");
    if (again) {
      again.addEventListener("click", function () {
        if (sent) sent.classList.remove("is-visible");
        form.style.display = "";
      });
    }
  }
})();
