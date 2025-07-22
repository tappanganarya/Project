const fs = require("fs");
const { json } = require("stream/consumers");
const { SnappingTurtle, Tortoise, Terrapins } = require("./Turtle");

class TurtleBox {

    constructor(id, boxName, turtles) {
        this.id = id;
        this.boxName = boxName;
        this.turtles = turtles || [];
    }


    static showBoxes() {
        const turtels = JSON.parse(fs.readFileSync("./turtleboxes.json", "utf8"));
        return turtels;
    }

    static createBox(params) {
        let turtels = this.showBoxes();

        const [boxName, turtles] = params;
        let id = turtels.length ? turtels[turtels.length - 1].id + 1 : 1;


        const existingBox = turtels.find(box => box.boxName === boxName);

        if (existingBox) {
            console.log("Name turtleBox cannot be the same");
        } else {
            turtels.push(new TurtleBox(id, boxName, turtles));
            this.save(turtels);
            console.log("New turtle box created.");
        }
    }

    static addTurtle(params) {
        let boxes = this.showBoxes();
        const [boxName, name, species, price, size, weight, patternss] = params;

        const box = boxes.find(boxes => boxes.boxName === boxName);

        if (!box) {
            console.log("Boxes not found");
            return
        }

        const turtleId = box.turtles.length ? box.turtles[box.turtles.length - 1].id + 1 : 1;

        let newTurtle;

        switch (species) {
            case "SnappingTurtle":
                newTurtle = new SnappingTurtle(turtleId, name, +price, +size, +weight, patternss);
                console.log(`Turtle ${name} added to box ${boxName}.`);
                break;
            case "Tortoise":
                newTurtle = new Tortoise(turtleId, name, +price, +size, +weight, patternss);
                console.log(`Turtle ${name} added to box ${boxName}.`);
                break;
            case "Terrapins":
                newTurtle = new Terrapins(turtleId, name, +price, +size, +weight, patternss);
                console.log(`Turtle ${name} added to box ${boxName}.`);
                break;
            default:
                console.log(`Unknown species: ${species}`);
                break;
        }

        box.turtles.push(newTurtle);
        this.save(boxes);
    }

    static sellTurtle(params) {
        let boxes = this.showBoxes();
        const [boxName, idString] = params;

        const id = Number(idString);

        const box = boxes.find(b => b.boxName === boxName);
        if (!box) {
            console.log(`Box with name ${boxName} not found.`);
            return;
        }

        const initialLength = box.turtles.length;
        box.turtles = box.turtles.filter(t => t.id !== id);

        if (box.turtles.length < initialLength) {
            console.log(`Turtle with id ${id} has been sold from box ${boxName}.`);
        } else {
            console.log(`Turtle with id ${id} not found in box ${boxName}.`);
        }

        this.save(boxes);
    }

    static countTotalPrice(params) {
        let boxes = this.showBoxes();

        const [boxName] = params;

        boxes = boxes.find(box => box.boxName === boxName);

        if (!boxes) {
            console.log(`Not Found ${boxName}`);
            return;
        }

        let totalPrice = boxes.turtles.reduce((sum, turtle) => {
            return sum + Number(turtle.price);
        }, 0);
        console.log(`Total price of turtles in box "${boxName}": Rp ${totalPrice}`);
    }

    static boxDetail(params) {
        let boxes = this.showBoxes();

        const [boxName] = params;

        let box = boxes.find(box => box.boxName === boxName);

        if (!box) {
            console.log(`${boxName} is not found`);
            return;
        }

        console.log(`"${box.boxName}" turtles are:`);
        box.turtles.forEach((turtle, index) => {
            console.log(`${index + 1}. ${turtle.name} turtle - Rp.${turtle.price}`);
            console.log(`Species: ${turtle.species}, Size: ${turtle.size}cm, Weight: ${turtle.weight}gr.  `);

            if (turtle.patternss.length > 0) {
                const patternsStr = turtle.patterns.join(', ').replace(/, ([^,]*)$/, ' and $1');
                console.log(`Patterns: ${patternsStr}.`);
            } else {
                console.log(`Patterns: None. `);
            }

        });

    }

    static filterPerSpecies() {
        let boxes = this.showBoxes();
        let speciesSet = new Set();

        boxes.forEach(box => {
            box.turtles.forEach(b => {
                speciesSet.add(b.species);
            });
        });
        console.log(`Ada ${speciesSet.size} jenis species`);
        [...speciesSet].forEach((species, index) => {
            console.log(`${index + 1}. ${species}`);
        });
    };

    static save(turtles) {
        const turtleString = JSON.stringify(turtles, null, 2);
        fs.writeFileSync("./turtleboxes.json", turtleString);
    }
}

module.exports = TurtleBox;