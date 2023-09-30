import nodemailer from 'nodemailer'

const sendEmail=async({to,cc,bcc ,subject ,text ,html,attachment=[]})=>{
    const transporter = nodemailer.createTransport({
      service:'gmail',
        auth: {
          user:process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD
        }
      });
      const info = await transporter.sendMail({
        from:`'"Ahmed Sallam👻"<${process.env.EMAIL}>`, // sender address
        to, // list of receivers
        subject , // Subject line
        text , // plain text body
        html, // html body
        cc,
        bcc,
        attachment
      });
      
return info;

}

export default sendEmail