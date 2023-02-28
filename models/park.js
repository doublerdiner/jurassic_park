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
    for (dinosaur of this.collectionOfDinosaurs){
        if (dinosaur.guestsAttractedPerDay > dinosaurToReturn){
            dinosaur = dinosaurToReturn;
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
    return this.totalNumberOfVisitorsPerDay * 365;
}

Park.prototype.revenueFromTicketSalesForOneYear = function(){
    return this.totalNumberOfVisitorsPerYear * this.ticketPrice;
}

Park.prototype.removeAllDinosaursBySpecies = function(species){
    const arrayOfDinosaursToDelete = [];
    for (dinosaur of this.collectionOfDinosaurs){
        if (dinosaur.species == species){
            arrayOfDinosaursToDelete.unshift(this.collectionOfDinosaurs.indexOf(dinosaur));
        }
    }
    for (index of arrayOfDinosaursToDelete){
        this.collectionOfDinosaurs.splice(index, 1);
    }
}

Park.prototype.objectOfDinosaursByDietType = function(){
    const dinosaursByDietType = {};
    for (dinosaur in this.collectionOfDinosaurs){
        if(dinosaur.diet in dinosaursByDietType){
            dinosaursByDietType.dinosaur.diet ++;
        } else {
            dinosaursByDietType.dinosaur.diet = 1;
        }
    }
    return dinosaursByDietType;
}

module.exports = Park;