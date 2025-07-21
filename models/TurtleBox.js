const fs = require("fs");

class TurtleBox {
    static showBoxes() {
        const turtels = JSON.parse(fs.readFileSync("./turtleboxes.json", "utf8"));
        return turtels;
    }
}

module.exports = TurtleBox;