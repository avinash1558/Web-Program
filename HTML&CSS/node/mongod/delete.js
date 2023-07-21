// use avinash

// show dbs

// show collection

// greter equal
db.items.deleteOne({age:{$gte:18}})
// greter 
db.items.deleteOne({age:{$gt:18}})

// less equal
db.items.deleteMany({age:{$lte:18}})
// less 
db.items.deleteOne({age:{$lt:18}})

// or
db.items.deleteOne({$or:[{age:{$gte:3}},{age:{$lte:1}}]})