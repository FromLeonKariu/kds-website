const express = require ("express");
const app = express();
const path = require("path");

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));


//Page routing

app.get('/', (req, res) => {
     res.sendFile(pat.join(__dirname, 'index.html')) 
    });

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});