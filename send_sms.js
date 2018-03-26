/**
 * Created by rachelwu on 3/25/18.
 */
// Twilio Credentials
const accountSid = 'AC57b958007822580100f31ed206a6c2a6';
const authToken = '2cab897aa0d19b616227d6b9f5f059fd';

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
