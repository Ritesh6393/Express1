const express=require('express');

const router=express.Router();

router.get('/addProduct',(req,res,next)=>{
    console.log('In the middleware');
    res.send('<html><head><head><body><form action="/admin/addProduct" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form></body></html>')
})
  
router.post('/addProduct',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports=router;