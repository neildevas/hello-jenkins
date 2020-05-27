const request = require('supertest');
const app = require('../index.js');

describe('GET /', function() {
  it('respond with hello world', function(done) {
    //navigate to root and check the the response is "hello world"
    request(app).get('/').expect('hey world I was deployed from Jenkins!!!', done);
  });
});
