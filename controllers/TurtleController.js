const Turtle = require("../models/Turtle");
const TurtleBox = require("../models/TurtleBox");
const TurtleView = require("../views/TurtleView");

class Controller {

    static show() {
        let turtles = TurtleBox.showBoxes();
        TurtleView.show(turtles);
    }

    static message(msg) {
        console.log(msg);
    }

}

module.exports = Controller;