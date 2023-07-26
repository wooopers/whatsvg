const { Circle, Triangle, Square } = require('./shapes');

describe("Test shapes", () => {
    test("Test circle", () => {
        const circle = new Circle(5);
        expect(circle.area()).toBe(78.53981633974483);
    });

    test("Test triangle", () => {
        const triangle = new Triangle(5, 10);
        expect(triangle.area()).toBe(25);
    });

    test("Test square", () => {
        const square = new Square(5);
        expect(square.area()).toBe(25);
    });
});