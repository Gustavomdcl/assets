## Starter Frontend Assets

#### About:

Assets is not another frontend framework. It's just some boilerplate css code written in **Sass** & **Compass**, which follows the **SMACSS** arquitecture. It's got a lean flexible grid system, some base styles and some very useful variables to get you started quickly.

#### Main files: (scss/)

1. **_variables.scss** - manipulate the variables in this file to fit your project needs.
2. **_mixins.scss** - at this moment this file contains only one mixin call 'respont-to' for media queries.
3. **_base.scss** - in this file you find rules for the body, headings, links, forms, etc.
4. **_layout.scss** - this is probably most useful file in the repo, which contains the flexible grid system.
5. **_modules.scss** - empty for now, but this is where you should but your modules.
6. **main.scss** - this is where everything comes together.

#### How to use

1. Make sure you have **Sass** and **Compass** installed.
2. Open your terminal and clone the repo (clone https://github.com/leocristofani/assets.git assets).
3. Open scss/_layout.scss and remove lines 29 - 31, as they're just there to showcase the grid system in the examples.html page.
4. In your terminal, cd into the assets file, type 'compass watch' to start watching for changes in your Sass files and have fun coding!

#### The Grid System

- The grid system is composed of three main classes: 'l-container', 'l-row' and 'l-col'.
- Layout selectors are prefixed with 'l-' as recommended by the SMACSS arquitecture.
<<<<<<< HEAD
- Column width is percentage based and utilize the 'border-sizing: border-box' property to make it easier to calculate and modify. For instance, you can set the number of columns you need by editing a single variable in scss/_layout.scss called $col_columns.
=======
- Columns' width are percentage based and utilize the 'border-sizing: border-box' property to have it easier for column width calculation and future modification. You can for example, set the number of columns you wish to use editing a single variable ($col_columns in scss/_layout.scss).
>>>>>>> 42fb2c82c41de54937821e842b8ea0898556790d

