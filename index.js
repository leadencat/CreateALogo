// Import necessary modules
const inquirer = require('inquirer'); 
const fs = require('fs'); 
const path = require('path'); 
const { Circle, Triangle, Square } = require('./lib/shapes'); 

// prompt user for input using inquirer
async function promptUser() {
    // Returns a promise that resolves with the answers to the command line prompts
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to eight characters for the logo:',
            validate: input => input.length <= 8
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color for the text:',
            default: 'black'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Which shape would you like to use?',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like your shape to be?',
            default: 'green',
        }
    ]);
}
// Function to generate SVG
function generateSVG(shapeName, shapeColor, text, textColor) {
    let shape; 

    // Switch statement to the correct shape class based on user input
    switch (shapeName) {
        case 'Circle':
            shape = new Circle(); 
            break;
        case 'Triangle':
            shape = new Triangle(); 
            break;
        case 'Square':
            shape = new Square(); 
            break;
        default:
            throw new Error('Unknown shape type'); 
    }
    shape.setColor(shapeColor);
    shape.setText(text, textColor);

    return shape.render();
}
// Function to save the SVG string to a file
function saveSVGToFile(svgString) {
    const filePath = path.join(__dirname, 'logo.svg'); 
    fs.writeFileSync(filePath, svgString); 
    console.log('Generated logo.svg'); 
}
// Main async function to run the application
async function main() {
    try {
        const userInput = await promptUser(); 
        const svg = generateSVG(userInput.shape, userInput.shapeColor, userInput.text, userInput.textColor); // Generate SVG from input
        saveSVGToFile(svg); 
    } catch (error) {
        console.error('An error occurred:', error);
    }
}
// Execute the main function
main();