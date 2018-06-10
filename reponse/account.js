var db=require('../fn/db');

exports.login =user =>{
    var sql=`select * from account where username='${user.username}' and pass='${user.password}'`;
    return db.load(sql);
}
exports.add=user=>{
    var sql=`insert into account(username,pass,permission,name,email,phone,dob) values('${user.username})','${user.password}','0','${user.name}','${user.email}','${user.phone}','${user.dob}')`;
    return  db.save(sql);
}
exports.seachUsername=user=>{
    var sql=`select * from account where username='${user.username}'`;
    return db.load(sql);
}
exports.searchEmail=user=>{
    var sql=`select * from account where email='${user.email}'`;
    return db.load(sql);
}

exports.updatePassword=user=>{
    var sql=`update account set pass='${user.password}' where acc_id='${user.id}'`;
    return db.load(sql);
}
exports.updateInfor=user=>{
    var sql=`update account set name='${user.name}',phone='${user.phone}',dob='${user.dob}' where acc_id='${user.id}'`;
    return db.load(sql);
}
// exports.add=user=>{
//     var sql=`insert into users values(  