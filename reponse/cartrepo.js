var db= require('../fn/db');

exports.Additems= (cart, item)=>{
    for(var i= cart.length -1;i>=0;i--)
    {
        if(item.Product.p_id===cart[i].Product.p_id)
        {
            cart[i].quantity+= item.quantity;
            cart[i].amount+= item.quantity * cart[i].Product.price;
            return;
        }
    }
    cart.push(item);
}

exports.CountItem= cart=>{
    if (!cart) {
        return -1;
    }

    var n = 0;
    for (var i = cart.length - 1; i >= 0; i--) {
        n += cart[i].quantity;
    }

    return n;
}

exports.CountQuantity= cart=>{
   var n=0;
        for(var i= cart.length-1;i>=0;i--)
        {
            n+=cart[i].quantity;
        }
    return n;
}

exports.CountAmount= cart=>{
    var amount=0;
    for(var i= cart.length-1;i>=0;i--){
        amount+= cart[i].amount;
    }
    return amount;
}

exports.AddOrder= order=>{
    var sql=`insert into  purchase_order(purchaser,order_date, payment, order_status, information) values(${order.user}, '${order.date}', '${order.method}', '${order.status}','${order.information}')`;
    return db.save(sql);
}
exports.getID= order=>{
    var sql=`select order_id from purchase_order where purchaser=${order.user} and order_date='${order.date}'`;
    return db.load(sql);
}

exports.AddDetailOrder= (id,cart, i)=>{
    var sql=`insert into order_details(order_id,p_id, quantity, name, price) values(${id}, '${cart[i].Product.p_id}', ${cart[i].quantity}, '${cart[i].Product.p_name}', ${cart[i].amount})`;
    return db.save(sql);
}

exports.LoadPurchaseOrderbyUser= id=>{
    var sql=`select * from purchase_order where purchaser =${id}`;
    return db.load(sql);
}
exports.LoadAllPurchaseOrder=()=>{
   var sql=`select * from purchase_order order by order_date DESC`;
    return db.load(sql);
}

exports.LoadStatusOrderbyAdmin= order_id=>{
    var sql=` select order_status from purchase_order where order_id=${order_id}`;
    return db.load(sql);
}


exports.LoadOrderDetailbyUser= id=>{
    var sql=`select * from order_details where order_id= ${id}`;
    return db.load(sql);
}

exports.RemoveItem= (cart, prID)=>{
    for(i = cart.length-1; i>=0;i--){
        if(prID=== cart[i].Product.p_id)
        {
            cart.splice(i,1);
            return;
        }
    
    }
}

exports.UpdateStatusbyAdmin= (id, status)=>{
    var sql=`update purchase_order set order_status='${status}' where order_id=${id}`;
    return db.save(sql);
}
