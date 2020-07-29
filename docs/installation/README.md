---
sidebar: auto
---

# Installation

This package is a set of module to build a backend.


## Requirements



## Package

```bash
$ composer require webup/laravel-helium
```

## Js Dependencies

- [helium](https://github.com/agence-webup/helium) `npm i agence-webup/helium`

## Post install

Publish migrations, views and translations

```bash
$ php artisan vendor:publish --tag=helium
```