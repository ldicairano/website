(function () {
  const KEY = "site_lang";
  const btn = document.getElementById("langToggle");
  const blocks = document.querySelectorAll("[data-lang]");

  // Se la pagina non ha contenuti bilingui, nascondi il bottone e stop
  if (!btn || blocks.length === 0) return;

  btn.hidden = false;

  function setLang(lang) {
    blocks.forEach(el => {
      const active = el.getAttribute("data-lang") === lang;
      el.hidden = !active;
    });

    document.documentElement.setAttribute("lang", lang);

    // Il bottone mostra "a cosa passi"
    btn.textContent = (lang === "it") ? "EN" : "IT";

    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  // Lingua iniziale
  let initial = "en";
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === "it" || saved === "en") initial = saved;
  } catch (e) {}

  setLang(initial);

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("lang") || initial;
    setLang(current === "it" ? "en" : "it");
  });
})();

