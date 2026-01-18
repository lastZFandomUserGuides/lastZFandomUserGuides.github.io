const titleEl = document.getElementById("page-title");
const contentEl = document.getElementById("page-content");

const pageMap = {
    "index.html": "home",
    "events_full_preparedness.html": "events_full_preparedness",
    "events_alliance_duel.html": "events_alliance_duel",
    "power_heroes.html": "power_heroes",
    "power_research.html": "power_research",
    "power_buildings.html": "power_buildings",
    "f2p.html": "f2p",
    "links_z_links.html": "links_z_links",
    "links_z_creators.html": "links_z_creators"
};

const pageName = window.location.pathname.split("/").pop();
const pageKey = pageMap[pageName] || "home";

const currentLang = localStorage.getItem("lang") || "EN";
loadText(currentLang);

document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
        localStorage.setItem("lang", btn.dataset.lang);
        loadText(btn.dataset.lang);
    });
});

function loadText(lang) {
    fetch(`texts/${pageKey}${lang}.txt`)
        .then(res => res.text())
        .then(text => {
            const lines = text.split("\n");
            titleEl.textContent = lines[0] || "PLACEHOLDER";
            contentEl.textContent = lines.slice(1).join("\n") || "PLACEHOLDER";
        });
}

document.querySelectorAll(".dropdown > span").forEach(el => {
    el.addEventListener("click", () => {
        el.parentElement.classList.toggle("open");
    });
});
