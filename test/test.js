"use strict";
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./get_medium.js');
var should = chai.should();

chai.use(chaiHttp);

describe('Get medium user\'s details actually works', function() {
  it('should list AL on /v1/me GET', function(done){
  	chai.request(server);
  		.get('https://api.medium.com/v1/me')
    	.end(function(err, res){
      	res.should.have.status(200);
      	done();
      });
  });
});