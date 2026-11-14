/* ============ À MODIFIER ============ */
// Numéro WhatsApp au format international, sans + ni espaces (ex. 33612345678)
const WHATSAPP = "33750936066";

// Prix en euros. null = aucun prix affiché (le panier marche quand même).
const PRODUCTS = [
  { id: "sac-ourson", cat: ["sacs", "cadeaux"], name: "Sac à dos ourson bouclette", price: null,
    desc: "Bouclette toute douce, oreilles d'ourson, prénom brodé en grandes lettres.",
    variants: [
      { label: "rose", color: "#D9A3A1", img: "assets/photos/web/p37.jpg", img2: "assets/photos/web/p42.jpg" },
      { label: "beige", color: "#D8BE95", img: "assets/photos/web/p44.jpg", img2: "assets/photos/web/p38.jpg" },
      { label: "caramel", color: "#B88A5A", img: "assets/photos/web/p38.jpg", img2: "assets/photos/web/p44.jpg" } ] },
  { id: "sac-velours", cat: ["sacs"], name: "Sac à dos ourson velours côtelé", price: null,
    desc: "Velours côtelé, frimousse d'ourson, prénom brodé.",
    variants: [
      { label: "camel", color: "#A97A4A", img: "assets/photos/web/p36.jpg" } ] },
  { id: "sac-rabat", cat: ["sacs", "cadeaux"], name: "Sac à dos à rabat imprimé", price: null,
    desc: "Velours côtelé et rabat imprimé, prénom brodé sur le rabat.",
    variants: [
      { label: "vieux rose", color: "#C98A86", img: "assets/photos/web/p43.jpg" } ] },
  { id: "sac-coeurs", cat: ["sacs"], name: "Petit sac à dos cœurs", price: null,
    desc: "Gaze de coton matelassée, petites oreilles, imprimé cœurs.",
    variants: [
      { label: "cœurs rouges", color: "#F4ECEA", img: "assets/photos/web/p52.jpg" } ] },
  { id: "sac-langer", cat: ["sacs", "cadeaux"], name: "Sac à langer + accessoires", price: null,
    desc: "Sac matelassé, matelas à langer et pochette à lingettes assortis.",
    variants: [
      { label: "savane beige", color: "#D9C7A8", img: "assets/photos/web/p39.jpg" },
      { label: "savane rose", color: "#E2A7B0", img: "assets/photos/web/p40.jpg" },
      { label: "fleuri", color: "#B9C6DD", img: "assets/photos/web/p46.jpg" } ] },
  { id: "trousse", cat: ["sacs"], name: "Trousse de toilette", price: null,
    desc: "Gaze de coton matelassée, zip. Plusieurs imprimés.",
    variants: [
      { label: "unis & imprimés", color: "#D9A3A1", img: "assets/photos/web/p47.jpg", img2: "assets/photos/web/p54.jpg" } ] },
  { id: "coffret", cat: ["naissance", "cadeaux"], name: "Coffret naissance", price: null,
    desc: "Nid d'ange, cape, doudou, carnet de santé et accessoires assortis.",
    variants: [
      { label: "bleu", color: "#5E7FA8", img: "assets/photos/web/p13.jpg" },
      { label: "rose", color: "#E8A9BE", img: "assets/photos/web/p10.jpg" },
      { label: "blanc", color: "#F4F1EC", img: "assets/photos/web/p16.jpg", img2: "assets/photos/web/p11.jpg" } ] },
  { id: "nid", cat: ["naissance"], name: "Nid d'ange", price: null,
    desc: "Doublure toute douce et volant, pour les premières sorties.",
    variants: [
      { label: "taupe", color: "#A8907A", img: "assets/photos/web/p29.jpg" },
      { label: "rose", color: "#E8A9BE", img: "assets/photos/web/p33.jpg" },
      { label: "blanc", color: "#F4F1EC", img: "assets/photos/web/p41.jpg" },
      { label: "chevaux de bois", color: "#E9D8CF", img: "assets/photos/web/p20.jpg" } ] },
  { id: "gigoteuse", cat: ["naissance"], name: "Gigoteuse", price: null,
    desc: "Gigoteuse matelassée, à personnaliser au prénom.",
    variants: [
      { label: "savane", color: "#C9C9C9", img: "assets/photos/web/p18.jpg" },
      { label: "rose minky", color: "#EFC1CE", img: "assets/photos/web/p31.jpg" },
      { label: "gaze blanche", color: "#F4F1EC", img: "assets/photos/web/p75.jpg", img2: "assets/photos/web/p9.jpg" } ] },
  { id: "doudou", cat: ["naissance", "cadeaux"], name: "Doudou lapin", price: null,
    desc: "Gaze de coton ou minky, prénom brodé.",
    variants: [
      { label: "gaze beige", color: "#E3D2B8", img: "assets/photos/web/p72.jpg" },
      { label: "vichy", color: "#D9A3A1", img: "assets/photos/web/p25.jpg" } ] },
  { id: "carnet", cat: ["naissance", "cadeaux"], name: "Protège carnet de santé", price: null,
    desc: "Prénom brodé. Un souvenir à garder toute la vie.",
    variants: [
      { label: "gaze brodé", color: "#F1ECE1", img: "assets/photos/web/p62.jpg" },
      { label: "toile oursons", color: "#C7A3B0", img: "assets/photos/web/p60.jpg" },
      { label: "chevaux de bois", color: "#E9D8CF", img: "assets/photos/web/p58.jpg" } ] },
  { id: "attache", cat: ["naissance", "cadeaux"], name: "Attache-tétine prénom", price: null,
    desc: "Perles au prénom ou tissu imprimé, pince en bois.",
    variants: [
      { label: "perles", color: "#E8C9A8", img: "assets/photos/web/p68.jpg", img2: "assets/photos/web/p69.jpg" },
      { label: "tissu", color: "#B9C6DD", img: "assets/photos/web/p66.jpg" } ] },
  { id: "pyjama-brode", cat: ["bebe", "cadeaux"], name: "Pyjama velours brodé", price: null,
    desc: "Velours tout doux, prénom brodé sur la poitrine.",
    variants: [
      { label: "blanc", color: "#F4F1EC", img: "assets/photos/web/p03.jpg", img2: "assets/photos/web/p06.jpg" },
      { label: "rose", color: "#F2C3C6", img: "assets/photos/web/p05.jpg", img2: "assets/photos/web/p02.jpg" },
      { label: "beige", color: "#EADBC5", img: "assets/photos/web/p08.jpg", img2: "assets/photos/web/p53.jpg" },
      { label: "camel", color: "#D9BC98", img: "assets/photos/web/p04.jpg" } ] },
  { id: "pyjama-minky", cat: ["bebe"], name: "Pyjama minky + moufles", price: null,
    desc: "Minky à pois en relief, très chaud.",
    variants: [
      { label: "framboise", color: "#C95C78", img: "assets/photos/web/p30.jpg" },
      { label: "blanc", color: "#F4F1EC", img: "assets/photos/web/p28.jpg" } ] },
  { id: "ensemble-imprime", cat: ["bebe"], name: "Ensemble naissance imprimé", price: null,
    desc: "Pyjama, body, bonnet et moufles assortis.",
    variants: [
      { label: "fleuri", color: "#F0C9D2", img: "assets/photos/web/p23.jpg" },
      { label: "savane", color: "#E6CFC3", img: "assets/photos/web/p27.jpg" } ] },
  { id: "tricot", cat: ["bebe", "cadeaux"], name: "Ensemble tricot brodé", price: null,
    desc: "Brassière croisée, pantalon et bonnet en maille, prénom brodé.",
    variants: [
      { label: "blanc", color: "#F4F1EC", img: "assets/photos/web/p76.jpg", img2: "assets/photos/web/p67.jpg" },
      { label: "beige", color: "#EADBC5", img: "assets/photos/web/p80.jpg", img2: "assets/photos/web/p71.jpg" },
      { label: "rose", color: "#D99A9F", img: "assets/photos/web/p64.jpg" },
      { label: "bleu", color: "#8FB3D9", img: "assets/photos/web/p65.jpg" },
      { label: "chocolat", color: "#5A3A28", img: "assets/photos/web/p74.jpg" } ] },
  { id: "couverture-tricot", cat: ["linge", "cadeaux"], name: "Couverture tricot brodée", price: null,
    desc: "Maille douce, prénom brodé en coin.",
    variants: [
      { label: "écru", color: "#F1ECE1", img: "assets/photos/web/p50.jpg", img2: "assets/photos/web/p51.jpg" },
      { label: "trio", color: "#C9B79A", img: "assets/photos/web/p61.jpg", img2: "assets/photos/web/p49.jpg" } ] },
  { id: "couverture", cat: ["linge"], name: "Couverture gaze & polaire", price: null,
    desc: "Gaze de coton d'un côté, polaire toute douce de l'autre.",
    variants: [
      { label: "savane bleue", color: "#AFC2DD", img: "assets/photos/web/p45.jpg" },
      { label: "savane rose", color: "#E2A7B0", img: "assets/photos/web/p56.jpg" },
      { label: "léopard", color: "#8C7155", img: "assets/photos/web/p57.jpg" },
      { label: "blanc", color: "#F4F1EC", img: "assets/photos/web/p63.jpg" },
      { label: "caramel", color: "#9C6A3E", img: "assets/photos/web/p55.jpg" } ] },
  { id: "plaid-minky", cat: ["linge"], name: "Plaid minky + doudou", price: null,
    desc: "Minky à pois et polaire, doudou lapin assorti.",
    variants: [
      { label: "framboise", color: "#B85C6E", img: "assets/photos/web/p22.jpg", img2: "assets/photos/web/p34.jpg" },
      { label: "bleu", color: "#B9CCE6", img: "assets/photos/web/p24.jpg", img2: "assets/photos/web/p34.jpg" } ] },
  { id: "lange", cat: ["linge"], name: "Lange en gaze de coton", price: null,
    desc: "Grand lange doux et respirant, 10 couleurs.",
    variants: [
      { label: "10 couleurs", color: "#C9B7E0", img: "assets/photos/web/p48.jpg" } ] },
  { id: "cape", cat: ["linge", "cadeaux"], name: "Cape de bain", price: null,
    desc: "Éponge moelleuse, capuche brodée au prénom.",
    variants: [
      { label: "savane", color: "#AFC2DD", img: "assets/photos/web/p78.jpg" },
      { label: "fleurie", color: "#E9C4CC", img: "assets/photos/web/p73.jpg" },
      { label: "oursons", color: "#B9A48C", img: "assets/photos/web/p70.jpg" } ] },
  { id: "peignoir", cat: ["linge", "cadeaux"], name: "Peignoir brodé", price: null,
    desc: "Éponge avec capuche, prénom brodé. Enfant et adulte.",
    variants: [
      { label: "enfant", color: "#F4F1EC", img: "assets/photos/web/p82.jpg" },
      { label: "adulte", color: "#FFFFFF", img: "assets/photos/web/p81.jpg" } ] },
];
// Les 5 écritures proposées pour la broderie
const FONTS = [
  { id: "college",  label: "Collège",  css: "'Graduate', serif", upper: true },
  { id: "attache",  label: "Attaché",  css: "'Dancing Script', cursive" },
  { id: "elegant",  label: "Élégant",  css: "'Great Vibes', cursive" },
  { id: "arrondi",  label: "Arrondi",  css: "'Pacifico', cursive" },
  { id: "enfantin", label: "Enfantin", css: "'Baloo 2', sans-serif" },
];
/* ==================================== */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const euro = n => n.toFixed(2).replace(".", ",") + " €";
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const waLink = text => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

