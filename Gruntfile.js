'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    less:{
      production:{
        options:{
          paths:["stylesheets/**/*"]
        },
        files: {
          "stylesheets/main.css": "stylesheets/main.less"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
};
