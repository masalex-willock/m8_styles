# SIMPLE STYLE GUIDE
Some explanations for the styles and scripts guides.
Changes aimed at improving accessibility will always be pushed so don't DM me a lot of angry 'Emoji' when I make marque changes, AM JUST HUMAN.

### Buttons

`button` tag and an elemet with  `btn` class have the same styling.
```html
<button></button>
or
<a href="#" class="btn"></a>
```
As a personal preference, I only use the button tag when its a must for example in form and guides/tutorials but when creating things like download buttons, I rather use a link and punch in a `btn` class.
>On low RAM devices and very small screen phones for example those small Chinese button phones. nesting a `a` tag in a button wont help because *its not clickable*

##### Sizes
There are `4` class for button Sizes

+ `btn-xs` extra small button
```html
<button class="btn btn-xs"></button>
```
+ `btn-sm` small button
```html
<button class="btn btn-sm"></button>
```
+ `md` medium button
```html
<button class="btn btn-md"></button>
```
+ `lg`Large button
```html
<button class="btn btn-lg"></button>
```

These are mainly determined by the `font-size` and `padding` among several other properties.

##### widths
There are `3` button widths
>This can be used as a supporting class to the buttons and some other `html` tags.

+ `full` Occupies the full width of the parent container.
+ `long` Occupies a max of half the width of the parent container and not less than 2/3 of the same container.
+  `normal` Just the same as not including any extra classes.

###### ADVANCED buttons
##### Corners

##### Design










<style>
  @font-face{
  	font-family: 'Quicksand';
  	src: url('./necc/fonts/Quicksand.ttf') format('truetype');
  }

  p,li{font-family: Quicksand;}
</style>
