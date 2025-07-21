class Turtle {
    constructor(id, name, species, price, patternss) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.price = price;
        this.patternss = patternss;
    }

}

class SnappingTurtle extends Turtle {
    constructor(id, name, price, patternss, size, weight) {
        super(id, name, "SnappingTurtl", price, patternss, size, weight)
        this.size = size;
        this.weight = weight;
    }

}

class Tortoise extends Turtle {
    constructor(id, name, price, patternss, size, weight) {
        super(id, name, "Tortoise", price, patternss, size, weight)
        this.size = size;
        this.weight = weight;
    }

}

class Terrapins extends Turtle {
    constructor(id, name, price, patternss, size, weight) {
        super(id, name, "Terrapins", price, patternss, size, weight)
        this.size = size;
        this.weight = weight;
    }

}

module.exports = { Turtle, SnappingTurtle, Tortoise, Terrapins };
