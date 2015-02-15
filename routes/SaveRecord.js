var connection = require('../routes/con.js').localConnect();

module.exports = function SaveRecord(req , res , next){

    var input = JSON.parse(JSON.stringify(req.body));

    var RecordDetailParsedFromForm = {

        name    : input.name,
        address : input.address,
        email   : input.email,
        phone   : input.number

    };
    connection.query("INSERT INTO customer set ? ",RecordDetailParsedFromForm, function(err, rows)
    {

        if (err)
            console.log("Error inserting : %s ",err );

        res.redirect('/customer');

    });


}
