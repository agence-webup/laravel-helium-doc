# Installation

## Package

```bash
$ composer require webup/laravel-helium
```

## JS Dependencies

- [helium](https://github.com/agence-webup/helium) `npm i agence-webup/helium`

## Post install

Publish migrations, views and translations

```bash
$ php artisan vendor:publish --tag=helium
```