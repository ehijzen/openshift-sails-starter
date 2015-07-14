
module.exports = {

  host: process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1",
  port: process.env.OPENSHIFT_NODEJS_PORT || 1337,
  environment: process.env.NODE_ENV || 'development'

};
