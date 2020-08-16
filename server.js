const express = require('express');


const app = express();
const port = process.env.PORT || 5000;

app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));


const nodemailer = require("nodemailer");const { text } = require('express');


let transporter = nodemailer.createTransport({
  host:"smtp.umbler.com",
  port: 587,
  secure:false,
  auth:{
    user: "contato@diretoriadigital.com.br",
    pass: "contato890*()uioUIO"
  }
});


// email, subject, text
app.post('/email', (req, res) => {
  
  const { subject, email, text } = req.body;
  log('Data: ', req.body);

  app.sendMail(email, subject, text, function(err, data) {
    transporter.sendMail({
      from: "Diretoria Digital <contato@diretoriadigital.com.br>",
      to: email,
      subject: subject,
      replyTo: "contato@diretoriadigital.com.br",
      text:text,
      html: "<h2>Recebido via formulário do site:" + text + "</h2>"
    }).then(message =>{
      console.log(message);
    }).catch(err => {
      console.log(err);
    })    
  });
});

