const mongo =  require('nexo-npm-mongo');
const logger =  require('nexo-npm-node-logger');

mongo.url("localhost:27017");
mongo.credentials("admin", "admin");
mongo.schema("myDb");

mongo.onConnected(() => {
    logger.i("Connected to the mongo database");
});

mongo.onFailure((error) => {
    logger.e("Unable to connect to the database", error)
});

mongo.initialize()

module.exports = mongo;
