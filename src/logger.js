const logger =  require('nexo-npm-node-logger');

logger.onError((error, { filename, line, column, timestamp }) => {
    
});

logger.onLogged((type, msg, context) => {

});

logger.withFormat((type, msg, context) => msg)

module.exports = logger;
