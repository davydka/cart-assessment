# React/Redux Shopping Cart Code Assessment

This is a copy of the [Redux Shopping Cart Example](https://github.com/reactjs/redux/tree/master/examples/shopping-cart).

## Getting Started

* `yarn`
* `yarn start`

## Decision Making Process

* General Approach - In order focus on achieving the tasks at hand, focused on implementation and then cleaning up and organizing emergent patterns and designs. 
* Responsive Design - Started with a mobile-first approach. Implemented designs in mobile view, then added tablet and desktop overrides in breakpoints as scss mixin.
    * Initial scss approach used one large style file. Towards the end, styles were organized to their individual components.
        * See late reorganizing commit [here](https://github.com/davydka/cart-assessment/commit/b320d16b91ca0664b64cfa0eeb30d18c99dfc044)
        * See initial scss approach [here](https://github.com/davydka/cart-assessment/commit/7e0946ae84f87c6db9f6309cba982bb1a9744adb) and [here](https://github.com/davydka/cart-assessment/commit/9f977b52d9f52dc527268ca6681101dbbfb460e9)
        * Further improvements: have component level scss be scoped to component only. I.E. be able to use generic classnames like '.container' without polluting the global css space.
    * Created modal open/close state in Redux store - attached to Cart State
        * Further improvements - create a UI specific Redux store, separated from the Data Redux store
* Enhance Cart Functionality
    * Remove an Item - considering the red text in the design for this button, implemented this as an immediate update that bypasses the Update button
        * Used Redux to entirely remove a product id from the cart state. See commit [here](https://github.com/davydka/cart-assessment/commit/9e281ce2975a654924c55162d02e9d3ece0c6df0)
    * Update Item Quantity - Implemented this function as follows:
        * User add item(s) to cart
        * In cart modal - user can edit plus/minus buttons to change quantity amount of items added to cart
            * On clicking update, the Total, Tax, and Grand Total fields are updated with the new quantities entered
                * These edits respect the products inventory restrictions
            * When closing the cart, the temporary quantity edits are discarded
            * To do this, turned Cart component into a classic stateful component to keep track of local state
                * see commit [here](https://github.com/davydka/cart-assessment/commit/0a3e886d0f1f4da10451dfcc2ba5ba371315d61d)
* Hook up Product API
    * Modified api/shop, used `axios` to `get` data from the products endpoint
        * Products endpoint differed slightly from example data, should have read this through in the beginning and updated the example data then
        * see commit [here](https://github.com/davydka/cart-assessment/commit/e1320c0b8e59caa321ed55a0242b240e237d6236)

## [Tasks](/tasks.md)

* see link above

## FUN

* Created a last minute psychedelic shopping cart effect
    * Available on github pages here: [https://davydka.github.io/cart-assessment/](https://davydka.github.io/cart-assessment/)
    * Disconnected from live products endpoint, uses sample data
    * Is a completely last-minute WIP (work-in-progress)
        * Cart doesn't show effect correctly
        * Performance-wise should ideally only have on canvas element on the page
    * Uses a growing personal library of GLSL shader functions being developed while working through [The Book of Shaders](https://thebookofshaders.com/)
        * Shader functions so far include "divs" and images that can positioned on a pixel level (frag shaders have a 0.0 - 1.0 coordinate system)

![Psych Shopping Cart](giphy.gif)
