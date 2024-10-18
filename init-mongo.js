db = db.getSiblingDB('mydb');

db.createUser({
  user: 'db-user',
  pwd: 'db-pass',
  roles: [
    {
      role: 'readWrite',
      db: 'mydb'
    }
  ]
});

