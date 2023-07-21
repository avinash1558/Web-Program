// use avinash

// show dbs

// show collection

// greter equal
db.items.updateOne({age:{$gte:18}},{$set:{name:"avinash"}})
// greter 
db.items.updateOne({age:{$gt:18}},{$set:{name:"avinash"}})

// less equal
db.items.updateMany({age:{$lte:18}},{$set:{name:"avinash"}})
// less 
db.items.updateOne({age:{$lt:18}},{$set:{age:18}})

// or
db.items.updateOne({$or:[{age:{$gte:3}},{age:{$lte:1}}]})