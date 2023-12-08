# Tundra
A comprehensive but not overwhelming CSS design system.

> [!NOTE]
> Just to say that as this is currently pre v1 there may be random breaking changes as I move styles around and fiddle with the colours, and I'm sorry about that.

## Naming conventions
Variable names are prefixed with a number 0 -> 999. <br />
Colours go from dark -> light, and sizes goes from small -> large.

### Variables
There are a series of css variables for the following:
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

To be honest you probably won't need to use these variables as you can just the classes for the text styles which are various combinations of these, but I'm including them for completeness sake.
- Font Weight (1-4)
	- `--font-weight-1` - `--font-weight-4`
- Font Size (1-9)
	- `--font-size-1` - `--font-size-9`
- Line height (1-5)
	- `--line-height-1` - `--line-height-5`
- Letter spacing (1-5)
	- `--letter-spacing-1` - `--letter-spacing-5`

### Classes
There are a series of classes for text, along with others for buttons, and text inputs.
- Headings - 6 levels of headings
	- Text styles: `.heading-1` - `.heading-6`
- Alt-Headings - levels of alternative headings, good for subheadings, or if you just want something a little thinner.
	- Text styles: `.alt-heading-1` - `.alt-heading-6`
- Body - text for paragraphs
	Text styles: `.body-1` - `.body-4`
- Link - for you links, it comes underlined.
	- Text styles: `.link-1` - `.link-4`
- Buttons - 4 button sizes, along with different styled variations
	- Text sizes: `.button-1` - `.button-4`
	- Variations: `.filled`, `.outline`, `.ghost`
	- Accent: `.red`, `.orange`, `.yellow`, `.green`, `.cyan`, `.blue`, `.purple`, `.pink`
- Labels - For labelling inputs, or anything else that you want
	- Text styles: `.label-1` - `.label-4`
- Inputs - Text based inputs
	- Text styles: `.input-1` - `.input-4`
	- Accent: `.red`, `.orange`, `.yellow`, `.green`, `.cyan`, `.blue`, `.purple`, `.pink`

## Usage
You can apply one of the class provided and then customise it as you need with the variables. You should try as much as possible to only use the provided classes and variables. Keep it simple, and don't overthink things.

Install via npm
```
npm install tundra-css
```

You can then import it from your node modules into a css file, if you do add it as a layer.
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
There are SCSS variables and mixins provided which you can use if you want to override or change things up. But you shouldn't really need them.
