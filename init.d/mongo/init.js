/* eslint-disable */

/**
 * 1. create custom user
 * 2. create collection (Before MongoDB can save your new database, a collection name must also be specified at the time of creation.)
 */
db.createUser({
  user: 'egg_qklzj',
  pwd: 'egg_qklzj',
  roles: [
    {
      role: 'readWrite',
      db: 'egg_qklzj'
    }
  ]
})

db.egg_qklzj.insert({
  egg_qklzj: 'egg-cnode'
})
