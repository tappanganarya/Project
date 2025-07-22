const command = process.argv[2];
const params = process.argv.slice(3);

const Controller = require("./controllers/TurtleController");

switch (command) {
    case "show":
        Controller.show();
        break;
    case "addBox":
        Controller.addBox(params);
        break;
    case "addTurtle":
        Controller.addTurtle(params);
        break;
    case "sellTurtle":
        Controller.sellTurtle(params);
        break;
    case "countPrice":
        Controller.countTotalPrice(params);
        break;
    case "boxDetail":
        Controller.boxDetail(params);
        break;
    case "filterPerSpecies":
        Controller.filterPerSpecies();
        break;
    default:
        Controller.message("Command not found");
        break;
}
