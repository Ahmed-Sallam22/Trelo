 const asyncHandeler=(fn)=>{
    return (req,res,next)=>{
        fn(req,res,next).catch(err=>{
            return res.json({ errmessage: err.message, err, stack: err.stack });
        })
    }
} 



export const globalErrorHandling=(err,req,res,next)=>{
    return res.json({message:err.message})
  }
  export default asyncHandeler