function Cat (name){
        this.stomatch = name;
};

Cat.prototype.eat = function(animal){
        this.stomatch.push(animal);
        if (animal!='mouse'){
                console.log('cat can fuck');
        }
};

module.exports  = Cat;


Cat.prototype.sleep = function (mouse){
        this.bed = mouse;
        this.night = true;
}