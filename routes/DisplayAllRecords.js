var connection = require('../routes/con.js').localConnect();

module.exports = function DisplayAllRecords(req , res , next){
    connection.query('select * from customer',function(err , rows){
        if(err)
            console.log("Error Selecting : %s ",err);
        res.render('customer',{page_title:"Customers Detail", data:rows});
    })


};