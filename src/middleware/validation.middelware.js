export const validation=(schema)=>{
    return (req,res,next)=>{
        const validationResult=schema.validate({...req.body,...req.params,...req.query},{abortEarly:false}   )
      if(validationResult.error){
        return res.json({message:"validateErrors",validationResult:validationResult.error.details})
      }
    return next()
    }
}  