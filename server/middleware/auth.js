import jwt, { decode } from 'jsonwebtoken';

// If a user want to like a post 
// click the like btn => auth middlware verify the user => like function called 

const auth = async(req, res, next) => {
   try {
      
    const token = req.headers.authorization.split('Bearer ')[1];
    const isCustomAuth = token.length < 500;   // token > 500 = Google Oauth OR token < 500 = local Auth

    let decodedData;

    if(token && isCustomAuth){
         decodedData = jwt.verify(token, 'test');

         req.userId = decodeData.id;
    }else {
        decodedData = jwt.decode(token);

        req.userId = decodedData.sub;
    }
     
    next();

   } catch (error) {
       console.log(error);
   }
} 

export default auth;