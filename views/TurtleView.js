class View {
    static show(turtels) {
        console.log("Turtle boxes in our shop:");
        turtels = turtels.forEach((turtle, index) => {
            console.log(`${index + 1}. ${turtle.boxName} - ${turtle.turtles.length} turtles`)

        });
    }
}


module.exports = View