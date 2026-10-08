# Portfolio de Justine

Site statique (HTML, CSS, JavaScript), sans cookie ni traqueur. Hébergé gratuitement sur Vercel.

## Mettre le site en ligne
1. Dépôt GitHub public nommé `portfolio`, avec tous ces fichiers à la racine.
2. Sur vercel.com : Add New > Project > importer `portfolio` > Framework "Other" > Deploy.

## Faire apparaître un projet sur le site
Sur le dépôt du projet : roue dentée à côté de "About", ajoute les topics :
- `portfolio` (obligatoire)
- une catégorie : `grc`, `cybersecurite`, `reseau` ou `site-web`
(`cybersecurite` et `reseau` apparaissent ensemble dans « Cybersécurité et réseau »)

La description du dépôt devient le texte de la carte.

## Écrire un article de blog
Ajoute un fichier `.md` dans `blog/` avec en haut `title`, `date` (AAAA-MM-JJ) et `summary`. Ajoute aussi son nom dans `blog/index.json`.

## Personnaliser
Les infos (email, LinkedIn, textes FR/EN, parcours, certifications) sont au début de `assets/js/site.js`.
