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

```php
"shortcuts" => [
    [
        "Voir la dernière facture" => "admin.home",
        "Voir la première facture" => "admin.home"
    ],
    [
        "Voir la liste des clients" => "admin.home",
        "Ajouter un client" => "admin.home"
    ]
],
```

## Modules

[contact](https://github.com/agence-webup/helium)

[setting](https://github.com/agence-webup/helium)

[redirection](https://github.com/agence-webup/helium)
