/**
 * Created by rachelwu on 3/25/18.
 */

require('dotenv').config();

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
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH;

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: '+18188577798',
    from: '+14158517345',
    body: 'Thank you for staying at the Sheraton Petaluma! Would you recommend us to a ' +
        'friend?  Please reply with YES or NO.',
})
    .then(message => console.log(message.sid));