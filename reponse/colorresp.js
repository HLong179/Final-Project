var db= require('../fn/db');

exports.loadAll=()=>{
    var sql=`select * from color`;
    return db.load(sql);
}