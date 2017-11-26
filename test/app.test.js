const app = require("../src/app.js");

test("test app", () => {
    expect(app.add(1,2)).toBe(3)
});

test("test parent/child", (done) => {
    app.parent(msg => {
        console.log(msg);
        expect(msg).toBe("Message from Child.");
        done();
    })
});