# Simple JavaScript Slider
---

## Description:
Slider for any types of elements.
You must create html element with some id, it will be slider wrapper.
All html elements inside that wrapper will be slides, excepts two items, that will be controlls for changing slides.

##### Exaple:

```
<div id="simple-slider">
    <button class="slider-prev-btn">prev</button>
    <button class="slider-next-btn">next</button>
    <div class="slider-item">
        Some Content 1
    </div>
    <div class="slider-item">
        Some Content 2
    </div>
    <div class="slider-item">
        Some Content 3
    </div>
</div>
```

Default classes for slider items is: 'slider-item', for buttons: 'slider-prev-btn' and 'slider-next-btn',
but you can change it.

## Usage:

simleSlider.js contains js class: 'simpleSlider'. It got arguments: 
1. ID of slider wrapper (required)
2. Is auto changing slides nessesary (default: false)
3. Slides auto changing rate (default: 5000)
4. Class name of slides (default: slider-item)
5. Class name of button for previous slide (default: slider-prev-btn)
6. Class name of button for next slide (default: slider-next-btn)

So, minimum code you need, is:
```
const slider = new simpleSlider('some-slider-id');
```

Or if you need to manage it:
```
const slider = new simpleSlider('some-slider-id', true, 4000, 'item', 'prev-btn', 'next-btn');
```

Slider dont contain any styles, so you can customize it as you wish.

Also it contains simpleSlider.min.js with transpiled and minified code.