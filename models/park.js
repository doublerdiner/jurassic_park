const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = []
}

Park.prototype.addDinosaurToCollection = function(dinosaur){
    this.collectionOfDinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaurFromCollection = function(dinosaur){
    const dinosaurIndex = this.collectionOfDinosaurs.indexOf(dinosaur);
    this.collectionOfDinosaurs.splice(dinosaurIndex, 1);
}

Park.prototype.findDinosaurThatAttractsMostVisitors = function(){
    let dinosaurToReturn = null;
    let maxVisitors = 0;
    for (dinosaur of this.collectionOfDinosaurs){
        if (dinosaur.guestsAttractedPerDay > maxVisitors){
            maxVisitors = dinosaur.guestsAttractedPerDay;
            dinosaurToReturn = dinosaur;
        } 
    }
    return dinosaurToReturn;
}

Park.prototype.findDinosaursBySpecies = function(species){
    const dinosaursToReturn = [];
    for (dinosaur of this.collectionOfDinosaurs){
        if (dinosaur.species == species){
            dinosaursToReturn.push(dinosaur);
        }
    }
    return dinosaursToReturn;
}

Park.prototype.totalNumberOfVisitorsPerDay = function(){
    let total = 0;
    for (dinosaur of this.collectionOfDinosaurs){
        total += dinosaur.guestsAttractedPerDay;
    }
    return total;
}

Park.prototype.totalNumberOfVisitorsPerYear = function(){
     return this.totalNumberOfVisitorsPerDay() * 365;
}

Park.prototype.revenueFromTicketSalesForOneYear = function(){
    return this.totalNumberOfVisitorsPerYear() * this.ticketPrice;
}

Park.prototype.removeAllDinosaursBySpecies = function(species){
    const arrayOfDinosaursToDelete = [];
    for (dinosaur of this.collectionOfDinosaurs){
        if (dinosaur.species == species){
            arrayOfDinosaursToDelete.unshift(dinosaur);
        }
    }
    for (dinosaur of arrayOfDinosaursToDelete){
        this.collectionOfDinosaurs.splice(this.collectionOfDinosaurs.indexOf(dinosaur), 1);
    }
}

// Park.prototype.objectOfDinosaursByDietType = function(){
//     const dinosaursByDietType = {
//         'carnivore': 0,
//         'herbivore': 0,
//         'omnivore': 0
//     }
//     let index = 0
//     for (const dinosaur in this.collectionOfDinosaurs){
//         if(dinosaur.diet == dinosaursByDietType[`${dinosaur.diet}`]){
//             dinosaursByDietType[`${dinosaur.diet}`] += 1 || 1;
//         }
//     }
//     return dinosaursByDietType;
// }

module.exports = Park;