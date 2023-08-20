const yaml = require("js-yaml");
const fs = require("fs");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("*.html");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addCollection("posts", function(collection) {
        return collection.getFilteredByGlob("_posts/*.md");
      });
};