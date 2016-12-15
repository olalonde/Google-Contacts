/*jslint indent:2*/
/*global require: true, console: true */
var GoogleContacts = require('../').GoogleContacts;
var assert = require('assert');
var contactsTested = false;
var contactTested = false;

var c = new GoogleContacts({
  token: process.env.GOOGLE_TOKEN,
  id: process.env.GOOGLE_CONTACT_ID
});

c.getContacts(function (err, contacts) {
  if (err) throw err;
  assert.ok(typeof contacts === 'object', 'Contacts is not an object');
  console.log('Showing first 10 contacts out of '+ contacts.length)
  console.log(contacts.slice(0,9));
  // setting first contact as the id for the getContact test
  contactsTested = true;
  test_id = contacts[0].id

  // this one needs a valid id
  c.getContact(function (err, contact) {
    if (err) throw err;
    assert.ok(typeof contact === 'object', 'Contact is not an object');
    console.log('Showing individual contact (first from previous test)')
    console.log(contact);
    contactTested = true;
  }, {
    id: test_id
  });
});



process.on('exit', function () {
  if (!contactsTested || !contactTested) {
    throw new Error('contact test failed');
  }
});
