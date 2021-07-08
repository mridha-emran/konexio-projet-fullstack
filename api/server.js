var express=require('express')
var app=express()
var countries=require("./country.json")

var cors = require('cors')
app.use(cors())

var port=8000;
app.get('/all',function(req,res){
    res.json({
        status: "success",
		data: countries,
    })
})

app.get('/:countryName',function(req,res){
    
    const countryName=req.params.countryName.toLocaleLowerCase
    const countryD=countries.filter(function(country){
            country.name.toLocaleLowerCase()===countryName
    })
    
    
    
    res.json({
        status: "success",
		data: countryD,
    })
})




app.listen(port, function () {
    console.log("Server is listening in port number" +port);
});

