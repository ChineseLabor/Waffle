const Express = require("express");
const Application = Express();
const Port = process.env.PORT || 4000;

Application.post("/api", ( RequestHandler, Response ) => {
    console.warn("Caught, " + Response);
});

Application.listen( Port, () => {
    /* May be subject to change. */
    console.log("Api", " – We're following commands.");
});
