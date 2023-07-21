// // use avinash
// show dbs
// show collections
// greter equal
db.items.find({age:{$gte:18}})
// greter 
db.items.find({age:{$gt:18}})

// less equal
db.items.find({age:{$lte:18}})
// less 
db.items.find({age:{$lt:18}})

// or
db.items.find({$or:[{age:{$gte:25}},{age:{$lte:18}}]})