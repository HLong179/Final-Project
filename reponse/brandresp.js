var db= require('../fn/db');

exports.LoadBrand=()=>{
    var sql=`select * from brand`;
    return db.load(sql);
}
exports.AddBrand = NewBrand => {
    var sql = ` insert into brand(brand_id, brand_name) values('${NewBrand.id}','${NewBrand.name}')`;
    return db.save(sql);
}

exports.DelProductWithBrand = ID => {
    var sql=`delete from product where brand='${ID}'`;
    return db.save(sql);
}
exports.DelBrand= ID=>{
    var sql=`delete from brand where brand_id='${ID}'`;
    return db.save(sql);
}
exports.LoadSingleBrand = ID => {
    var sql = `select * from brand where brand_id = '${ID}'`;
    return db.load(sql);
}
exports.UpdateBrand = (ID,Brand) => {
    var sql = `update brand set brand_name = '${Brand.name}' where brand_id = '${ID}'`
    return db.save(sql);
}