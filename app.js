var express = require('express');

var exphbs  = require('express-handlebars');
var exphbs_section = require('express-handlebars-sections');
var bodyParser = require('body-parser');

var handleLayout= require('./middle-wares/handle_layouts');

var path = require('path');

var prrespo = require('./reponse/prresp');
var homeController= require('./controllers/homecontroller');
var contactController= require('./controllers/contactcontroller');
var ProducerController= require('./controllers/Producercontroller');
var ProductsController= require('./controllers/Productscontroller');


var app= express();
app.engine('handlebars', exphbs({

    defaultLayout: 'main',
    layoutsDir: 'views/layouts/',
    helpers:{
        section: exphbs_section(),
    }
}));
app.set('view engine', 'handlebars');

app.use(express.static(
    path.resolve(__dirname, 'public')
));
app.use(handleLayout);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.get('/', (req,res)=>{
     res.redirect('/home');
});
app.use('/home', homeController);
app.use('/contact',contactController);
app.use('/producer',ProducerController);
app.use('/products',ProductsController);

var server= app.listen(8000, function(){
    console.log('server is running on port :' +server.address().port);
});