function Cat (name){
        this.stomatch = name;
};

Cat.prototype.eat = function(mouse){
        this.stomatch.push(mouse);
};

module.exports  = Cat;