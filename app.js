const command = process.argv[2];
const params = process.argv.slice(3);

const Controller = require("./controllers/TurtleController");

switch (command) {
    case "show":
        Controller.show();
        break;
    default:
        Controller.message("Command not found");
        break;
}
