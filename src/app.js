module.exports = {
    add: (num1, num2) => {
        return num1 + num2
    },
    hello: (name) => {
        return "Hello " + name;
    },
    parent: (callback) => {
        let child = require("child_process").fork(__dirname + "/child.js");
        child.on("message", callback)
    }
};