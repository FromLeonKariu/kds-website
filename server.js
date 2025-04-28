const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));


//Page routing

app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, 'index.html')) 
    });


try {
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
} catch (error) {
    console.error("An error occurred while starting the server:", error);
}
