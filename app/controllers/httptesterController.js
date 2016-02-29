var locomotive = require('locomotive')
, Controller = locomotive.Controller;

var httptesterController = new Controller();

//Simple request
httptesterController.post = function() {
	console.log('\n-------------------------------------------------');
	console.log('Request received: POST');
	console.log('Request body:');
	var requestBody=this.req.body;
	console.log(requestBody);
	console.log('-------------------------------------------------\n');
	return this.res.json({method:'POST', response: 'ok', body: requestBody});
}

httptesterController.get = function() {
	console.log('\n-------------------------------------------------');
	console.log('Request received: GET');
	console.log('-------------------------------------------------\n');
	return this.res.json({method:'GET', response: 'ok'});
}

httptesterController.put = function() {
	console.log('\n-------------------------------------------------');
	console.log('Request received: PUT');
	console.log('Request body:');
	var requestBody=this.req.body;
	console.log(requestBody);
	console.log('-------------------------------------------------\n');
	return this.res.json({method:'PUT', response: 'ok', body: requestBody});
}

httptesterController.del = function() {
	console.log('\n-------------------------------------------------');
	console.log('Request received: DELETE');
	console.log('-------------------------------------------------\n');
	return this.res.json({method:'DELETE', response: 'ok'});
}

//Request with parameters

httptesterController.postparam = function() {
	var value=this.param('param');
	console.log('\n-------------------------------------------------');
	console.log('Request received: POST');
	console.log('Request parameter: '+value);
	console.log('Request body:');
	var requestBody=this.req.body;
	console.log(requestBody);
	console.log('-------------------------------------------------\n');
	return this.res.json({method:'POST', response: 'ok', parameter: value, body: requestBody});
}

httptesterController.getparam = function() {
	var value=this.param('param');
	console.log('\n-------------------------------------------------');
	console.log('Request received: GET');
	console.log('Request parameter: '+value);
	console.log('-------------------------------------------------\n');
	return this.res.json({method:'GET', response: 'ok', parameter: value});
}

httptesterController.putparam = function() {
	var value=this.param('param');
	console.log('\n-------------------------------------------------');
	console.log('Request received: PUT');
	console.log('Request parameter: '+value);
	console.log('Request body:');
	var requestBody=this.req.body;
	console.log(requestBody);
	console.log('-------------------------------------------------\n');
	return this.res.json({method:'PUT', response: 'ok', parameter: value, body: requestBody});
}

httptesterController.delparam = function() {
	var value=this.param('param');
	console.log('\n-------------------------------------------------');
	console.log('Request received: DELETE');
	console.log('Request parameter: '+value);
	console.log('-------------------------------------------------\n');
	return this.res.json({method:'DELETE', response: 'ok', parameter: value});
}

module.exports = httptesterController;
