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

// Twilio Credentials
const accountSid = '****';
const authToken = '****';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: '+18188577798',
    from: '+14158517345',
    body: 'Thanks for your order! On a scale of 1-10 would you recommend ' +
    'Sheraton SF to a friend? Reply with the number 1 to 10 to this message.',
})
// .then(message => console.log(message.sid));
    .then(message => console.log(message.sid));