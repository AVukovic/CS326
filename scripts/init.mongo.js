// NEW

// Connect to the issuetracker database. Note, if the issuetracker database
// does not exist, it will create it with this call.
db = new Mongo().getDB('EulerOnCanvas');

// Next, we remove everything inside it. This is helpful to ensure that the
// database starts from a known state.
db.messages.remove({});

// Now, we insert some mock data that mirrors the data that we have in the
// in-memory version of the `server.js` code.
db.messages.insert([
  {
    _id: 'Ij Cpc',
    offset: 1
  }, 
  {
    _id: 'Slccd lv Jrrg',
    offset: 3
  },
  {     
    _id: 'Jvtwyptpzlk',
    offset: 7
  }
]);

// Lastly, we create "indexes" to make searching faster. For this particular
// application we know that searching on the status, owner, and created properties
// will be common, so we create indexes on those.

//db.issues.createIndex({ status: 1 });
//db.issues.createIndex({ owner: 1 });
//db.issues.createIndex({ created: 1 });
