import joi from "joi";
export const ChangePassword = 
  joi
  .object({
    oldpassword:joi
      .string()
      .pattern(
        new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z].{8,}$)/)
      )
      .required(),
    newpassword:joi
      .string()
      .pattern(
        new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z].{8,}$)/)
      )
      .required(),
      repassword: joi.string().valid(joi.ref("newpassword")).required(),
  }).required()



  export const update = joi
  .object({
    userName: joi.string().min(8).max(25).trim().required(),
    age: joi.number().integer().min(12).max(100),
    phone: joi
    .string()
    .pattern(new RegExp(/^01[0125][0-9]{8}$/))
    .required(),
  })
  .required();
