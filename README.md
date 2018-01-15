# Boulanger Framework
* [Template](#template)
* [CSS](#css)
* [JavaScript](#js)
* [Breakpoints](#breakpoints)
* [Grid](#grid)
* [Fonts](#fonts)
* [Heading](#heading)

## Template
```html
<!doctype html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<!-- CSS -->
	<link rel="stylesheet" href="dist/css/boulanger-framework.min.css">
	<title></title>
	<script type="javascript/text" src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
	<script type="text/javascript" src="dist/js/ie10-viewport-bug-workaround.js"></script>
	<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>
<body>

	...

	<!-- JavaScript -->
	<script type="text/javascript" src="dist/js/boulanger-framework.min.js"></script>
</body>
</html>
```

---

## CSS
```html
<link rel="stylesheet" href="dist/css/boulanger-framework.min.css">
```

---

## JavaScript
```html
<script type="text/javascript" src="dist/js/boulanger-framework.min.js"></script>
```

---

## Breakpoints
```
// XS (portrait phones)
@media (max-width: 575.99px) { ... }

// SM (landscape phones)
@media (min-width: 576px) and (max-width: 767.99px) { ... }

// MD (tablets)
@media (min-width: 768px) and (max-width: 991.99px) { ... }

// LG (desktops)
@media (min-width: 992px) and (max-width: 1199.99px) { ... }

// XL (large desktops)
@media (min-width: 1200px) { ... }
```

---

## Grid
Le Framework utilise un système de grilles, allant de 1 à 24 colonnes.

1 colonne représente 4.166% de la largeur du conteneur.

Il est possible de varier la largeur des colonnes selon la taille de l'écran (XS, SM, MD, LG, XL).

| Breakpoints | Classes        |
| ----------- | -------------- |
| Défaut      | `.hub-col-`    |
| <576px      | `.hub-col-xs-` |
| ≥576px      | `.hub-col-sm-` |
| ≥768px      | `.hub-col-md-` |
| ≥992px      | `.hub-col-lg-` |
| ≥1200px     | `.hub-col-xl-` |

```html
<div class="hub-row">
	<div class="hub-col-1"></div>
	<div class="hub-col-2"></div>
	<div class="hub-col-3"></div>
	<div class="hub-col-4"></div>
	<div class="hub-col-5"></div>
	<div class="hub-col-6"></div>
	<div class="hub-col-7"></div>
	<div class="hub-col-8"></div>
	<div class="hub-col-9"></div>
	<div class="hub-col-10"></div>
	<div class="hub-col-11"></div>
	<div class="hub-col-12"></div>
	<div class="hub-col-13"></div>
	<div class="hub-col-14"></div>
	<div class="hub-col-15"></div>
	<div class="hub-col-16"></div>
	<div class="hub-col-17"></div>
	<div class="hub-col-18"></div>
	<div class="hub-col-19"></div>
	<div class="hub-col-20"></div>
	<div class="hub-col-21"></div>
	<div class="hub-col-22"></div>
	<div class="hub-col-23"></div>
	<div class="hub-col-24"></div>
</div>
```

Les classes ci-dessous permettent de décaler les colonnes sur la droite.

| Breakpoints | Classes               |
| ----------- | --------------------- |
| Défaut      | `.hub-col-offset-`    |
| <576px      | `.hub-col-xs-offset-` |
| ≥576px      | `.hub-col-sm-offset-` |
| ≥768px      | `.hub-col-md-offset-` |
| ≥992px      | `.hub-col-lg-offset-` |
| ≥1200px     | `.hub-col-xl-offset-` |

```html
<div class="hub-row">
	<div class="hub-col-offset-1"></div>
	<div class="hub-col-offset-2"></div>
	<div class="hub-col-offset-3"></div>
	<div class="hub-col-offset-4"></div>
	<div class="hub-col-offset-5"></div>
	<div class="hub-col-offset-6"></div>
	<div class="hub-col-offset-7"></div>
	<div class="hub-col-offset-8"></div>
	<div class="hub-col-offset-9"></div>
	<div class="hub-col-offset-10"></div>
	<div class="hub-col-offset-11"></div>
	<div class="hub-col-offset-12"></div>
	<div class="hub-col-offset-13"></div>
	<div class="hub-col-offset-14"></div>
	<div class="hub-col-offset-15"></div>
	<div class="hub-col-offset-16"></div>
	<div class="hub-col-offset-17"></div>
	<div class="hub-col-offset-18"></div>
	<div class="hub-col-offset-19"></div>
	<div class="hub-col-offset-20"></div>
	<div class="hub-col-offset-21"></div>
	<div class="hub-col-offset-22"></div>
	<div class="hub-col-offset-23"></div>
	<div class="hub-col-offset-24"></div>
</div>
```
[Démo](grid.html)

---

## Fonts
```
class="hub-open-sans"
```

## Heading
[Démo](heading.html)

---

## Text align
```
class="hub-text-left"
class="hub-text-center"
class="hub-text-right"
class="hub-text-justify"
class="hub-text-nowrap"
```
[Démo](text-align.html)

---

## Text transform
```
class="hub-text-lowercase"
class="hub-text-uppercase"
class="hub-text-capitalize"
```
[Démo](text-transform.html)

---

## List
### Default
```html
<ul>
	<li>...</li>
</ul>
```

### Decimal
```html
<ol>
	<li>...</li>
</ol>
```

### Unstyled
```html
<ul class="hub-list-unstyled">
	<li>...</li>
</ul>
```

### Inline
```html
<ul class="hub-list-inline">
	<li>...</li>
</ul>
```
[Démo](list.html)