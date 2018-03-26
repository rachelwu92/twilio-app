/**
 * Created by rachelwu on 3/25/18.
 */

const express = require('express');
const app = express();

app.get('/inbound', function(req, res) {
    res.set('Content-Type', 'text/xml');
    res.send('<Response><Message>Thank you for your response to our survey</Message></Response>');
});

app.listen(4567, function() {
    console.log('Example app listening on port 4567!');
});