/* ---- Grille ---- */
const grid = $("#grid");
function cardHTML(p) {
  const v = p.variants[0];
  const sw = "";
  const alt = v.img2 || (p.variants[1] && p.variants[1].img);
  return `<article class="card" data-id="${p.id}" data-cat="${p.cat.join(" ")}">
    <div class="card-tile is-photo">
      <img class="img-a" src="${v.img}" alt="${esc(p.name)}" loading="lazy">
      ${alt ? `<img class="img-b" src="${alt}" alt="" loading="lazy">` : ""}
      <span class="card-heart" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg></span>
    </div>
    <div class="card-meta"><h3 class="card-title">${esc(p.name)}</h3><span class="card-price">${p.price == null ? "" : euro(p.price)}</span></div>
    <p class="card-desc">${esc(p.desc)}</p>
    ${sw}
    <button type="button" class="btn-cart" data-add="${p.id}">ajouter au panier</button>
  </article>`;
}
grid.insertAdjacentHTML("beforeend", PRODUCTS.map(cardHTML).join(""));

$$("[data-filter]").forEach(b => b.addEventListener("click", () => {
  const f = b.dataset.filter;
  $$("[data-filter]").forEach(x => x.classList.toggle("is-active", x === b));
  $$(".card", grid).forEach(c => { c.hidden = f !== "all" && !c.dataset.cat.split(" ").includes(f); });
  $(".promo").hidden = f !== "all";
  $(".cat-head").scrollIntoView({ behavior: "smooth" });
}));

