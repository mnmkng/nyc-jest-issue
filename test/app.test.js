const app = require("../src/app.js");

test("test app", () => {
    expect(app.add(1,2)).toBe(3)
});