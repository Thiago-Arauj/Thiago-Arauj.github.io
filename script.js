function enviarEmail() {
    var nome = document.getElementById('nome').value;
    var mensagem = document.getElementById('mensagem').value;
  
    // Configuração para EmailJS
    var templateParams = {
        to_name: "Thiago",
        from_name: nome,
        message: mensagem,
        reply_to: "thiagoaraujo@ads.fiponline.edu.br"
    };
  
    // Substitua SEU_ID_DE_SERVICO e SEU_ID_DE_TEMPLATE pelos valores fornecidos pelo EmailJS
    emailjs.send('service_vg5xywm', 'template_h4294ip', templateParams).then(
        function(response) {
            console.log('SUCESSO!', response.status, response.text);
            alert("E-mail enviado com sucesso!");
        },
        function(err) {
            console.log('FALHOU...', err);
            alert("Erro ao enviar e-mail.");
        }
    );
  }
  