/* ---- Panier (localStorage, aucun serveur) ---- */
const KEY = "erlucrea-cart-v1";
let cart = [];
try { cart = JSON.parse(localStorage.getItem(KEY)) || []; } catch { cart = []; }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch {} };
const byId = id => PRODUCTS.find(p => p.id === id);

function renderCart() {
  cart = cart.filter(l => byId(l.id));
  const count = cart.reduce((n, l) => n + l.qty, 0);
  $$("[data-cart-count]").forEach(e => e.textContent = count);
  const box = $("[data-cart-lines]");
  if (!cart.length) {
    box.innerHTML = `<p class="empty">Votre panier est vide.<br>Choisissez un modèle ♡</p>`;
  } else {
    box.innerHTML = cart.map((l, i) => {
      const p = byId(l.id);
      const v = p.variants.find(x => x.label === l.variant) || p.variants[0];
      return `<div class="line">
        <div class="line-img"><img src="${v.img}" alt=""></div>
        <div>
          <p class="line-title">${esc(p.name)}</p>
          <p class="line-opt">${l.prenom ? `Prénom : <span class="line-prenom" style="font-family:${fontById(l.font).css}">${esc(fontById(l.font).upper ? l.prenom.toUpperCase() : l.prenom)}</span>` : "Sans prénom"}</p>
          ${l.prenom ? `<p class="line-opt">Écriture : ${esc(fontById(l.font).label)}</p>` : ""}
          <div class="qty"><button type="button" data-dec="${i}" aria-label="Retirer un">−</button><span>${l.qty}</span><button type="button" data-inc="${i}" aria-label="Ajouter un">+</button></div>
        </div>
        <div class="line-right">
          <span class="line-price">${p.price == null ? "" : euro(p.price * l.qty)}</span>
          <button type="button" class="link-del" data-del="${i}">retirer</button>
        </div>
      </div>`;
    }).join("");
  }
  const known = cart.every(l => byId(l.id).price != null);
  const total = cart.reduce((s, l) => s + (byId(l.id).price || 0) * l.qty, 0);
  $("[data-cart-total]").innerHTML = cart.length
    ? `<span>${count} article${count > 1 ? "s" : ""}</span><span>${known ? euro(total) : "prix confirmé sur WhatsApp"}</span>` : "";
  $("[data-checkout]").disabled = !cart.length;
}

