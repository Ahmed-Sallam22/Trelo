import mongoose from "mongoose"

const ConnectDB= async()=>{
    return await mongoose.connect(process.env.DB_URL).then(res=>{
        console.log("DB Connect Success");
    }).catch(err=>{
        console.log("DB failed to connect");
    })
}

export default ConnectDB