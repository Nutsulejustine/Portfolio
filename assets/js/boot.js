// Petit script lancé tout de suite : il prévient le CSS que JavaScript est actif
// (pour préparer les animations). Si le site n'est pas prêt au bout de 4 secondes,
// tout est affiché normalement : le contenu ne reste jamais caché.
document.documentElement.classList.add("js");
setTimeout(function () {
  if (!window.__fxReady) document.documentElement.classList.add("fx-failed");
}, 4000);
