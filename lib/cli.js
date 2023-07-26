const { writeFile } = require('fs/promises');
const inquirer = require('inquirer');

class Circle {
    constructor() {
        // Add any properties and methods specific to the Circle shape here
    }

    setColor(color) {
        // Add code to set the color of the Circle shape
    }
}

class Square {
    constructor() {
        // Add any properties and methods specific to the Square shape here
    }

    setColor(color) {
        // Add code to set the color of the Square shape
    }
}

class Triangle {
    constructor() {
        // Add any properties and methods specific to the Triangle shape here
    }

    setColor(color) {
        // Add code to set the color of the Triangle shape
    }
}

function CLI() {
    inquirer.prompt([
        {
            type: "list",
            name: "shapeType",
            message: "What type of shape?",
            choices: ["circle", "square", "triangle"]
        },
        {
            type: "input",
            name: "shapeColor",
            message: "What color?"
        },
        {
            type: "input",
            name: "text",
            message: "What is the text? (max of 3 characters)"
            validate: (response) => response.length <= 3
        },
        {
            type: "input",
            name: "textColor",
            message: "What color is the text?"
        }
    ]).then(({ shapeType, shapeColor, text, textColor }) => {
        let newShape;
        switch (shapeType) {
            case "circle":
                newShape = new Circle();
                break;
            case "square":
                newShape = new Square();
                break;
            case "triangle":
                newShape = new Triangle();
                break;
            default:
                newShape = new Circle();
                break;
        }
        newShape.setColor(shapeColor);
    
        writeFile("logo.svg", generateSVG(newShape, text, textColor));
    });
}

module.exports = CLI;
