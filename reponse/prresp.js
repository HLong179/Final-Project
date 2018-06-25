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

exports.ViewUpdate= prName=>{
    var sql=`update product set n_views= n_views+1 where p_name='${prName}'`;
    return db.save(sql);
}

exports.UpdateStock = (pr_id, num)=>{
    var sql=`update product set n_stock= n_stock-${num}, n_purchases= n_purchases+ ${num} where p_id='${pr_id}'`;
    return db.save(sql);
}

