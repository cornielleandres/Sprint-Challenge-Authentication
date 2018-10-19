const axios             = require('axios');
const userDb            = require('../database/models/userDb.js');
const bcrypt            = require('bcryptjs');
const jwt               = require('jsonwebtoken');
const { jwtKey }        = require('../_secrets/keys.js');

const { authenticate }  = require('./middlewares');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

const secret = jwtKey;
const generateNewToken = user => {
  const payload = user;
  const options = {
    expiresIn: '10m', // 10 minutes
  };
  return jwt.sign(payload, secret, options);
};

function register(req, res) {
  const credentials = req.body;
  return bcrypt
    .hash(credentials.password, 12, function(bcryptErr, hash) {
      if (bcryptErr) {
        return res.status(500).json({ error: `Bcrypt hashing failed: ${ bcryptErr }` });
      }
      credentials.password = hash;
      return userDb
        .register(credentials)
        .then(id => {
          const user = {
            id: id,
            username: credentials.username,
          };
          const token = generateNewToken(user);
          return res.status(201).json({
            newUser: credentials.username,
            token: token,
          });
        })
        .catch(err => res.status(500).json({ error: `Server failed to register new user: ${ err }` }));
    });
}

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  axios
    .get(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
