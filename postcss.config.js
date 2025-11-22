const purgecss = require("@fullhuman/postcss-purgecss");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    isProd &&
      purgecss({
        content: [
          "./public/**/*.html",
          "./src/**/*.vue",
          "./src/**/*.js"
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: [
          /^swiper-/,
          /^aos-/,
          /^animate__/,
          /show/,
          /hide/
        ]
      })
  ].filter(Boolean)
};
