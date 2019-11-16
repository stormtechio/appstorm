'use restrict';

const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    
        if(req.isAuthenticated()){
             res.status(200).send(req.user);
        }else{
            res.status(400).send({
                title : "NOT ATHENTICATED",
            });
        }
        

});



module.exports = router;