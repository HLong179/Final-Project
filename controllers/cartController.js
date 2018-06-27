var express= require('express');
var cartrepo= require('../reponse/cartrepo');
var productrepo= require('../reponse/prresp');
var restrict= require('../middle-wares/restrict');
var checkAdmin= require('../middle-wares/checkadmin');
var accountrepo= require('../reponse/account');
var router= express.Router();

const URL=require('url').URL;
router.get('/',restrict,(req,res)=>{
    var num_quantity= cartrepo.CountQuantity(req.session.cart);
    var num_amount= cartrepo.CountAmount(req.session.cart);
    var vm={
        items: req.session.cart,
        totalquantity: num_quantity,
        totalamount: num_amount,
    }
    res.render('cart/index',vm);
})

router.post('/add',(req,res)=>{

    productrepo.loadsingle(req.body.getname).then((rows)=>{
        var item={
            Product: rows[0],
            quantity: +req.body.getquantity,
            amount: rows[0].price * +req.body.getquantity,
           // name:req.session.user.name

        };
        cartrepo.Additems(req.session.cart, item);
        res.redirect(req.headers.referer);
    })
   
})

router.post('/remove',(req,res)=>{
    cartrepo.RemoveItem(req.session.cart,req.body.getid);
    res.redirect(req.headers.referer);
})
router.get('/Order',(req,res)=>{
    if(req.session.isAdmin)
    {
        cartrepo.LoadAllPurchaseOrder().then((rows)=>{
            var vm={
                list: rows,
                name:''
            }
            if(req.session.isLogged==true){
                vm.name=req.session.user.name;
            }
            res.render('cart/orderlist',vm);
        })
    }
    else
    {
        cartrepo.LoadPurchaseOrderbyUser(req.session.user.acc_id).then((orderlist)=>{
            var vm={
                list: orderlist
            }
            res.render('cart/orderlist',vm);
        })
    }
    
   
})




router.post('/Order',(req,res)=>{
    var getmethod= req.body.method;
    var d= new Date();
    var id;
    var order={
        user: req.session.user.acc_id,
        date: `${d.getFullYear()}/${d.getMonth()}/${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
        method: getmethod,
        status: `Delivering`
    }
    cartrepo.AddOrder(order).then((value)=>{
        
        cartrepo.getID(order).then((rows)=>{

            id= rows[0].order_id;
           
            for(var i= req.session.cart.length-1; i>=0; i--){
                cartrepo.AddDetailOrder(id,req.session.cart,i);
               productrepo.UpdateStock(req.session.cart[i].Product.p_id, +req.session.cart[i].quantity);
                cartrepo.RemoveItem(req.session.cart,req.session.cart[i].Product.p_id );
            }
            res.redirect('../cart/Order');
        });
        
    });
})

router.get('/Detail/:ID',(req,res)=>{
   var order_id= req.params.ID;
   cartrepo.LoadOrderDetailbyUser(order_id).then((rows)=>{
       cartrepo.LoadStatusOrderbyAdmin(order_id).then((stt)=>{
        var a=0, b=0;
        for(var i= rows.length-1;i>=0;i--){
             a+= rows[i].price;
             b+= rows[i].quantity;
        }
        var vm={
            items: rows,
            totalamount: a,
            totalprd: b,
            ID: order_id,
            status: stt,
            name:''
            

        }
        if(req.session.isLogged==true){
            vm.name=req.session.user.name;
        }
        
        res.render('cart/detail',vm);
       })
      
   })
})

router.post('/Detail/Update/:ID',(req,res)=>{
    var id= req.params.ID;
    var status= req.body.getstatus;
    cartrepo.UpdateStatusbyAdmin(id,status).then((value)=>{
        res.redirect('../../Order');
    })
})



module.exports= router;