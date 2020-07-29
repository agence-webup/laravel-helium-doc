# Layout

## Box

```html
<x-helium-box :padding="false">
    <x-slot name="header">
    </x-slot>
    
    Content

    <x-slot name="footer">    
    </x-slot>
</x-helium-box>
```

| Attribute      |     Type     |     Required     |       Default        |     Role     |
| :------------- |:------------:|:----------------:|:--------------------:| :------------:|
| :padding       |     boolean  |        NO        |        true          | Define if box need padding or not |


## Box Header
```html
<x-helium-box-header title="Header title" :actions="[
    'Item 1' => [
        'route' => 'admin.home',
        'danger' => true
    ],
    'Item 2' => 'https://github.com/agence-webup/laravel-helium',
]" />
```
| Attribute      |     Type     |     Required     |       Default        |     Role     |
| :------------- |:------------:|:----------------:|:--------------------:| :------------:|
| title          |     string   |       YES        |                      | Define the header's title|
| :actions       |     array    |        NO        |          []          | Define the header's action |

### Notes

1) **Actions routes can be either laravel route name or full url.**
2) **Items are sorted automatically through their dangerousness.**

From the example above

| Expectation   |               |  Reality     |
| ------------- |:-------------:| ------------:|
| Item 1        |               | Item 2       |
| Item 2        |               | Item 1       |
3) **Some nested keys are reserved or forbidden.**

Reserved : 
- route (string)
- class (string)
- danger (boolean)
- warning (boolean)

Forbidden:
- style (will be ignored)


