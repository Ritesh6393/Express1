const express=require('express');

const path=require('path');

const router=express.Router();

router.get('/addProduct',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','addProduct.html'));
})
  
router.post('/addProduct',(req,res,next)=>{
    
    res.redirect('/');
})

module.exports=router;