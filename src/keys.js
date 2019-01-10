module.exports = {
  mongodb: {
    URI: 'mongodb://localhost:27017/login-register'
  },
  sessionConfig: {
    secret: 'secretsession',
    resave: false,
    saveUninitialized: false
  }
}