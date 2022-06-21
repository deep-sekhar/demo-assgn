const table_user = require('../models/TableModel')

exports.get = async(req, res)=>{

    try{
        const table_exist = await table_user.find();
        if(!table_exist){
            res.status(422).json({
                "message":"failed"
            })
            return;
        }
        else{
            res.status(200).json({
                "message":"success",
                "data": table_exist
            }
            );
        }
    }catch(e){
        res.status(500).json({
            "message":`server error : ${e}`
        });
    }
}