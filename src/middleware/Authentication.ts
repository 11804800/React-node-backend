import jwt from "jsonwebtoken";

export function VerifyAuthor(req:any,res:any,next:any)
{
   const secret:any=process.env.SECRET_KEY; 
   const authtoken = req.headers["authorization"];
   const token = authtoken && authtoken.split(" ")[1];
   jwt.verify(token,secret, (err:any, user:any) => {
     if (err) {
       res.status(401).json({ message: "Unathorized Access" });
     } else {
       req.user = user;
       next();
     }
   });
}
