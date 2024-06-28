module.exports = function (grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: false,
        },
        files: {
          "main.css": "main.less",
        },
      },
    },
    uglify: {
      options: {
        compress: true,
        mangle: true,
      },
      files: {
        "main.min.css": "main.less",
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-uglify");

  grunt.registerTask("default", ["less", "uglify"]);
};
