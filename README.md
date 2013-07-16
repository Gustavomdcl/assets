## Start Frontend Assets

#### About:

Assets is not another frontend framework. It's just some boilerplate css code written in Sass & Compass, which follows the SMACSS arquitecture. It's got a lean flexible grid system, some base styles and some very useful variables to get you started quickly.

#### Main files: (scss/)

1. **_variables.scss** - manipulate the variables in this file to fit you project needs.
2. **_mixins.scss** - at this moment this file contains only one mixin call 'respont-to' which is extremely useful for media queries.
3. **_base.scss** - in this file you find rules for the body, headings, links, forms, etc.
4. **_layout.scss** - this is probably most useful file in the repo, which contains the flexible grid system.
5. **_modules.scss** - empty for now, but this is where you should but your modules.
6. **main.scss** - this is where all comes together to be compiled into css.

#### How to use

1. Make sure you have Sass and Compass installed.
2. Open your terminal and clone the repo (clone https://github.com/leocristofani/assets.git assets).
3. Still in the terminal, cd into the assets file, type 'compass watch' to start watching for changes in your Sass files and have fun coding!
