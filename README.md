## Table of Contents

- [Project Structure](#project-structure)
- [Running](#running)
- [Modifying](#modifying)
  - [Awards](#awards)
  - [Clients](#clients)
  - [Landing Page Segments](#landingpagesegments)
  - [Lectures](#lectures)
  - [Publications](#publicationdata)
  - [Projects](#projects)

## Project Structure
```
|src (main source directory)
|-Data (global configuration for everything)
|-Views (pages like About, Project Details, etc.)
|-Assets (main static assets directory)
|-Components (main site components)
|-Containers (logical containers)
|-Stores (redux stores)
|public (contains unprocessed images and other public assets)
```

## Running
1. Clone this repository locally
2. `cd` into the directory (*ex.* `cd /home/lubosergeev/GitHub/sergeev`)
3. run `yarn` to install project dependencies
  * running `yarn start` will launch the project in development mode
  * running `yarn build` will start creating an optimized build for production

## Modifying
Files are listed without their `.js` extensions

### Awards
- `image` `object` - used with `require` (*ex.* `require('../Assets/Awards/01 Trierenberg Grand Prix.png')`)
- `year` `number`
- `name` `string`
- `description` `string`
- `link` `object`
  - `href` `string` - link to the award
  - `text` `string` - text to display

### Clients
- `name` `string`
- `imagePath` `string` - points to the image relative to the `public/Clients/` directory

### LandingPageSegments
- `backgroundImage` `object` - must be used with `require` (*ex.* `require('../Assets/Projects/As light as/High Res/As light as 01.jpg?type=blurred')`) and remember to append `?type=blurred`
- `title` `string`
- `color` `string` - RGB hexadecimal (*ex.* `#FFFFFF` for white)
- `seondaryColor` `string` - color of the button after it has been hovered
- `backgroundPosition` `string` - can be used to move the picture along the X and Y axis ([more information on values](https://www.w3schools.com/cssref/pr_background-position.asp)). *Ignored on full-sized segments.*
- `linkTo` `string` - where the "View Project" button points. Use the items from `projectData` to find their `slug` (url) to keep things consistent.
- `isExplicit` `bool` - indicates if the content is not suitable for minors
- `halfWidth` `bool` - makes the project take up half as much as the rest

### Lectures
- `name` `string`
- `image` `object` - used with `require`
- `paragraphs` `object` - list of paragraphs to display with content
  - `image` `object` - used with require
  - `video` `string` - the video's id from youtube (*ex.* https://www.youtube.com/watch?v=`pv0RBtAivLg`, that last part is the id)
  - `text` `string` - any text you might want to put in

### PublicationData
- `name` `string`
- `place` `string` - (*ex.* Retouching Academy, USA)
- `link` `string` - link to the publication
- `logo` `object` - logo for the publication
- `videoUrl` `string` - link to the video
- `videoThumbnail` `string` - thumbnail to use for hthe preview

### Projects
The main file (`Projects/index.js`) contains all of the projects and in order for a project to be active it must be referenced there like the others are.
- `slug` `string` - the url where the project will be located (must be url-friendly, you can use [this tool](https://blog.tersmitten.nl/slugify/))
- `title` `string`
- `type` `string`
- `description` `string`
- `backgroundColor` `string` - hexadecimal color string (*ex.* `#FFFFFF` usually)
- `scenes` `array` - all scenes, defined in order of preference
  - `image` `object` - use with `require`, do not forget `?type=blurred`
  - `simple` `bool` - whether this is a simple scene with no animations or anything fancy
  - `backgroundPosition` `string` - how to offset the image (by default is `center center`, [more information on values](https://www.w3schools.com/cssref/pr_background-position.asp))
  - `subscenes` `array` - list of subscenes for this scene, ordered by preference
    - `scrollTo` `object` - where to zoom to if the screen should be zoomed
      - `x` `number` - number in pixels to move along the X-axis, can be negative
      - `y` `number` - number in pixels to move along the Y-axis, can be negative
      - `scale` `number` - how much to zoom in on image (by default is `2`)
    - `offsetMultiplier` `number` - how many tenths should the text slow down at from the bottom of the screen (*ex.* if `10` the scrolling text will slow down at the top)
    - `title` `string`
    - `subtitle` `string`
    - `textClass` `string` - a list of predefined CSS classes

      (*ex.* `col-sm-offset-8 col-sm-3 text--right` or `col-sm-offset-1 col-sm-3`)
      - `col-sm-offset-N` - where N is the amount of columns to offset text by
      - `col-sm-N` - where N is the amount of columns text should take up at most
      - `text--dark` - makes the text use dark colors
      - `text--left|text--center|text--right` - align the text
