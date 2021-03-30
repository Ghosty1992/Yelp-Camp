const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

   const campgrounds = [
     {
       name: "Călăreții lui Țepes ", image: "https://r-cf.bstatic.com/images/hotel/max1280x900/148/148064294.jpg"
     },
     { name: "Müllerwiese", image: "https://www.muellerwiese.de/zelten.jpg" 
     },
     {
       name: "Rombach-le-Franc", image: "https://www.camping-frankrijk.nl/image/camping/395645.jpg"
     }
   ];

app.get("/",function(req,res) {
    res.render("landing");
});

app.get("/campgrounds",function(req,res) {
 
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds",function(req,res) {
    //get data from form and add to campgrounds array
    const name = req.body.name;
    const image = req.body.image;
    const newCampground = {name:name, image:image};
    campgrounds.push(newCampground);
    //redirect to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new",function(req,res) {
  res.render("new");
});

app.listen(3000,function() {
    console.log("The Yelp Server has started");
});