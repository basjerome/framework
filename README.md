# Framework
<!-- TOC -->

- [Framework](#framework)
	- [Template](#template)
	- [CSS](#css)
	- [JavaScript](#javascript)
	- [Breakpoints](#breakpoints)
	- [Utilities](#utilities)
	- [Container](#container)
	- [Grid](#grid)
	- [Mixins](#mixins)
	- [Fonts](#fonts)
	- [Heading](#heading)
	- [Paragraph](#paragraph)
	- [List](#list)
	- [Images](#images)
	- [Tables](#tables)
	- [Alerts](#alerts)
	- [Breadcrumb](#breadcrumb)
	- [Buttons](#buttons)
	- [Carousel](#carousel)
	- [Collapse](#collapse)
	- [Form](#form)
	- [Modal](#modal)
	- [Nav](#nav)
	- [Pagination](#pagination)

<!-- /TOC -->

## Template
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

---

## CSS
```html
<link rel="stylesheet" href="dist/css/framework.min.css">
```

---

## JavaScript
```html
<script type="text/javascript" src="dist/js/framework.min.js"></script>
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

## Utilities
**Clearfix**

```html
<div class="hub-clearfix">...</div>
```

> **Colors**

| Breakpoints | Classes                 |
| ----------- | ----------------------- |
| Défaut      | `.hub-color-{value}`    |
| <576px      | `.hub-color-{value}-xs` |
| ≥576px      | `.hub-color-{value}-sm` |
| ≥768px      | `.hub-color-{value}-md` |
| ≥992px      | `.hub-color-{value}-lg` |
| ≥1200px     | `.hub-color-{value}-xl` |

**Values :**

* black
* blue
* dark-grey
* orange
* white

**Backgrounds colors**

| Breakpoints | Classes                    |
| ----------- | -------------------------- |
| Défaut      | `.hub-bg-color-{value}`    |
| <576px      | `.hub-bg-color-{value}-xs` |
| ≥576px      | `.hub-bg-color-{value}-sm` |
| ≥768px      | `.hub-bg-color-{value}-md` |
| ≥992px      | `.hub-bg-color-{value}-lg` |
| ≥1200px     | `.hub-bg-color-{value}-xl` |

> Values :
* black
* blue
* dark-grey
* orange
* white

**Display**

| Breakpoints | Classes           |
| ----------- | ----------------- |
| Défaut      | `.hub-{value}`    |
| <576px      | `.hub-{value}-xs` |
| ≥576px      | `.hub-{value}-sm` |
| ≥768px      | `.hub-{value}-md` |
| ≥992px      | `.hub-{value}-lg` |
| ≥1200px     | `.hub-{value}-xl` |

> Values :
* block
* flex
* inline-flex
* inline
* inline-block
* none
* table
* table-cell

**Embeds**

```html
<div class="embed-responsive">
	{embed | iframe | object | video}
</div>
```
_Format 16/9_

**Float**

| Breakpoints | Classes                 |
| ----------- | ----------------------- |
| Défaut      | `.hub-float-{value}`    |
| <576px      | `.hub-float-{value}-xs` |
| ≥576px      | `.hub-float-{value}-sm` |
| ≥768px      | `.hub-float-{value}-md` |
| ≥992px      | `.hub-float-{value}-lg` |
| ≥1200px     | `.hub-float-{value}-xl` |

> Values :
* left
* righ
* none

**Text align**

| Breakpoints | Classes                |
| ----------- | ---------------------- |
| Défaut      | `.hub-text-{value}`    |
| <576px      | `.hub-text-{value}-xs` |
| ≥576px      | `.hub-text-{value}-sm` |
| ≥768px      | `.hub-text-{value}-md` |
| ≥992px      | `.hub-text-{value}-lg` |
| ≥1200px     | `.hub-text-{value}-xl` |

> Values :
* left
* center
* right
* justify
* nowrap

**Text transform**

| Breakpoints | Classes                |
| ----------- | ---------------------- |
| Défaut      | `.hub-text-{value}`    |
| <576px      | `.hub-text-{value}-xs` |
| ≥576px      | `.hub-text-{value}-sm` |
| ≥768px      | `.hub-text-{value}-md` |
| ≥992px      | `.hub-text-{value}-lg` |
| ≥1200px     | `.hub-text-{value}-xl` |

> Values :
* lowercase
* uppercase
* capitalize

**Vertical align**

| Breakpoints | Classes                |
| ----------- | ---------------------- |
| Défaut      | `.hub-align-{value}`    |
| <576px      | `.hub-align-{value}-xs` |
| ≥576px      | `.hub-align-{value}-sm` |
| ≥768px      | `.hub-align-{value}-md` |
| ≥992px      | `.hub-align-{value}-lg` |
| ≥1200px     | `.hub-align-{value}-xl` |

> Values :
* baseline
* top
* middle
* bottom
* text-top
* text-bottom

---

## Container
```html
<div class="hub-container">...</div>
```

---

## Grid
| Breakpoints | Classes               |
| ----------- | --------------------- |
| Défaut      | `.hub-col-{value}`    |
| <576px      | `.hub-col-{value}-xs` |
| ≥576px      | `.hub-col-{value}-sm` |
| ≥768px      | `.hub-col-{value}-md` |
| ≥992px      | `.hub-col-{value}-lg` |
| ≥1200px     | `.hub-col-{value}-xl` |

```html
<div class="hub-row">
	<div class="hub-col-1">...</div>
	<div class="hub-col-2">...</div>
	<div class="hub-col-3">...</div>
	<div class="hub-col-4">...</div>
	<div class="hub-col-5">...</div>
	<div class="hub-col-6">...</div>
	<div class="hub-col-7">...</div>
	<div class="hub-col-8">...</div>
	<div class="hub-col-9">...</div>
	<div class="hub-col-10">...</div>
	<div class="hub-col-11">...</div>
	<div class="hub-col-12">...</div>
	<div class="hub-col-13">...</div>
	<div class="hub-col-14">...</div>
	<div class="hub-col-15">...</div>
	<div class="hub-col-16">...</div>
	<div class="hub-col-17">...</div>
	<div class="hub-col-18">...</div>
	<div class="hub-col-19">...</div>
	<div class="hub-col-20">...</div>
	<div class="hub-col-21">...</div>
	<div class="hub-col-22">...</div>
	<div class="hub-col-23">...</div>
	<div class="hub-col-24">...</div>
</div>
```

**Décalage**

| Breakpoints | Classes                      |
| ----------- | ---------------------------- |
| Défaut      | `.hub-col-offset-{value}`    |
| <576px      | `.hub-col-offset-{value}-xs` |
| ≥576px      | `.hub-col-offset-{value}-sm` |
| ≥768px      | `.hub-col-offset-{value}-md` |
| ≥992px      | `.hub-col-offset-{value}-lg` |
| ≥1200px     | `.hub-col-offset-{value}-xl` |

```html
<div class="hub-row">
	<div class="hub-col-offset-1">...</div>
	<div class="hub-col-offset-2">...</div>
	<div class="hub-col-offset-3">...</div>
	<div class="hub-col-offset-4">...</div>
	<div class="hub-col-offset-5">...</div>
	<div class="hub-col-offset-6">...</div>
	<div class="hub-col-offset-7">...</div>
	<div class="hub-col-offset-8">...</div>
	<div class="hub-col-offset-9">...</div>
	<div class="hub-col-offset-10">...</div>
	<div class="hub-col-offset-11">...</div>
	<div class="hub-col-offset-12">...</div>
	<div class="hub-col-offset-13">...</div>
	<div class="hub-col-offset-14">...</div>
	<div class="hub-col-offset-15">...</div>
	<div class="hub-col-offset-16">...</div>
	<div class="hub-col-offset-17">...</div>
	<div class="hub-col-offset-18">...</div>
	<div class="hub-col-offset-19">...</div>
	<div class="hub-col-offset-20">...</div>
	<div class="hub-col-offset-21">...</div>
	<div class="hub-col-offset-22">...</div>
	<div class="hub-col-offset-23">...</div>
	<div class="hub-col-offset-24">...</div>
</div>
```
[Démo](docs/grid.html)

---

## Mixins
```
...
```

---

## Fonts
```
class="hub-open-sans"
```

---

## Heading
```
class="hub-h1"
class="hub-h2"
class="hub-h3"
class="hub-h4"
class="hub-h5"
class="hub-h6"
```
[Démo](docs/heading.html)

---

## Paragraph
```html
<p class="hub-p">...</p>
```
[Démo](docs/paragraph.html)

---

## List
**Default**

```html
<ul class="hub-list">
	<li>...</li>
</ul>
```

**Decimal**

```html
<ol class="hub-list-decimal">
	<li>...</li>
</ol>
```

**Unstyled**

```html
<ul class="hub-list-unstyled">
	<li>...</li>
</ul>
```

**Inline**

```html
<ul class="hub-list-inline">
	<li>...</li>
</ul>
```

**Description**

```html
<dl class="hub-list-description">
	<dt>...</dt>
	<dd>...</dd>
</dl>
```
[Démo](docs/list.html)

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
[Démo](docs/table.html)

---

## Alerts
```html
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
```html
...
```

---

## Form
```html
<form class="hub-form">
  <div class="hub-form-group">
    <label for="inputEmail">Label</label>
    <input type="email" id="inputEmail" aria-describedby="emailHelp" placeholder="Placeholder">
    <small id="emailHelp" class="form-text text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
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
```html
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
```html
...
```

---