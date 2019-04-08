const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");


const app = express();
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
}).catch((err)=> {
    console.log("Error in Connection");
});
mongoose.set('useFindAndModify', false);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
//Models
const { User } = require('./models/user');
const { Brand }=require('./models/brand');
const { Wood } = require('./models/wood');
const { Product }=require('./models/product')

//Middlewares
const { auth } = require('./middleware/auth');
const {admin}=require('./middleware/admin');

//==========================================
//           BRANDS
//==========================================
app.post('/api/product/brand',auth,admin,(req,res)=> {
    const brand=new Brand(req.body);

    brand.save((err,doc)=> {
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            brand:doc
        })
    })
})

app.get('/api/product/getbrands',(req,res)=> {
    Brand.find({},(err,brands)=> {
        if(err) return res.status(400).send(err);
        res.status(200).send(brands);
    })
})


//==========================================
//           WOODS
//==========================================

app.post('/api/product/wood',auth,admin,(req,res) => {
    const wood=new Wood(req.body);
    wood.save((err,doc) => {
        if(err) return res.json({success:false, err});
        res.status(200).json({
                              success:true,
                              wood:doc
        });
    })
})

app.get("/api/product/getwood",(req,res) => {
    Wood.find({},(err,woods) => {
        if(err) return res.status(400).send(err);
        res.status(200).send(woods);
    })
})

//==========================================
//           PRODUCTS
//==========================================

app.post("/api/product/products",auth,admin,(req,res)=> {
    const product=new Product(req.body);
    product.save((err,doc) => {
        if(err) return res.json({
            success:false,
            err
        })
        res.status(200).json({
            success:true,
            product:doc
        })
    })
})


//Using Query String
app.get("/api/product/products_by_id",(req,res)=> {

    let type = req.query.type;
    let items=req.query.id;

    if(type === "array")
    {
        let ids= req.query.id.split(',');
        items=[];
        items=ids.map((item) => {
            return mongoose.Types.ObjectId(item);
        })
    }

    Product.find({'_id':{$in:items}}).
    populate('brand').
    populate('wood').
    exec((err,doc) => {
        return res.status(200).send(doc)
    })
})

//By Arrival
//products?sortBy=createdAt&order=desc&limit=4
//By Sold
//products?sortBy=sold&order=desc&limit=4

app.get('/api/product/products',auth,(req,res) => {

    let order=req.query.order?req.query.order:'asc';
    let sortBy=req.query.sortBy?req.query.sortBy:"_id";
    let limit=req.query.limit? parseInt(req.query.limit):100;
    
    Product.find()
           .populate('brand')
           .populate('wood')
           .sort([[sortBy,order]])
           .limit(limit)
           .exec((err,products) => {
               if(err) return res.status(400).send(err);
               return res.status(200).send(products)
           });

})

//==========================================
//           USERS
//==========================================

app.get('/api/users/auth',auth,(req,res)=> {
    res.status(200).json({
        isAdmin:req.user.role===0 ? false:true,
        isAuth:true,
        email:req.user.email,
        name:req.user.name,
        lastname:req.user.lastname,
        role:req.user.role,
        cart:req.user.cart,
        history:req.user.history
    })
})

app.get('/api/users/logout',auth,(req,res)=> {
    User.findOneAndUpdate(
        { "_id":req.user._id},
        {token:''},
        (err,doc) => {
            if(err) return res.json({success:false, err});
            return res.status(200).send({success:true})
        }
    )
})

app.post('/api/users/register', (req, res) => {
    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({
            success: false,
            err
        })
        res.status(200).json({
            success: true,
            userdata: doc
        })
    })
})

app.post('/api/users/login', (req, res) => {
    //find the email
    User.findOne({ 'email': req.body.email }, (err, user) => {
        if (!user) return res.json({
            loginSuccess: false,
            message: 'Auth failed, email not found'
        });

        //if email found then check password
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) return res.json({
                loginSuccess: false,
                message: 'Wrong Password'
            })

            //if email and password correct, then generate a token

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie('w_auth', user.token).status(200).json({ loginSuccess: true })
            })
        })



    })



})

const port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log(`Server running at ${port}`)
})