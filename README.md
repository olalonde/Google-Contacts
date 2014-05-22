Node.js wrapper for the Google Contacts API.

# Install

    npm install google-contacts

# Usage

```javascript
var GoogleContacts = require('google-contacts').GoogleContacts;
var c = new GoogleContacts({
  token: 'oauth2 token...'
});
c.on('error', function (e) {
  console.log('error', e);
});
c.on('contactsReceived', function (contacts) {
  console.log('contacts: ' + contacts);
});
c.on('contactGroupsReceived', function (contactGroups) {
  console.log('groups: ' + contactGroups);
});
c.getContacts('thin', 100);
c.getContactGroups('thin', 200);
```

getContacts and getContactGroups has two optional parameter:
  projection and limit
http://code.google.com/apis/contacts/docs/3.0/reference.html#Projections
limit max how many elements do you wan't to receive

