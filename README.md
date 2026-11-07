# Site ONG OHANA Bénin – ongohana.org

Site statique (HTML, CSS, JavaScript), sans étape de compilation. 8 pages en français (`/`) et 8 pages en anglais (`/en/`), chacune avec sa propre mise en page.

```
index.html                  Accueil              en/index.html
a-propos/                   À propos             en/about/
projets/                    Nos projets          en/projects/
faire-un-don/               Faire un don         en/donate/
agir/                       Agir : parrainer, dons matériels, bénévolat  en/get-involved/
galerie/                    Galerie photos et vidéo    en/gallery/
contact/                    Contact              en/contact/
mentions-legales/           Mentions légales     en/legal-notice/
css/ (style, pages, effects)  js/app.js  img/ (WebP, logo, icônes, og.jpg)  media/ (vidéo d’accueil et 3 vidéos de la galerie)
404.html robots.txt sitemap.xml site.webmanifest
_headers netlify.toml .htaccess CNAME   sécurité, cache, redirection www
```
La vidéo d’accueil (`media/hero.mp4`) se remplace par un autre fichier du même nom. Les liens sont relatifs : le site s'ouvre aussi en double-cliquant sur `index.html`.

## Mise en ligne (une option)
1. **Cloudflare Pages ou Netlify (gratuit, recommandé)** : glisser-déposer le dossier, ajouter le domaine `ongohana.org`, créer les enregistrements DNS indiqués. HTTPS automatique.
2. **GitHub Pages** : pousser le dossier (le fichier `CNAME` est prêt).
3. **Hébergement classique (cPanel)** : envoyer tout le contenu dans `public_html` (le `.htaccess` gère HTTPS et la page 404).

Ensuite : Google Search Console, envoi de `https://ongohana.org/sitemap.xml`, test sur PageSpeed Insights.

## Aperçu des liens partagés (WhatsApp, Facebook, etc.)
- Images d’aperçu : `img/og-fr.jpg` (pages françaises) et `img/og-en.jpg` (pages anglaises), 1200×630. L’ancien `img/og.jpg` n’est plus utilisé. Après mise en ligne, actualiser le cache : Facebook Sharing Debugger, LinkedIn Post Inspector.
- Polices : Fredoka (titres) et Nunito (texte), via Google Fonts, proches des formes arrondies du logo.

## À brancher
- **Dons** (page Faire un don) : formulaire simulé. Brancher PayPal, ou FedaPay/KKiaPay pour le Mobile Money.
- **Formulaires** (contact, parrainage, bénévolat) : ouvrent la messagerie vers ongohanabenin@gmail.com. Pour un envoi direct : Formspree ou Netlify Forms.
- Si un service tiers est ajouté, élargir le `Content-Security-Policy` (`_headers` et `.htaccess`).

## À faire valider par l'ONG
- **Mentions légales** : compléter les champs surlignés en jaune dans `mentions-legales/index.html` et `en/legal-notice/index.html` (directeur de la publication, numéro d'enregistrement, hébergeur) et faire valider le texte.
- Les textes complétés (valeurs, présentation de l'équipe, questions fréquentes) et la chronologie.
- L'accord de diffusion des photos et de la vidéo d'enfants.
- Les numéros de téléphone, les noms de la présidente et de la directrice (non affichés), les coordonnées bancaires (non publiées).
