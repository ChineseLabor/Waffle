const Express = require("express");
const Application = Express();
const Port = 8080;

Application.post("/api", ( RequestHandler, Response ) => {
    Response.send("Hello World!")
});

Application.listen( Port, () => {
    console.log(`@Api-Project – Listening on Port ${ Port }`);
});
