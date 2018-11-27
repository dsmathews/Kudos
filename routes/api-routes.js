const User = require('../models/user');
const kudos = require('../models/kudos');

module.exports = function (app) {

  app.get('/api/user', function (req, res) {
    User.find()
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
  });

  app.get('/api/user/:id', function (req, res) {
    User.find({_id: req.params.id})
    .populate('kudos')
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
  });

  app.post('/api/user', function (req, res) {
    User.create(req.body)
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
  });

  app.get('/api/kudos', function (req, res) {
    kudos.find()
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
  });

  app.post('/api/kudos', function (req, res) {
    const userId = req.body.userId;
    const newEntry = {
      title: req.body.title,
      body: req.body.body,
      from: req.body.from,
      to: req.body.to
    };
    console.log(newEntry);
    kudos.create(newEntry)
      .then(function (kudosData) {
      return user.findOneAndUpdate({_id: userId}, { $push: { kudos: kudosData._id } }, { new: true });
    })
    .then(function(userData) {
      res.json(userData);
    })
    .catch(function (err) {
      res.json(err);
    });
  });
};