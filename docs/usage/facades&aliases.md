# Facades & Aliases

## Facades

You may get access to the Helium tools using following facades:
- `Webup\LaravelHelium\Core\Facades\HeliumBreadcrumb` 
- `Webup\LaravelHelium\Core\Facades\HeliumFlash`
- `Webup\LaravelHelium\Core\Facades\HeliumHeader`

For convenience, you can use 
- `Webup\LaravelHelium\Core\Facades\Helium`

### Example

```php
use Webup\LaravelHelium\Core\Facades\HeliumHeader;

HeliumHeader::title("Laravel Helium");
```
is the same as

```php
use Webup\LaravelHelium\Core\Facades\Helium;

Helium::header()->title("Laravel Helium");
```

## Aliases

If your project support aliases, you can directly use:
- `HeliumBreadcrumb` 
- `HeliumFlash`
- `HeliumHeader`

or even
- `Helium`

### Example

```php
// No use needed; 
HeliumHeader::title("Laravel Helium");
```
is the same as

```php
// No use needed; 
Helium::header()->title("Laravel Helium");
```

`