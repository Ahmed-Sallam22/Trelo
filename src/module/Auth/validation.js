import joi from "joi";
export const signup = 
  joi
  .object({
    userName: joi.string().min(8).max(25).trim().required(),
    email: joi.string().email().required(),
    password: joi
      .string()
      .pattern(
        new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z].{8,}$)/)
      )
      .required(),
    rePassword: joi.string().valid(joi.ref("password")).required(),
    age: joi.number().integer().min(12).max(100),
    gender: joi.string().valid("Male", "Female").required(),
    phone: joi
      .string()
      .pattern(new RegExp(/^01[0125][0-9]{8}$/))
      .required(),
  }).required()



  export const login = joi
  .object({
    email: joi.string().email().required(),
    password: joi
      .string()
      .pattern(
        new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z].{8,}$)/)
      )
      .required(),
  })
  .required();
