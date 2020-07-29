# Configuration

Once you have publish laravel-helium files, you should have a new config file `config/helium.php`

## Browser tab title

```php
"title" => "Administration",
```

## Top left title

```php
"main_title" => "Administration",
```

## Menu

For both of single & dropdown menu :
 - `current_route` (optionnal) based on laravel route name
 - `icon` (required) must be a [feather  icon](https://feathericons.com/)
 - `url`& `links` can be either a laravel route name or a full url

### Single

```php
"Menu Label" => [
    "current_route" => "admin.home",
    "icon" => "home",
    "url" => 'admin.home',
],
```


### Dropdown

```php
"Repos" => [
    "current_route" => "admin.home",
    "icon" => "github",
    "links" => [
        "Agence Webup" => "https://github.com/agence-webup",
        "Laravel-helium" => "admin.home"
    ],
],
```

## Shortcuts

Shortcuts allow users to quickly access frequently used pages

Nested arrays can be used for spliting differents

Links can be either a laravel route name or a full url


```php
"shortcuts" => [
    [
        "Home" => "admin.home",
        "Helium" => "https://github.com/agence-webup/helium"
    ],
    [
        "Laravel Helium" => "https://github.com/agence-webup/laravel-helium",
        "Agence Webup" => "https://github.com/agence-webup"
    ]
],
```
