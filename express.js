const express = require('express');

const {medium, median, mode, freqCounter, convertAndValidateNumsArray} = require('./math')

const app = express();
const ExpressError = require("./expressError")



app.get('/mean', (req, res, next) => {
    let numsToString = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsToString);

    if (!req.query.nums){
        throw new ExpressError('You must pass a query of number with a comma-seperated with a list.', 400)
    }
    
    if (nums instanceof Error) {
        throw new ExpressError(nums.messsage);
    }

    let result = {
        operation: "mean",
        result: mean(nums)
    }

    return res.send(result);
})

app.get('/median', (req, res, next) => {
    let numsToString = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsToString);
    if (!req.query.nums){
        throw new ExpressError('You must pass a query of number with a comma-seperated with a list.', 400)
    }
    
    if (nums instanceof Error) {
        throw new ExpressError(nums.messsage);
    }
    let result = {
        operation: "median",
        result: mean(nums)
    }
    return res.send(result);
})

app.get('/mode', (req, res) => {
    let numsToString = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsToString);
    if (!req.query.nums){
        throw new ExpressError('You must pass a query of number with a comma-seperated with a list.', 400)
    }
    
    if (nums instanceof Error) {
        throw new ExpressError(nums.messsage);
    }
    let result = {
        operation: "mode",
        result: mean(nums)
    }
    return res.send(result);
})



app.use((req, res, next) => {
    const e = new ExpressError("Page not found!", 404);
    next(e)
})

app.use((err, req, res, next) => {
    let status = err.status || 500;
    let msg = err.message;
    
    return res.status(status).json({
        error: {msg, status}
    });
   
})

app.listen(3000, function(){
    console.log('Server running on port 3000');
})