const yaml = require("js-yaml");
const fs = require("fs");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("*.html");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addCollection("projects", function(collection) {
        return collection.getFilteredByGlob("projects/*.md");
      });
};