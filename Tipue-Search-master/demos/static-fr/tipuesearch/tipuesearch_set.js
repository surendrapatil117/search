/*
Tipue Search 6.0
Copyright (c) 2015-2016 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/

// Start timer for search execution time. The value will be used in tipuesearch.js .
var startTime = new Date().getTime();

/*
Stop words
Stop words list from http://referencement-gratuit.and-co.ch/liste-stopwords-francais/
*/

var tipuesearch_stop_words = ["a", "à", "à demi", "à peine", "à peu près", "absolument", "actuellement", "ainsi", "alors", "apparemment", "approximativement", "après", "après-demain", "assez", "assurément", "au", "aucun", "aucunement", "aucuns", "aujourd'hui", "auparavant", "aussi", "aussitôt", "autant", "autre", "autrefois", "autrement", "avant", "avant-hier", "avec", "avoir", "beaucoup", "bien", "bientôt", "bon", "c'", "ça", "car", "carrément", "ce", "cela", "cependant", "certainement", "certes", "ces", "ceux", "chaque", "ci", "comme", "comment", "complètement", "d'", "d'abord", "dans", "davantage", "de", "début", "dedans", "dehors", "déjà", "demain", "depuis", "derechef", "des", "désormais", "deux", "devrait", "diablement", "divinement", "doit", "donc", "dorénavant", "dos", "droite", "drôlement", "du", "elle", "elles", "en", "en vérité", "encore", "enfin", "ensuite", "entièrement", "entre-temps", "environ", "essai", "est", "et", "étaient", "état", "été", "étions", "être", "eu", "extrêmement", "fait", "faites", "fois", "font", "force", "grandement", "guère", "habituellement", "haut", "hier", "hors", "ici", "il", "ils", "infiniment", "insuffisamment", "jadis", "jamais", "je", "joliment", "ka", "la", "là", "le", "les", "leur", "leurs", "lol", "longtemps", "lors", "ma", "maintenant", "mais", "mdr", "même", "mes", "moins", "mon", "mot", "naguère ,ne", "ni", "nommés", "non", "notre", "nous", "nouveaux", "nullement", "ou", "où", "oui", "par", "parce", "parfois", "parole", "pas", "pas mal", "passablement", "personne", "personnes", "peu", "peut", "peut-être", "pièce", "plupart", "plus", "plutôt", "point", "pour", "pourquoi", "précisément", "premièrement", "presque", "probablement", "prou", "puis", "quand", "quasi", "quasiment", "que", "quel", "quelle", "quelles", "quelque", "quelquefois", "quels", "qui", "quoi", "quotidiennement", "rien", "rudement", "s'", "sa", "sans", "sans doute", "ses", "seulement", "si", "sien", "sitôt", "soit", "son", "sont", "soudain", "sous", "souvent", "soyez", "subitement", "suffisamment", "sur", "t'", "ta", "tandis", "tant", "tantôt", "tard", "tellement", "tellement", "tels", "terriblement", "tes", "ton", "tôt", "totalement", "toujours", "tous", "tout", "tout à fait", "toutefois", "très", "trop", "tu", "un", "une", "valeur", "vers", "voie", "voient", "volontiers", "vont", "votre", "vous", "vraiment", "vraisemblablement"];


// Word replace

var tipuesearch_replace = {'words': [
     {'word': 'tipua', 'replace_with': 'tipue'},
     {'word': 'javscript', 'replace_with': 'javascript'},
     {'word': 'jqeury', 'replace_with': 'jquery'}
]};


// Weighting

var tipuesearch_weight = {'weight': [
     {'url': 'http://www.tipue.com', 'score': 200},
     {'url': 'http://www.tipue.com/search', 'score': 100},
     {'url': 'http://www.tipue.com/about', 'score': 100}
]};


// Stemming

var tipuesearch_stem = {'words': [
     {'word': 'e-mail', 'stem': 'courriel'},
     {'word': 'javascript', 'stem': 'jquery'},
     {'word': 'javascript', 'stem': 'js'}
]};


// Internal strings

var tipuesearch_string_1 = 'Aucun titre';
var tipuesearch_string_2 = 'Résultats de la recherche pour';
var tipuesearch_string_3 = 'À la place, rechercher pour';
var tipuesearch_string_4 = '1 résultat';
var tipuesearch_string_5 = 'résultats';
var tipuesearch_string_6 = 'Précédent';
var tipuesearch_string_7 = 'Suivant';
var tipuesearch_string_8 = 'Pas de résultat';
var tipuesearch_string_9 = 'Les mots courants sont largement ignorés';
var tipuesearch_string_10 = 'Requête est trop court';
var tipuesearch_string_11 = 'Aucune requête n’a été soumise';
var tipuesearch_string_12 = 'Doit être un minimum de';
var tipuesearch_string_13 = 'caractères';
var tipuesearch_string_14 = '&lt;&lt;';
var tipuesearch_string_15 = '&gt;&gt;';
var tipuesearch_string_16 = 'page(s) de résultats.';
var tipuesearch_string_17 = 'Points&nbsp;:';
var tipuesearch_string_18 = 'La recherche a duré $1 secondes.';