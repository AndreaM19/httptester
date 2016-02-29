// Draw routes.  Locomotive's router provides expressive syntax for drawing
// routes, including support for resourceful routes, namespaces, and nesting.
// MVC routes can be mapped to controllers using convenient
// `controller#action` shorthand.  Standard middleware in the form of
// `function(req, res, next)` is also fully supported.  Consult the Locomotive
// Guide on [routing](http://locomotivejs.org/guide/routing.html) for additional
// information.
module.exports = function routes() {
  this.root('pages#main');
  
  //Simple request
  this.match('/request', 'httptester#post', {via: 'POST'});
  this.match('/request', 'httptester#get', {via: 'GET'});
  this.match('/request', 'httptester#put', {via: 'PUT'});
  this.match('/request', 'httptester#del', {via: 'DELETE'});
  
//Request with parameters
  this.match('/request/:param', 'httptester#postparam', {via: 'POST'});
  this.match('/request/:param', 'httptester#getparam', {via: 'GET'});
  this.match('/request/:param', 'httptester#putparam', {via: 'PUT'});
  this.match('/request/:param', 'httptester#delparam', {via: 'DELETE'});
}
