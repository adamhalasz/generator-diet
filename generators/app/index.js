var yeoman = require('yeoman-generator');

var name;

module.exports = yeoman.generators.Base.extend({
   
  prompting: function () {
    var done = this.async();
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
