var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//add an array of objects with multiple key pairs
  res.render('index', {
      title: 'My Friends in the US',
      friends: [
   {
          name: 'Mariela',
          city: 'San Francisco',
          state: 'CA'
        },
        {
          name: 'Martin',
          city:  'Denver',
          state: 'CO'
        },
        {
          name: 'Cody',
          city: 'Seattle',
          state: 'WA'
        },
        {
          name: 'Nick',
          city: 'Portland',
          state: 'OR'
        },
        {
          name: 'Ozwin',
          city: 'New York City',
          state: 'NY'
        },
        {
          name: 'Gizmo',
          city: 'Charlotte',
          state: 'NC'
        },
        {
          name: 'Quincy',
          city: 'Pittsburgh',
          state: 'PA'
        },
        {
          name: 'Donovan',
          city: 'Los Angeles',
          state: 'CA'
         }
      ]});
  });
  module.exports = router;
