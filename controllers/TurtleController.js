const Turtle = require("../models/Turtle");
const TurtleBox = require("../models/TurtleBox");
const TurtleView = require("../views/TurtleView");

class Controller {

    static show() {
        let turtles = TurtleBox.showBoxes();
        TurtleView.show(turtles);
    }
    static addBox(params) {
        TurtleBox.createBox(params);
    }

    static addTurtle(params) {
        TurtleBox.addTurtle(params);
    }
    static sellTurtle(params) {
        TurtleBox.sellTurtle(params);
    }

    static countTotalPrice(params) {
        TurtleBox.countTotalPrice(params);
    }

    static boxDetail(params) {
        TurtleBox.boxDetail(params);
    }

    static message(msg) {
        console.log(msg);
    }

}

module.exports = Controller;