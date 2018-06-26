var db= require('../fn/db');

exports.loadAll=()=>{
    var sql=`select * from color`;
    return db.load(sql);
}
exports.AddColor = NewCat => {
    var sql = ` insert into color(color_id, color_name) values('${NewCat.id}','${NewCat.name}')`;
    return db.save(sql);
}   
exports.DelColorOfProduct = ID => {
    var sql = `update product set color = NULL where color = '${ID}'`
    return db.save(sql);
}
exports.DelColor = ID => {
    var sql = `delete from color where color_id='${ID}'`;
    return db.save(sql);
}
exports.LoadSingleColor = ID => {
    var sql = `select * from color where color_id = '${ID}'`;
    return db.load(sql);
}
exports.UpdateColor = (ID,Color) => {
    var sql = `update color set color_name = '${Color.name}' where color_id = '${ID}'`
    return db.save(sql);
}