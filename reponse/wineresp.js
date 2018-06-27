var db= require('../fn/db');

exports.LoadbyProducer= (Id, offset)=>{
    var sql= `select * from product where brand= '${Id}' limit 6 offset ${offset}`;
    return db.load(sql);
}

exports.LoadbyColor= (Id, offset)=>{
    var sql=`select * from product where color= '${Id}' limit 6 offset ${offset}`;
    return db.load(sql);
}

exports.CountbyProducers= Id=>{
    var sql= `select count(*) as total from product where brand='${Id}'`;
    return db.load(sql);
}
exports.CountbyColors= Id=>{
    var sql= `select count(*) as total from product where color='${Id}'`;
    return db.load(sql);
}
// exports.FindSimilarProducer=(prName)=>{
//     var sql=`select * from product where p_name='${prName}' limit 5`;
//     return db.load(sql);
// }