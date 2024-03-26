const { circle, Triangle, Square } = require('./shape');

describe('Shape rendering', () => {
    test('Circle render', () => {
const circle = new circle();
circle.setColor("green");
circle.setText("TEXT", "black");

const expectedSvg = 
`<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">\n` +
`                    <circle cx="150" cy="100" r="50" fill="blue" />\n` +
`                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black">ABC</text>\n` +
`                    </svg>`;
expect(circle.render()).toEqual(expectedSvg);
    });

    test('Square render', () => {
        const square = new Square();
        square.setColor("green");
        square.setText('TEXT', 'black');
        const expectedSvg = 
            `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">\n` +
            `                    <rect x="100" y="50" width="100" height="100" fill="red" />\n` +
            `                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black">ABC</text>\n` +
            `                </svg>`;
        expect(square.render()).toEqual(expectedSvg);
    });

    test('Triangle render test', () => {
        const triangle = new Triangle();
        triangle.setColor("green");
        triangle.setText('ABC', 'black');
        const actualSvg = triangle.render();
        expect(actualSvg).toContain('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
        expect(actualSvg).toContain('<text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" fill="black">ABC</text>');
    });
});
