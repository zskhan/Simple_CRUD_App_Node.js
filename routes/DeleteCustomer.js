var connection = require('../routes/con.js').localConnect();

module.exports = function DeleteRecord(req , res , next){

    var id = req.params.id;
    connection.query("DELETE FROM customer  WHERE id = ? ",[id], function(err, rows)
    {

        if(err)
            console.log("Error deleting : %s ",err );

        res.redirect('/customer');

    });

}