const sass = require("sass");

module.exports = function (eleventyConfig) {
  // Copy the contents of the 'public' directory to the output directory
  eleventyConfig.addPassthroughCopy({
    'public': '/'
  });

  // Add Sass (SCSS) as a supported template format in Eleventy
  eleventyConfig.addTemplateFormats("scss");

  // Register a new extension for Sass (SCSS) files
  eleventyConfig.addExtension("scss", {
    // Set the output file extension for compiled Sass files to 'css'
    outputFileExtension: "css", 

    // The 'compile' function is called once for each .scss file in the input directory
    compile: async function (inputContent) {
      // Compile the Sass code using the 'sass.compileString' function
      let result = sass.compileString(inputContent);

      // Return a render function that will be called during the build process
      return async (data) => {
        // Return the compiled CSS code
        return result.css;
      };
    },
  });
};
