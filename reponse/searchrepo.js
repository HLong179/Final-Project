var db= require('../fn/db');

exports.SearchProduct= string=>{
    var sql=`select p_id, p_name from product where p_name like '%${string}%' or price = '${string}'`;
    return db.load(sql);
}

exports.SearchColor= string=>{
    var sql=`select * from color where color_name like '%${string}%'`;
    return db.load(sql);
}

exports.SearchProducer= string=>{
    var sql=`select * from brand where brand_name like '%${string}%'`;
    return db.load(sql);
}

