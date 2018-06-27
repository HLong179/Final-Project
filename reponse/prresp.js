var db = require('../fn/db');
exports.loadAll = () => {
    var sql = 'select * from product';
    return db.load(sql);
}

exports.loadsingle = prName => {
    var sql = ` select * from product where p_name = '${prName}' `;

    return db.load(sql);
}
exports.loadProduct = () => {
    var sql = 'select * from product join brand on product.brand = brand.brand_id join color on product.color = color.color_id order by p_id + 0';
    return db.load(sql);
}

exports.loadFeatured = () => {
    var sql = 'SELECT * FROM product order by n_views DESC limit 12;';
    return db.load(sql);
}

exports.loadBestSell = () => {
    var sql = 'SELECT * FROM product order by n_purchases DESC limit 12;'
    return db.load(sql);
}

exports.ViewUpdate = prName => {
    var sql = `update product set n_views= n_views+1 where p_name='${prName}'`;
    return db.save(sql);
}

exports.UpdateStock = (pr_id, num) => {
    var sql = `update product set n_stock= n_stock-${num}, n_purchases= n_purchases+ ${num} where p_id='${pr_id}'`;
    return db.save(sql);
}
exports.AddProduct = NewPr => {
    var sql = `insert into product(p_id, p_name, price, brand, color, n_stock, description) values('${NewPr.id}','${NewPr.name}',${NewPr.price},'${NewPr.brand}','${NewPr.color}',${NewPr.stock},'${NewPr.description}')`
    return db.save(sql);
}

exports.DelProduct = ID => {
    var sql = `delete from product where p_id='${ID}'`;
    return db.save(sql);
}

exports.loadSingleProduct = ID => {
    var sql = `select * from product where p_id = '${ID}'`;
    return db.load(sql);
}

exports.UpdateProduct = (ID, Product) => {
    var sql = `update product set p_name = '${Product.name}', price = ${Product.price}, brand = '${Product.brand}', color = '${Product.color}', n_stock= ${Product.stock}, description = '${Product.description}' where p_id = '${ID}'`;
    return db.save(sql);
}

exports.FindSimilarProducer = (prName) => {
    var sql=`select * from product where brand in (select brand from product where p_name='${prName}') limit 5 `;
    // var sql = `select p_id from product where p_name='${prName}'`;
    return db.load(sql);
}

exports.FindSimilarBrand = (prName) => {
    var sql=`select * from product where color in (select color from product where p_name='${prName}') limit 5 `;
    // var sql = `select p_id from product where p_name='${prName}'`;
    return db.load(sql);
}