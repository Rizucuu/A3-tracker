# Development Documentation
## Home page
### Development process
### Iterations
### Improvements
### Lessons learned & Best practices
* I originally intended to place the overview section above the homepage when the former expands. However, the grid layout used on the homepage caused it to be pushed to the side by the overview section. I tried to make them overlap by applying z-index to both sections, but this didn't work. I then learned that z-index only works on elements that have a position setting, so I applied this to all sections, which messed up the placement of elements. After several attempts, I used relative and absolute positioning and flexbox to fix it.
## User input form
![Desktop Home page comparison]
(url)
Mockup(Up) and Prototype(down)
![Mobile Home page comparison]
(url)
Mockup(left) and Prototype(right)

### Development process
### Iterations
### Improvements
### Lessons learned & Best practices
* I attempted to use a GitHub library to create a dropdown list that allows for multiple genre selections, but its documentation is vague and incomplete, without any explanations on how it works and the output it produces. Consequently, I couldn’t retrieve all of the selected options to be used in JS functions. I then switched to the recommended tagify library, which gives clear and detailed instructions throughout, and I was able to track and utilize all the selected options. Through this experience, I have come to understand the significance of utilizing a thoroughly documented library and the benefits of keeping track of the development process.
## Overview
### Development process
### Iterations
### Improvements
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
jedrzejchalubek. (2022). glide.js [JS Library]. 
https://github.com/glidejs/glide

Yair Even Or. (2023). tagify [JS Library]. 
https://github.com/yairEO/tagify

## Assets
Freepik. (n.d.). *Layout of popcorn with cinema objects* [image]. Freepik. 
https://www.freepik.com/free-photo/layout-popcorn-with-cinema-objects_2317675.htm#query=movie&position=19&from_view=search&track=robertav1_2_sidr 

Gamer Land. (n.d.). *Mafia 2 Definitive Edition 4k* [image]. Pinterest. 
https://www.pinterest.com.au/pin/446560119306578111/ 

WallpaperFlare. (n.d.). *HD wzllpaper: Dunkirk* [image]. Wallpaper Flare.
https://www.wallpaperflare.com/action-drama-2017-4k-dunkirk-christopher-nolan-history-wallpaper-qrryk

WallpaperFlare. (n.d.). *HD wzllpaper: anarchy* [image]. Wallpaper Flare.
https://www.wallpaperflare.com/anarchy-biker-crime-drama-series-sons-thriller-wallpaper-bhckc

WallpaperFlare. (n.d.). *HD wzllpaper: action, adventure* [image]. Wallpaper Flare.
https://www.wallpaperflare.com/action-adventure-drama-film-helicopter-movie-poster-rambo-wallpaper-moekn

WallpaperFlare. (n.d.). *HD wzllpaper: fantasy, science fiction* [image]. Wallpaper Flare.
https://www.wallpaperflare.com/fantasy-science-fiction-mountains-sci-fi-planets-digital-art-wallpaper-bldeg

WallpaperFlare. (n.d.). *HD wzllpaper: silhouette* [image]. Wallpaper Flare.
https://www.wallpaperflare.com/silhouette-of-person-standing-in-front-of-tree-wallpaper-game-animation-illustration-wallpaper-hib

WallpaperFlare. (n.d.). *HD wzllpaper: Rick and Morty* [image]. Wallpaper Flare.
https://www.wallpaperflare.com/rick-and-morty-fan-art-rick-and-morty-digital-wallpaper-cartoons-wallpaper-poaoz

WallpaperFlare. (n.d.). *HD wzllpaper: hacker* [image]. Wallpaper Flare.
https://www.wallpaperflare.com/1920x1080-px-anarchy-computer-hacker-hacking-internet-wallpaper-sthpq

WallpaperFlare. (n.d.). *HD wzllpaper: comedy* [image]. Wallpaper Flare.
https://www.wallpaperflare.com/comedy-how-i-met-your-mother-series-sitcom-television-wallpaper-mkdiq

