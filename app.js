var express = require('express');


var exphbs  = require('express-handlebars');
var exphbs_section = require('express-handlebars-sections');
var bodyParser = require('body-parser');
var path = require('path');
var handleLayout= require('./middle-wares/handle_layouts');
var checkAdmin= require('./middle-wares/checkadmin');

var session=require('express-session');
var MySQLStore=require('express-mysql-session')(session);



    
var prrespo = require('./reponse/prresp');
var homeController= require('./controllers/homecontroller');
var contactController= require('./controllers/contactcontroller');
var ProducerController= require('./controllers/Producercontroller');
var ProductsController= require('./controllers/Productscontroller');
var accountController=require('./controllers/accountController');
var CartController= require('./controllers/cartController');
var SearchController= require('./controllers/searchControllers');
var adminController=require('./controllers/adminController');

var app= express();
app.engine('handlebars', exphbs({

    defaultLayout: 'main',
    layoutsDir: 'views/layouts/',
    helpers:{
        section: exphbs_section(),
    }
}));
app.set('view engine', 'handlebars');


app.use(express.static(path.resolve(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(session({
    key:'session_cookie_name',
    secret:'session_cookie_secret',
    store:sessionStore, 
    resave:false,
    saveUninitialized:false
}));

app.use(handleLayout);
app.use(checkAdmin);

app.get('/', (req,res)=>{
     res.redirect('/home');
});
app.use('/home', homeController);
app.use('/contact',contactController);
app.use('/producer',ProducerController);
app.use('/products',ProductsController);
app.use('/account',accountController);
app.use('/cart',CartController);
app.use('/search',SearchController);
app.use('/admin',adminController);

var option={
    host:'localhost',
    user:'root',
    password:'123456',
    database:'wine',
    createDatabaseTable:true,
    schema:{
        tableName:'sessions',
        columnNames:{
            session_id:'session_id',
            expire:'expire',
            data:'data'
        }
    }
}
var sessionStore=new MySQLStore(option);


var server= app.listen(process.env.PORT||8000, function(){
    console.log('server is running on port :' +server.address().port);
});