var express = require('express');
var router = express.Router();
var colorresp = require('../reponse/colorresp');
var brandresp = require('../reponse/brandresp');
var prresp = require('../reponse/prresp');
router.get('/', (req, res) => {
    res.render('admin/index');
})

router.get('/categories', (req, res) => {
    colorresp.loadAll().then((rows) => {
        var vm = {
            Colors: rows,
        }
        res.render('admin/categories', vm);
    });
});

router.post('/categories', (req, res) => {
    var NewCat = {
        id: req.body.ID,
        name: req.body.Name,
    }
    colorresp.AddColor(NewCat).then((value) => {
        res.redirect('back');
    })
})

router.get('/categories/DelColor/:Id', (req, res) => {
    var ID = req.params.Id;
    res.render('admin/Delete');
})
router.post('/categories/DelColor/:Id', (req, res) => {
    var id = req.params.Id;
    colorresp.DelColorOfProduct(id).then((value) => {
        colorresp.DelColor(id).then((value) => {
            res.redirect('../../categories');
        });
    });
})
router.get('/categories/UpdateColor/:Id', (req, res) => {
    var ID = req.params.Id;
    colorresp.LoadSingleColor(ID).then((rows) => {
        var vm = {
            Color: rows[0],
        }
        res.render('admin/UpdateColor', vm);
    });
})
router.post('/categories/UpdateColor/:Id', (req, res) => {
    var ID = req.params.Id;
    var Color = {
        id: req.body.ID,
        name: req.body.Name,
    }
    colorresp.UpdateColor(ID, Color).then((value) => {
        res.redirect('../../categories');
    })
})

router.get('/brands', (req, res) => {
    brandresp.LoadBrand().then((rows) => {
        var vm = {
            Brands: rows,
        }
        res.render('admin/brands', vm);
    });
});

router.post('/brands', (req, res) => {
    var NewBrand = {
        id: req.body.ID,
        name: req.body.Name,
    }
    brandresp.AddBrand(NewBrand).then((value) => {
        res.redirect('back');
    })
})

router.get('/brands/DelBrand/:Id', (req, res) => {
    var ID = req.params.Id;
    res.render('admin/Delete');
})
router.post('/brands/DelBrand/:Id', (req, res) => {
    var id = req.params.Id;
    brandresp.DelProductWithBrand(id).then((value) => {
        brandresp.DelBrand(id).then((value) => {
            res.redirect('../../brands');
        })
    })
})

router.get('/brands/UpdateBrand/:Id', (req, res) => {
    var ID = req.params.Id;
    brandresp.LoadSingleBrand(ID).then((rows) => {
        var vm = {
            Brand: rows[0],
        }
        res.render('admin/UpdateBrand', vm);
    });
})
router.post('/brands/UpdateBrand/:Id', (req, res) => {
    var ID = req.params.Id;
    var Brand = {
        id: req.body.ID,
        name: req.body.Name,
    }
    brandresp.UpdateBrand(ID, Brand).then((value) => {
        res.redirect('../../brands');
    })
})

router.get('/products', (req, res) => {
    prresp.loadProduct().then((rows1) => {
        brandresp.LoadBrand().then((rows2) => {
            colorresp.loadAll().then((rows3) => {
                var vm = {
                    Products: rows1,
                    Brands: rows2,
                    Colors: rows3,
                }
                res.render('admin/products', vm);
            })
        });
    });
});

router.post('/products', (req, res) => {
    var d= new Date();
    var NewPr = {
        id: req.body.ID,
        name: req.body.Name,
        price: req.body.Price,
        brand: req.body.Brand,
        color: req.body.Color,
        stock: req.body.Stock,
        description: req.body.Description,
        date: `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`,
    }
    prresp.AddProduct(NewPr).then((value) => {
        res.redirect('back');
    })
})

router.get('/products/DelProduct/:Id', (req, res) => {
    var ID = req.params.Id;
    res.render('admin/Delete');
})
router.post('/products/DelProduct/:Id', (req, res) => {
    var id = req.params.Id;
    prresp.DelProduct(id).then((value) => {
        res.redirect('../../products');
    });
})
router.get('/products/UpdateProduct/:Id', (req, res) => {
    var ID = req.params.Id;
    prresp.loadSingleProduct(ID).then((rows1) => {
        brandresp.LoadBrand().then((rows2) => {
            colorresp.loadAll().then((rows3) => {
                var vm = {
                    Product: rows1[0],
                    Brands: rows2,
                    Colors: rows3,
                }
                res.render('admin/UpdateProduct', vm);
            })
        });
    });
})
router.post('/products/UpdateProduct/:Id', (req, res) => {
    var ID = req.params.Id;
    var Product = {
        id: req.body.ID,
        name: req.body.Name,
        price: req.body.Price,
        brand: req.body.Brand,
        color: req.body.Color,
        stock: req.body.Stock,
        description: req.body.Description,
    }
    prresp.UpdateProduct(ID, Product).then((value) => {
        res.redirect('../../products');
    })
})
module.exports = router;