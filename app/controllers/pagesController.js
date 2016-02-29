var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var pagesController = new Controller();

pagesController.main = function() {
  this.title = 'HTTP Tester';
  this.render();
}

module.exports = pagesController;
