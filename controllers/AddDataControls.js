const table_user = require('../models/TableModel')

exports.add = async(req, res)=>{
    const {name, email, phone} = req.body;

    if(!name || !email || !phone ){
    res.status(422).json({
        "message":"not filled properly"
    })
    return;}

    try{
        const table_exist = await table_user.findOne({email:email});
        if(table_exist){
            res.status(422).json({
                "message":"email already exists"
            })
            return;
        }
        else{
            const newtable_user = new table_user({
                name: name,
                email: email,
                phone: phone,
            })
    
            const m  =await newtable_user.save();
            if(m){
                res.json({"message":"account created"});
                return;
            }
        }
    }catch(e){
        res.status(500).json({
            "message":`server error : ${e}`
        });
    }
}