var express = require('express');
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    jwt = require('jsonwebtoken');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());
    
app.use(cors({
    origin : 'http://localhost:4200',
    optionsSuccessStatus : 200
}));

app.post('/authenticate', function(req, res){
    if(req.body.email && req.body.password) {
        var token = jwt.sign({
                    email: req.body.email
                },
                'marlabs-secret-key',
                { expiresIn: '1h'}
    );
        res.send({
            isLoggedIn:true,
            msg:'Login Success',
            token : token
        });
    } else {
        res.send({
            isLoggedIn:false,
            msg: 'Login Failed'
        });
    }
}); 

app.use(function(req, res, next, err){
    var token = req.body.token || req.query.token || req.headers.token;
    if(token) {
        jwt.verify(token, 'marlabs-secret-key', [err, decoded])
            if(!err) {
                req.decoded = decoded;
               next();

            } else {
                res.send({
                    msg : 'Invalid Request',
                    isLoggedIn : false
                });
            }
    } else {
        res.send({
            msg : 'Invalid Request',
            isLoggedIn : false
        });
    }
});

app.get('/getproducts', function(req, res){
    console.log('user Info');
    console.log(req.decoded);
    res.send([
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        }
    ]);
});

app.listen(3000, function(){
    console.log('server on 3000');
})