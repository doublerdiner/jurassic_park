const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park("Jurassic Park", 10);
    dinosaur = new Dinosaur ('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('carnotaurus', 'carnivore', 15);
    dinosaur3 = new Dinosaur('brontosaurus', 'herbivore', 25);
    dinosaur4 = new Dinosaur('stegosaurus', 'herbivore', 10);    
    dinosaur5 = new Dinosaur('hagryphus', 'omnivore', 1);
    dinosaur6 = new Dinosaur('khaan', 'omnivore', 2);
    

  })

  it('should have a name', function(){
    assert.strictEqual(park.name, "Jurassic Park");
  });

  it('should have a ticket price');

  it('should have a collection of dinosaurs');

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
