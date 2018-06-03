var db= require('../fn/db');

exports.LoadBrand=()=>{
    var sql=`select * from brand`;
    return db.load(sql);
}