var nodemailer = require('nodemailer');


const sendEmail=async (userEmail,token,id)=>{

    var transporter= nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:"patel.sapnapatel11@gmail.com",
            pass:"bgpdtdmadmfdbemz"
        }
    });
    var mailOptions ={
        from :"patel.sapnapatel11@gmail.com",
        to:`${userEmail}`,
        subject: "Reset password",
        html:`
        <p>You requested for password reset</p>
        <h5>Clink in this <a href:"http://localhost/9000/reset/${id}/${token}"> link to reset password</h5>
        `
    }
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
        }else{
            console.log("Email sent successfully");
        }
    })
 }


module.exports = {sendEmail} 
