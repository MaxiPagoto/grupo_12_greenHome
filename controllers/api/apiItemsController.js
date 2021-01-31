const db = require('../../database/models/index');


const apisItemsController = {
        list:  (req,res)=>{
            res.send('List')
        }        
    };

module.exports = apisItemsController;