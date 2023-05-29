# Development Documentation
## Home page
### Lessons learned & Best practices
* I originally intended to place the overview section above the homepage when the former expands. However, the grid layout used on the homepage caused it to be pushed to the side by the overview section. I tried to make them overlap by applying z-index to both sections, but this didn't work. I then learned that z-index only works on elements that have a position setting, so I applied this to all sections, which messed up the placement of elements. After several attempts, I used relative and absolute positioning and flexbox to fix it.
## User input form
![Desktop Home page comparison]
()
Mockup(Up) and Prototype(down)
![Mobile Home page comparison]
()
Mockup(left) and Prototype(right)

### Development process
### Iterations
### Improvements
### Lessons learned & Best practices
* Learned that in order to handle multiple images in js file, I need to use glob resolvers and import them using a wildcard (*). However, after adding type="module” attribute to the script.js tag in html, the onClick functions used to open the pop-up form and slide up overview can’t be triggered due to its global scope. To resolve this, I had to replace them with event listener functions to trigger the interactions.
## Overview
### Lessons learned & Best practices
* I attempted to utilize the IMDb API to locate the exact movie poster for the thumbnail image. However, it appears that all the available APIs require payment for permission to use. Thus, I chose to use preset images that align with the film's genre instead.
## Application Configuration:
### Screen dimensions and resolutions best for viewing the application
**Dimensions** (width x depth): 13-inch Macbook (30.41 x 21.24 cm)
**Resolutions**: 2560 x 1600 pixels
### Steps required to interact with the application
1.
2.
3.

## Deployment Procedures:
Download Glide.js for carousel effects with
```
npm install @glidejs/glide
```

To start the server:
```
npm run start
```

## Guidance for future developers:
## References
habibmhamadi. (2022). *multi-select-tag* [JS Library]. 
https://github.com/habibmhamadi/multi-select-tag

jedrzejchalubek. (2022). glide.js [JS Library]. 
https://github.com/glidejs/glide