$("[data-cart-lines]").addEventListener("click", e => {
  const t = e.target.closest("button"); if (!t) return;
  if (t.dataset.inc != null) cart[+t.dataset.inc].qty++;
  if (t.dataset.dec != null) { const l = cart[+t.dataset.dec]; l.qty--; if (l.qty < 1) cart.splice(+t.dataset.dec, 1); }
  if (t.dataset.del != null) cart.splice(+t.dataset.del, 1);
  save(); renderCart();
});

const drawer = $("[data-drawer]"), overlay = $("[data-overlay]");
function openCart() { overlay.hidden = false; drawer.classList.add("is-open"); drawer.setAttribute("aria-hidden", "false"); }
function closeCart() { overlay.hidden = true; drawer.classList.remove("is-open"); drawer.setAttribute("aria-hidden", "true"); }
$$("[data-open-cart]").forEach(b => b.addEventListener("click", openCart));
$("[data-close-cart]").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);
document.addEventListener("keydown", e => { if (e.key === "Escape" && drawer.classList.contains("is-open")) closeCart(); });

/* ---- Modale : couleur + prénom ---- */
const modal = $("[data-modal]");
let current = null, currentVariant = null, currentFont = FONTS[0];
const fontById = id => FONTS.find(f => f.id === id) || FONTS[0];
function paintPreview() {
  const el = $("[data-modal-preview]"), v = $("[data-modal-prenom]").value.trim();
  el.textContent = v ? (currentFont.upper ? v.toUpperCase() : v) : "";
  el.style.fontFamily = currentFont.css;
  $$("[data-font]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.font === currentFont.id)));
}
$("[data-modal-fonts]").innerHTML = FONTS.map(f => `<button type="button" class="font-chip" data-font="${f.id}" style="font-family:${f.css}">${f.upper ? f.label.toUpperCase() : f.label}</button>`).join("");
$("[data-modal-fonts]").addEventListener("click", e => { const b = e.target.closest("[data-font]"); if (b) { currentFont = fontById(b.dataset.font); paintPreview(); } });
function openModal(p, vi = 0) {
  current = p; currentVariant = p.variants[vi] || p.variants[0];
  $("[data-modal-img]").src = currentVariant.img;
  $("[data-modal-img]").alt = p.name;
  $("[data-modal-title]").textContent = p.name;
  const sw = $("[data-modal-swatches]");
  sw.innerHTML = false ? p.variants.map((v, i) =>
    `<button type="button" class="swatch-btn" data-v="${i}" aria-pressed="${v === currentVariant}"><span class="sw" style="background:${v.color}"></span>${esc(v.label)}</button>`).join("") : "";
  $("[data-modal-prenom]").value = "";
  currentFont = FONTS[0];
  paintPreview();
  modal.showModal();
  $("[data-modal-prenom]").focus();
}
$("[data-modal-swatches]").addEventListener("click", e => {
  const b = e.target.closest("[data-v]"); if (!b) return;
  currentVariant = current.variants[+b.dataset.v];
  $$("[data-v]").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
  $("[data-modal-img]").src = currentVariant.img;
});
$("[data-modal-prenom]").addEventListener("input", paintPreview);
$("[data-modal-cancel]").addEventListener("click", () => modal.close());
$("[data-add-form]").addEventListener("submit", () => {
  const prenom = $("[data-modal-prenom]").value.trim();
  const font = prenom ? currentFont.id : null;
  const same = cart.find(l => l.id === current.id && l.variant === currentVariant.label && l.prenom === prenom && (l.font || null) === font);
  if (same) same.qty++; else cart.push({ id: current.id, variant: currentVariant.label, prenom, font, qty: 1 });
  save(); renderCart(); toast(`Ajouté au panier ♡`);
});
grid.addEventListener("click", e => {
  const s = e.target.closest("[data-sw]");
  if (s) {
    const card = s.closest(".card"), v = byId(card.dataset.id).variants[+s.dataset.sw];
    card.dataset.v = s.dataset.sw;
    $(".img-a", card).src = v.img;
    let b = $(".img-b", card);
    if (v.img2) { if (!b) { b = document.createElement("img"); b.className = "img-b"; b.alt = ""; $(".card-tile", card).appendChild(b); } b.src = v.img2; }
    else if (b) b.remove();
    $$("[data-sw]", card).forEach(x => x.classList.toggle("is-on", x === s));
    return;
  }
  const b = e.target.closest("[data-add]"); if (b) { const card = b.closest(".card"); openModal(byId(b.dataset.add), +(card.dataset.v || 0)); }
});

/* ---- WhatsApp ---- */
$("[data-checkout]").addEventListener("click", () => {
  if (!cart.length) return;
  const who = $("[data-customer-name]").value.trim();
  const lines = cart.map(l => {
    const p = byId(l.id);
    const opts = [l.prenom ? `prénom « ${l.prenom} », écriture ${fontById(l.font).label.toLowerCase()}` : "sans prénom"].filter(Boolean).join(", ");
    return `• ${l.qty} × ${p.name} (${opts})${p.price != null ? ` : ${euro(p.price * l.qty)}` : ""}`;
  });
  const msg = `Bonjour Erlucrea${who ? `, c'est ${who}` : ""} !\nJe voudrais commander :\n${lines.join("\n")}\n\nMerci de me confirmer le prix et le délai.`;
  window.open(waLink(msg), "_blank", "noopener");
});
$$("[data-wa-general]").forEach(a => { a.href = waLink("Bonjour Erlucrea ! Je vous ai vus au salon, je voudrais commander une création brodée."); a.target = "_blank"; a.rel = "noopener"; });
$$("[data-wa-item]").forEach(a => { a.href = waLink(`Bonjour Erlucrea ! Je suis intéressé(e) par : ${a.dataset.waItem} brodé(e) au prénom. Pouvez-vous m'envoyer des photos et le prix ?`); a.target = "_blank"; a.rel = "noopener"; });

let tt;
function toast(msg) { const t = $("[data-toast]"); t.textContent = msg; t.classList.add("is-on"); clearTimeout(tt); tt = setTimeout(() => t.classList.remove("is-on"), 1800); }

/* ---- Tambour : prénoms qui défilent ---- */
(() => {
  const el = $("[data-hoop-name]"); if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const names = ["Liya", "Hamza", "Ela", "Gabriel", "Mihre", "Zeki", "Louise", "Kerem"]; let i = 0;
  setInterval(() => { el.classList.add("is-out"); setTimeout(() => { i = (i + 1) % names.length; el.textContent = names[i]; el.classList.remove("is-out"); }, 350); }, 2200);
})();

renderCart();
