const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park("Jurassic Park", 10);
    dinosaur1 = new Dinosaur ('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('carnotaurus', 'carnivore', 15);
    dinosaur3 = new Dinosaur('brontosaurus', 'herbivore', 25);
    dinosaur4 = new Dinosaur('stegosaurus', 'herbivore', 10);    
    dinosaur5 = new Dinosaur('hagryphus', 'omnivore', 1);
    dinosaur6 = new Dinosaur('khaan', 'omnivore', 2);
    

  })

  it('should have a name', function(){
    assert.strictEqual(park.name, "Jurassic Park");
  });

  it('should have a ticket price', function(){
    assert.strictEqual(park.ticketPrice, 10)
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual(park.collectionOfDinosaurs, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaurToCollection(dinosaur1);
    assert.strictEqual(park.collectionOfDinosaurs.length, 1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaurToCollection(dinosaur1);
    park.addDinosaurToCollection(dinosaur2);
    park.removeDinosaurFromCollection(dinosaur1);
    assert.deepStrictEqual(park.collectionOfDinosaurs, [dinosaur2])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaurToCollection(dinosaur2);
    park.addDinosaurToCollection(dinosaur3);
    park.addDinosaurToCollection(dinosaur1);
    park.addDinosaurToCollection(dinosaur4);
    const answer = park.findDinosaurThatAttractsMostVisitors();
    assert.strictEqual(answer, dinosaur1);
  });
  
  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaurToCollection(dinosaur3);
    park.addDinosaurToCollection(dinosaur5);
    park.addDinosaurToCollection(dinosaur2);
    park.addDinosaurToCollection(dinosaur1);
    park.addDinosaurToCollection(dinosaur1);
    const answer = park.findDinosaursBySpecies("t-rex");
    assert.deepStrictEqual(answer, [dinosaur1, dinosaur1])
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaurToCollection(dinosaur3);
    park.addDinosaurToCollection(dinosaur5);
    park.addDinosaurToCollection(dinosaur2);
    park.addDinosaurToCollection(dinosaur1);
    park.addDinosaurToCollection(dinosaur1);
    const answer = park.totalNumberOfVisitorsPerDay();
    assert.strictEqual(answer, 141)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaurToCollection(dinosaur3);
    park.addDinosaurToCollection(dinosaur5);
    park.addDinosaurToCollection(dinosaur2);
    park.addDinosaurToCollection(dinosaur1);
    park.addDinosaurToCollection(dinosaur1);
    const answer = park.totalNumberOfVisitorsPerYear();
    assert.strictEqual(answer, 51465)
  });

  it('should be able to calculate total revenue for one year');

});
