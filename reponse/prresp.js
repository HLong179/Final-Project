var db= require('../fn/db');
exports.loadAll= () =>{
    var sql= 'select * from product';
    return db.load(sql);
}

exports.loadsingle= prName =>{
    var sql=` select * from product where p_name = '${prName}' `;
    
    return db.load(sql);
}

exports.loadFeatured=()=>{
    var sql= 'SELECT * FROM product order by n_views DESC limit 12;';
    return db.load(sql);
}

exports.loadBestSell=()=>{
    var sql='SELECT * FROM product order by n_purchases DESC limit 12;'
    return db.load(sql);
}