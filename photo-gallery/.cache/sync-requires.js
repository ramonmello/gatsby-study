const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/ramon/Documents/power-sites/gatsby-study/photo-gallery/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/ramon/Documents/power-sites/gatsby-study/photo-gallery/src/pages/index.js")))
}

