<!-- TOC -->

- [Getting started](#getting-started)
	- [Sources](#sources)
	- [Starter template](#starter-template)
- [Layout](#layout)
	- [Breakpoints](#breakpoints)
	- [Container](#container)
	- [Grid](#grid)
	- [Mixins](#mixins)
- [Content](#content)
	- [Heading](#heading)
	- [Paragraph](#paragraph)
	- [Lists](#lists)
	- [Images](#images)
	- [Tables](#tables)
- [Components](#components)
	- [Alerts](#alerts)
	- [Breadcrumb](#breadcrumb)
	- [Buttons](#buttons)
	- [Carousel](#carousel)
	- [Collapse](#collapse)
	- [Form](#form)
	- [Modal](#modal)
	- [Nav](#nav)
	- [Pagination](#pagination)
- [Utilities](#utilities)
	- [Clearfix](#clearfix)
	- [Backgrounds colors](#backgrounds-colors)
	- [Colors](#colors)
	- [Display](#display)
	- [Embed](#embed)
	- [Float](#float)
	- [Fonts](#fonts)
	- [Font size](#font-size)
	- [Text align](#text-align)
	- [Text transform](#text-transform)
	- [Vertical align](#vertical-align)

<!-- /TOC -->

# Getting started

## Sources

```html
<!-- /CSS -->
<link rel="stylesheet" href="dist/css/framework.min.css">

<!-- /JavaScript -->
<script type="text/javascript" src="dist/js/framework.min.js"></script>
```

---

## Starter template

```html
<!doctype html>
<html lang="fr">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<!-- CSS -->
		<link rel="stylesheet" href="dist/css/framework.min.css">
		<title>...</title>
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
		<script type="text/javascript" src="dist/js/framework.min.js"></script>
	</body>
</html>
```

# Layout

## Breakpoints

```bash
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

## Container

```html
<div class="hub-container">...</div>
```

---

## Grid

> **/!\ Pour supprimer les espaces indésirables entre les _"col"_, pensez à ajouter des balises de commentaires entre chaque _"col"_, comme dans les exemples ci-dessous !**

| Breakpoints | Classes               |
| ----------- | --------------------- |
| Défaut      | `.hub-col-{value}`    |
| XS          | `.hub-col-{value}-xs` |
| SM          | `.hub-col-{value}-sm` |
| MD          | `.hub-col-{value}-md` |
| LG          | `.hub-col-{value}-lg` |
| XL          | `.hub-col-{value}-xl` |

_Values : {1 ~ 24}_

```html
<div class="hub-row">
	<div class="hub-col-12">...</div><!--
	--><div class="hub-col-12">...</div>
</div>
```

> **Offset**

| Breakpoints | Classes                      |
| ----------- | ---------------------------- |
| Défaut      | `.hub-col-offset-{value}`    |
| XS          | `.hub-col-offset-{value}-xs` |
| SM          | `.hub-col-offset-{value}-sm` |
| MD          | `.hub-col-offset-{value}-md` |
| LG          | `.hub-col-offset-{value}-lg` |
| XL          | `.hub-col-offset-{value}-xl` |

_Values : {1 ~ 24}_

```html
<div class="hub-row">
	<div class="hub-col-8">...</div><!--
	--><div class="hub-col-8 hub-col-offset-8">...</div>
</div>
```

> **Vertical align**

```html
<div class="hub-row">
	<div class="hub-col-8 hub-align-top">...</div><!--
	--><div class="hub-col-8 hub-align-middle">...</div><!--
	--><div class="hub-col-8 hub-align-bottom">...</div>
</div>
```

[Démo](https://basjerome.github.io/framework/)

---

## Mixins

```bash
...
```

---

# Content

## Heading

```bash
class="hub-h1"
class="hub-h2"
class="hub-h3"
class="hub-h4"
class="hub-h5"
class="hub-h6"
```

[Démo](https://basjerome.github.io/framework/)

---

## Paragraph

```html
<p class="hub-p">...</p>
```

[Démo](https://basjerome.github.io/framework/)

---

## Lists

> **Default**

```html
<ul class="hub-list">
	<li>...</li>
</ul>
```

> **Decimal**

```html
<ol class="hub-list-decimal">
	<li>...</li>
</ol>
```

> **Unstyled**

```html
<ul class="hub-list-unstyled">
	<li>...</li>
</ul>
```

> **Inline**

```html
<ul class="hub-list-inline">
	<li>...</li>
</ul>
```

> **Description**

```html
<dl class="hub-list-description">
	<dt>...</dt>
	<dd>...</dd>
</dl>
```

[Démo](https://basjerome.github.io/framework/)

---

## Images

```html
<img src="..." alt="..." class="hub-img" />
```

---

## Tables

```html
<table class="hub-table">
	<thead>
		<tr>
			<td></td>
			<th>...</th>
			<th>...</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>...</th>
			<td>...</td>
			<td>...</td>
		</tr>
	</tbody>
</table>
```

[Démo](https://basjerome.github.io/framework/)

---

# Components

## Alerts

```bash
...
```

---

## Breadcrumb

```html
<nav class="hub-breadcrumb" aria-label="breadcrumb">
  <ol itemscope itemtype="http://schema.org/BreadcrumbList">
    <li itemprop="itemListElement" itemscope
      itemtype="http://schema.org/ListItem">
	  	<a href="#" title="..." itemprop="item">
		  <span itemprop="name">Home</span>
		</a>
		<meta itemprop="position" content="1" />
	  </li>
    <li itemprop="itemListElement" itemscope
      itemtype="http://schema.org/ListItem">
	  	<a href="#" title="..." itemprop="item"><span itemprop="name">Parent</span></a>
		<meta itemprop="position" content="2" />
	  </li>
    <li itemprop="itemListElement" itemscope
      itemtype="http://schema.org/ListItem" aria-current="page">
	  	<span itemprop="name">Current</span>
		<meta itemprop="position" content="3" />
	</li>
  </ol>
</nav>
```

---

## Buttons

```html
<a href="#" class="hub-btn hub-btn-orange" title="...">...</button>
<button class="hub-btn hub-btn-orange" type="button">...</button>
```

---

## Carousel

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.1.0/css/swiper.min.css">

<!-- Slider main container -->
<div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        ...
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
</div>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.1.0/js/swiper.min.js"></script>
<script type="text/javascript">
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
</script>
```

---

## Collapse

```bash
...
```

---

## Form

```html
<form class="hub-form">
  <div class="hub-form-group">
    <label for="inputEmail">Label</label>
    <input type="email" id="inputEmail" aria-describedby="emailHelp" placeholder="Placeholder">
  </div>
  <div class="hub-form-group">
    <label for="inputPassword">Label</label>
    <input type="password" id="inputPassword" placeholder="Placeholder">
  </div>
  <div class="hub-form-group">
    <input type="checkbox" id="inputCheck">
    <label for="inputCheck">Label</label>
  </div>
  <button type="submit" class="hub-btn hub-btn-orange">...</button>
</form>
```

---

## Modal

```bash
...
```

---

## Nav

```html
<nav class="hub-nav">
	<ul>
		<li><a href="#" title="...">...</a></li>
		<li><a href="#" title="...">...</a></li>
		<li><a href="#" title="...">...</a></li>
	</ul>
</nav>
```

---

## Pagination

```bash
...
```

---

# Utilities

## Clearfix

```html
<div class="hub-clearfix">...</div>
```

---

## Backgrounds colors

| Breakpoints | Classes                    |
| ----------- | -------------------------- |
| Défaut      | `.hub-bg-color-{value}`    |
| XS          | `.hub-bg-color-{value}-xs` |
| SM          | `.hub-bg-color-{value}-sm` |
| MD          | `.hub-bg-color-{value}-md` |
| LG          | `.hub-bg-color-{value}-lg` |
| XL          | `.hub-bg-color-{value}-xl` |

_Values : {black | blue | dark-grey | orange | white}_

---

## Colors

_Values : {black | blue | dark-grey | orange | white}_

| Breakpoints | Classes                 |
| ----------- | ----------------------- |
| Défaut      | `.hub-color-{value}`    |
| XS          | `.hub-color-{value}-xs` |
| SM          | `.hub-color-{value}-sm` |
| MD          | `.hub-color-{value}-md` |
| LG          | `.hub-color-{value}-lg` |
| XL          | `.hub-color-{value}-xl` |

---

## Display

| Breakpoints | Classes           |
| ----------- | ----------------- |
| Défaut      | `.hub-{value}`    |
| XS          | `.hub-{value}-xs` |
| SM          | `.hub-{value}-sm` |
| MD          | `.hub-{value}-md` |
| LG          | `.hub-{value}-lg` |
| XL          | `.hub-{value}-xl` |

_Values : {block | flex | inline-flex | inline | inline-block | none | table | table-cell}_

---

## Embed

```html
<div class="hub-embed">
	{embed | iframe | object | video}
</div>
```

_Format 16/9_

---

## Float

| Breakpoints | Classes                 |
| ----------- | ----------------------- |
| Défaut      | `.hub-float-{value}`    |
| XS          | `.hub-float-{value}-xs` |
| SM          | `.hub-float-{value}-sm` |
| MD          | `.hub-float-{value}-md` |
| LG          | `.hub-float-{value}-lg` |
| XL          | `.hub-float-{value}-xl` |

_Values : {left | righ | none}_

---

## Fonts

| Classes                            |
| ---------------------------------- |
| `.hub-open-sans-light`             |
| `.hub-open-sans-light-italic`      |
| `.hub-open-sans`                   |
| `.hub-open-sans-italic`            |
| `.hub-open-sans-semi-bold`         |
| `.hub-open-sans-semi-bold-italic`  |
| `.hub-open-sans-bold`              |
| `.hub-open-sans-bold-italic`       |
| `.hub-open-sans-extra-bold`        |
| `.hub-open-sans-extra-bold-italic` |

_Use in CSS :_

```css
/* Open Sans Light */
... {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 300;
}

/* Open Sans Light Italic */
... {
  font-family: 'Open Sans', sans-serif;
  font-style: italic;
  font-weight: 300;
}

/* Open Sans Regular */
... {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
}

/* Open Sans Regular Italic */
... {
  font-family: 'Open Sans', sans-serif;
  font-style: italic;
  font-weight: 400;
}

/* Open Sans Semi-Bold */
... {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
}

/* Open Sans Semi-Bold Italic */
... {
  font-family: 'Open Sans', sans-serif;
  font-style: italic;
  font-weight: 600;
}

/* Open Sans Bold */
... {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
}

/* Open Sans Bold Italic */
... {
  font-family: 'Open Sans', sans-serif;
  font-style: italic;
  font-weight: 700;
}

/* Open Sans Extra-Bold */
... {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 800;
}

/* Open Sans Extra-Bold Italic */
... {
  font-family: 'Open Sans', sans-serif;
  font-style: italic;
  font-weight: 800;
}
```

---

## Font size

| Breakpoints | Classes                |
| ----------- | ---------------------- |
| Défaut      | `.hub-fs-{value}`    |
| XS          | `.hub-fs-{value}-xs` |
| SM          | `.hub-fs-{value}-sm` |
| MD          | `.hub-fs-{value}-md` |
| LG          | `.hub-fs-{value}-lg` |
| XL          | `.hub-fs-{value}-xl` |

_Values : {8 ~ 30 | 35 | 40 | 45 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90 | 95 | 100}_

---

## Text align

| Breakpoints | Classes                |
| ----------- | ---------------------- |
| Défaut      | `.hub-text-{value}`    |
| XS          | `.hub-text-{value}-xs` |
| SM          | `.hub-text-{value}-sm` |
| MD          | `.hub-text-{value}-md` |
| LG          | `.hub-text-{value}-lg` |
| XL          | `.hub-text-{value}-xl` |

_Values : {left | center | right | justify | nowrap}_

---

## Text transform

| Breakpoints | Classes                |
| ----------- | ---------------------- |
| Défaut      | `.hub-text-{value}`    |
| XS          | `.hub-text-{value}-xs` |
| SM          | `.hub-text-{value}-sm` |
| MD          | `.hub-text-{value}-md` |
| LG          | `.hub-text-{value}-lg` |
| XL          | `.hub-text-{value}-xl` |

_Values : {lowercase | uppercase | capitalize}_

---

## Vertical align

| Breakpoints | Classes                 |
| ----------- | ----------------------- |
| Défaut      | `.hub-align-{value}`    |
| XS          | `.hub-align-{value}-xs` |
| SM          | `.hub-align-{value}-sm` |
| MD          | `.hub-align-{value}-md` |
| LG          | `.hub-align-{value}-lg` |
| XL          | `.hub-align-{value}-xl` |

_Values : {baseline | top | middle | bottom | text-top | text-bottom}_