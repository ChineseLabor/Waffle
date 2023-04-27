const Express = require("express");
const Application = Express();
const Port = process.env.PORT || 4000;

Application.post("/api", ( RequestHandler, Response ) => {
    console.warn("Caught, " + Response)
})

Application.listen( Port, () => {
    console.log("%cApi", "background: red", "Burnt in flames with, " + Port + ".")
})