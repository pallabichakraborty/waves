let admin= (req,res,next) => {
    if(req.user.role === 0)
    {
        return res.send('You are not an admin, you can not save brands')
    }
    next();
}

module.exports={admin}