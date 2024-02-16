import app from "./app.js";

const main = () => {

app.listen(app.get("port"), () => {
    console.log(`Servidor esta corriendo en http://localhost:${app.get("port")}`);
})


};

main();