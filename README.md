# Boulanger Framework
<!-- TOC -->

- [Boulanger Framework](#boulanger-framework)
	- [Template](#template)
	- [CSS](#css)
	- [JavaScript](#javascript)
	- [Breakpoints](#breakpoints)
	- [Utilities](#utilities)
		- [Clearfix](#clearfix)
		- [Colors](#colors)
		- [Backgrounds colors](#backgrounds-colors)
		- [Display](#display)
		- [Embeds](#embeds)
		- [Float](#float)
		- [Text align](#text-align)
		- [Text transform](#text-transform)
		- [Vertical align](#vertical-align)
	- [Container](#container)
	- [Grid](#grid)
	- [Mixins](#mixins)
	- [Fonts](#fonts)
	- [Heading](#heading)
	- [Paragraph](#paragraph)
	- [List](#list)
		- [Default](#default)
		- [Decimal](#decimal)
		- [Unstyled](#unstyled)
		- [Inline](#inline)
		- [Description](#description)
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
	<link rel="stylesheet" href="dist/css/boulanger-framework.min.css">
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

## Utilities
### Clearfix
```html
<div class="hub-clearfix">...</div>
```

### Colors
```
class="hub-color-blue"
class="hub-color-orange"
```

### Backgrounds colors
```
class="hub-bg-color-blue"
class="hub-bg-color-orange"
```

### Display
| Breakpoints | Classes              |
| ----------- | -------------------- |
| Défaut      | `.hub-{display}`     |
| <576px      | `.hub-{display}-xs-` |
| ≥576px      | `.hub-{display}-sm-` |
| ≥768px      | `.hub-{display}-md-` |
| ≥992px      | `.hub-{display}-lg-` |
| ≥1200px     | `.hub-{display}-xl-` |

```
class="hub-block"
class="hub-flex"
class="hub-inline-flex"
class="hub-inline"
class="hub-inline-block"
class="hub-none"
class="hub-table"
class="hub-table-cell"
```

### Embeds
```html
<div class="embed-responsive">
	<iframe src="..." allowfullscreen></iframe>
</div>
```

* embed
* iframe
* object
* video

### Float
| Breakpoints | Classes                 |
| ----------- | ----------------------- |
| Défaut      | `.hub-float-{value}`    |
| <576px      | `.hub-float-xs-{value}` |
| ≥576px      | `.hub-float-sm-{value}` |
| ≥768px      | `.hub-float-md-{value}` |
| ≥992px      | `.hub-float-lg-{value}` |
| ≥1200px     | `.hub-float-xl-{value}` |
```
class="float-left"
class="float-right"
class="float-none"
```

### Text align
```
class="hub-text-left"
class="hub-text-center"
class="hub-text-right"
class="hub-text-justify"
class="hub-text-nowrap"
```

### Text transform
```
class="hub-text-lowercase"
class="hub-text-uppercase"
class="hub-text-capitalize"
```

### Vertical align
```
class="hub-align-baseline"
class="hub-align-top"
class="hub-align-middle"
class="hub-align-bottom"
class="hub-align-text-top"
class="hub-align-text-bottom"
```

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
| <576px      | `.hub-col-xs-{value}` |
| ≥576px      | `.hub-col-sm-{value}` |
| ≥768px      | `.hub-col-md-{value}` |
| ≥992px      | `.hub-col-lg-{value}` |
| ≥1200px     | `.hub-col-xl-{value}` |

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

| Breakpoints | Classes                      |
| ----------- | ---------------------------- |
| Défaut      | `.hub-col-offset-{value}`    |
| <576px      | `.hub-col-xs-offset-{value}` |
| ≥576px      | `.hub-col-sm-offset-{value}` |
| ≥768px      | `.hub-col-md-offset-{value}` |
| ≥992px      | `.hub-col-lg-offset-{value}` |
| ≥1200px     | `.hub-col-xl-offset-{value}` |

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
[Démo](grid.html)

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
[Démo](heading.html)

---

## Paragraph
```
class="hub-p"
```
[Démo](paragraph.html)

---

## List
### Default
```html
<ul class="hub-list">
	<li>...</li>
</ul>
```

### Decimal
```html
<ol class="hub-list-decimal">
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

### Description
```html
<dl class="hub-list-description">
	<dt>...</dt>
	<dd>...</dd>
</dl>
```
[Démo](list.html)

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
[Démo](table.html)

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
...
```

---

## Collapse
```html
...
```

---

## Form
```html
...
```

---

## Modal
```html
...
```

---

## Nav
```html
...
```

---

## Pagination
```html
...
```

---