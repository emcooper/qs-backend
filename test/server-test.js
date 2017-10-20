var assert = require('chai').assert
var app = require('../server')
var request = require('request')
const environment = process.env.NODE_ENV || 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);
const Meal = require('../lib/models/meal')
var pry = require('pryjs');


describe('Server', function() {
  before(function(done){
      this.port = 9876
      this.server = app.listen(this.port, function(err, result){
        if(err) { return done(err) }
        done()
      })
      this.request = request.defaults({
        baseUrl: 'http://localhost:9876'
      })
    })
    after(function(){
      this.server.close();
    })

  it('should exist', function() {
    assert(app);
  });

  describe('GET /meals', function(){
    beforeEach((done) => {
      Meal.create("Breakfast")
      .then(() => done())
    })
    afterEach((done) => {
      Meal.destroyAll()
      .then(() => done())
    })
    it('should return a 200', function(done){
      this.request.get('/api/v1/meals', function(error, response){
        if (error) { done(error) }
        assert.equal(response.statusCode, 200)
        done()
      })
    })

    it('should respond with the meal names', function(done){
      this.request.get('/api/v1/meals', function(error, response){
        if (error) { done(error) }
        assert.include(response.body, "Breakfast")
        done()
      })
    })
  })
});
