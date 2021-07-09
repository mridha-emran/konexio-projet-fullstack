var express=require('express')
var app=express()
var countries=require("./country.json")

var cors = require('cors')
const { Console } = require('console')
app.use(cors())

var port=8000;
app.get('/all',function(req,res){
    res.json({
        status: "success",
		data: countries,
    })
})


app.get('/:countryName',function(req,res){
    
    const countryName=req.params.countryName.toLowerCase()
    console.log(countryName)
    const countryD=countries.filter((country) => country.name.toLowerCase()===countryName)
    
    
    
    res.json({
        status: "success",
		data: countryD,
    })
})


app.get('/capital/:capital',function(req,res){
    
    const capital=req.params.capital.toLowerCase()
    console.log(capital)
    const capitalD=countries.filter((country) =>country.capital.toLowerCase()===capital)
    
    
    
    res.json({
        status: "success",
		data: capitalD,
    })
})


app.listen(port, function () {
    console.log("Server is listening in port number" +port);
});

