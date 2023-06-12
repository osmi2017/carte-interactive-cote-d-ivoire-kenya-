var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())



app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

  app.get("/ken", (req, res) => {
    res.sendFile(__dirname + "/ken.html");
  });

  app.get("/civ", (req, res) => {
    res.sendFile(__dirname + "/civ.html");
  });

  app.get("/heat", (req, res) => {
    res.sendFile(__dirname + "/ken_heat.html");
  });

  app.get("/hi", (req, res) => {
    const lon = parseFloat(req.query.lon);
    const lat = parseFloat(req.query.lat);
  
    if (!isNaN(lon) && !isNaN(lat)) {
      res.sendFile(__dirname + "/ken_high.html");
    } else {
      res.send("Invalid coordinates");
    }
  });
  