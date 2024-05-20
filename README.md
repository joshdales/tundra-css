# Tundra
An opinionated and reasonably comprehensive, but not overwhelming, CSS design system.

> [!NOTE]
> Just to say that as this is currently pre v1 there may be random breaking changes as I move styles around and fiddle with the colours, and I'm sorry about that.

## Naming
I've aimed to name everything with the same numerical scale convention, there are no `small`, `medium`,`large`, etc sizes everything just uses sequentially increasing numbers. <br />
The property names are suffixed by a number 0 -> 999 or whatever the highest number in that scale might be.

- The colours go from dark -> light, I felt like this made the most sense as #000000 is black.
- The size and typography tokens go from small -> large.
- Element classes go from small -> large, eg. a button or inputs gets larger as you increase the size.
- Text classes go from small -> large.

## Usage
You can apply one of the class provided and/or then customise it as you need with the variables. Ideally where you can try to only use the provided classes and variables, keep it simple and don't overthink things.

### Custom-Properties / Variables
There are a series of css custom properties for the following:
- Colours (1-8)
	- `--neutral-1` - `--neutral-8`
	- `--red-1` - `--red-8`
	- `--orange-1` - `--orange-8`
	- `--yellow-1` - `--yellow-8`
	- `--green-1` - `--green-8`
	- `--cyan-1` - `--cyan-8`
	- `--blue-1` - `--blue-8`
	- `--purple-1` - `--purple-8`
	- `--pink-1` - `--pink-8`
- Radius (1-4)
	- `--radius-1` -`--radius-4`
- Space (1-14)
	- `--space-1` - `--space-14`

There are also these ones related to typography, though to be honest you probably won't need to use them as you can just use the text style classes which are just various combinations of these:
- Font Weight (1-4)
	- `--font-weight-1` - `--font-weight-4`
- Font Size (1-9)
	- `--font-size-1` - `--font-size-9`
- Line height (1-5)
	- `--line-height-1` - `--line-height-5`
- Letter spacing (1-5)
	- `--letter-spacing-1` - `--letter-spacing-5`

### Classes
There are a series of classes for text, along with others elements like buttons, and text inputs.
- Headings - 6 levels of headings
	- Text styles: `.heading-1` - `.heading-6`
- Alt-Headings - 6 levels of alterative headings that is a little heavier
	- Text styles: `.alt-heading-1` - `.alt-heading-6`
- Body - text for paragraphs and other large bodies of text
	- Text styles: `.body-1` - `.body-4`
- Link - for your links, underlined by default
	- Text styles: `.link-1` - `.link-4`
- Buttons - 4 button sizes, along with different styled variations
	- Text style and button sizes: `.button-1` - `.button-4`
	- Variations: `.filled`, `.outline`, `.ghost`
- Labels - For labelling inputs, or anything else that you want
	- Text styles: `.label-1` - `.label-4`
- Inputs - Text based inputs
	- Text styles and input sizes: `.input-1` - `.input-4`
- Inputs - Checkbox & radios
	- Input sizes: `.checkbox-1` - `checkbox-4`, and `.radio-1` - `radio-4`

### Customisation
The the element classes this is managed with colour classes: `.red`, `.orange`, `.yellow`, `.green`, `.cyan`, `.blue`, `.purple`, and `.pink`.
Each has numbered `accent` properties and sets the `accent-color` property as well, so you can apply a colour class to parent component or directly on an element to give it that accent, or make your own you just need to add `accent-1` - `accent-4` to a class:
```css
.colour {
	--accent-1: var(--colour-darkest);
	--accent-2: var(--colour-dark);
	--accent-3: var(--colour-light);
	--accent-4: var(--colour-lightest);
}
```
Generally the best way to think of it is like so:
1. `accent-1` The accent used when elements are in a hover state
2. `accent-2` The standard accent colour
3. `accent-3` The element is active
4. `accent-4` Used occasionally for variations or elements that have a higher contrast range.

If you have a button or input and there is accent class currently set on the element or a common ancestor then they will fallback to using the neutral colours as their accent.

## Installation
Install via npm (or your preferred package manager):
```
npm install tundra-css
```

You can then import it from your node modules into a css file, if you do I recommend that you add it as a layer so that you can override anything that you need.
```css
@import 'node_modules/tundra-css' layer(tundra);
```

Or link to the stylesheet.
```html
<link rel="stylesheet" href="node_modules/tundra/index.css" />
```

Or you could access it via a CDN:
- https://unpkg.com/tundra-css/index.css
- https://cdn.jsdelivr.net/npm/tundra-css/index.min.css

## Compatibility
This has been built with newer devices in mind - a lot of the colour palette uses the P3 colour gamut, however I've provided fallbacks for that if your display doesn't support it.

Though if you bowser doesn't support custom properties or the `@supports` rule I guess that you are out of luck 😢. Should be good as long as your browser has been updated since 2016.

## SCSS
There are SCSS variables and mixins provided which you can use if you want to override or change things up. They are there if you want them, the variables are names the same as the custom properties.
