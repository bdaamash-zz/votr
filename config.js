var config = {};

config.couchdb = {};
config.twilio = {};

config.couchdb.url = 'http://bjdaamash.com';
config.couchdb.port = 5984;
config.couchdb.username = 'root';
config.couchdb.password = 'kafroun123';

config.twilio.sid = 'AC03b40a8b558afa2a66031bda9fa87a9a ';
config.twilio.key = 'e1b3fd652217c3d21bcabd266da1c5e3';
config.twilio.smsWebhook = 'http://votr.bjdaamash.com/vote/sms';
config.twilio.voiceWebhook = 'http://votr.bjdaamash.com/vote/voice';
config.disableTwilioSigCheck = false;

module.exports = config;