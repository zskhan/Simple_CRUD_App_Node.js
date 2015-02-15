var express = require('express');
var router = express.Router();
var DisplayAllRecords = require("../routes/DisplayAllRecords");
var AddRecord = require("../routes/AddRecord");
var SaveRecord = require("../routes/SaveRecord");
var EditRecord = require("../routes/EditRecord");
var SaveAfterEdit = require("../routes/SaveAfterEdit");
var DeleteCustomer = require("../routes/DeleteCustomer");

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/customer',DisplayAllRecords);//route customer list
router.get('/customer/add', AddRecord);
router.post('/customer/add', SaveRecord);//route delete customer
router.get('/customer/edit/:id', EditRecord);//edit customer route , get n post
router.post('/customer/edit/:id', SaveAfterEdit);
router.get('/customer/delete/:id', DeleteCustomer);


module.exports = router;
