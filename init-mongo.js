// Switch to the specified database
db = db.getSiblingDB('mydb');  // Get a reference to the 'mydb' database

// Create a new user for the database
db.createUser({
  user: 'db-user',  // Username for the new user
  pwd: 'db-pass',   // Password for the new user
  roles: [
    {
      role: 'readWrite',  // Assign the 'readWrite' role
      db: 'mydb'  // Specify the database for the role
    }
  ]
});
