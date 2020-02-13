const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
   try{
      console.log('***TOKEN-Complete***')
      const TOKEN = req.headers.authorization.split(" ")[1]
      const SECRET = process.env.JWT_KEY
      // console.log(TOKEN, SECRET)
      const decoded = jwt.verify(TOKEN, SECRET)
      req.userData = decoded;
      next();
   }
   catch(error){
      return res.json({
         error: 'Authentication Failed'
      }) 
   }
}