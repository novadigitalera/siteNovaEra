const nodemailer = require("nodemailer");;

let transporter = nodemailer.createTransport({

  host:"smtp.umbler.com",
  port: 587,
  secure:false,
  auth:{
    user: "contato@diretoriadigital.com.br",
    pass: "contato890*()uioUIO"
  }
});

transporter.sendMail({
  from: "Diretoria Digital <contato@diretoriadigital.com.br>",
  to: "eduardorutkoskididio@gmail.com",
  subject: "Teste de assunto",
  replyTo: "contato@diretoriadigital.com.br",
  text:"Text body exemplo",
  html: "<h2>teste <a href='www.diretoriadigital.com.br'>aqui</a></h2>"
}).then(message =>{
  console.log(message);
}).catch(err => {
  console.log(err);
})