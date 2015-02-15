var connection = require('../routes/con.js').localConnect();

module.exports = function EditRecord(req , res , next){
    var id = req.params.id;
    console.log(id);
    connection.query('SELECT * FROM customer WHERE id = ?',[id],function(err,rows){
    if(err)
        console.log("Error Selecting : %s ",err );

    res.render('EditCustomer',{page_title:"Edit Customers - Node.js",data:rows});


});

}






