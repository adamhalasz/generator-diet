'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var name;

module.exports = yeoman.generators.Base.extend({
   
  prompting: function () {
    var done = this.async();
    
    // Have Yeoman greet the user.
    /*this.log(yosay(
      'Welcome to the ' + chalk.red('diet') + ' generator!'
    ));*/

    this.prompt({
        type    : 'input',
        name    : 'name',
        message : 'Your project name',
        default : this.appname // Default to current folder name
    }, function (answers) {
        name = answers.name;
        done();
        
    }.bind(this));
    
  },

  writing: function () {
      console.log('this.sourceRoot', this.sourceRoot())
      console.log('this.destinationPath', this.destinationPath())
    this.fs.copy(
      this.sourceRoot(),
      this.destinationPath()
    );
  },

  install: function () {
    this.installDependencies();
  }
});
