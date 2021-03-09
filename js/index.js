$(document).ready(function(){
    $("#cpf").mask("999.999.999-99");
});

function validarCpf(){

  var cpf = $("#cpf").val();

   var aux = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

   var aux2 = [];
  
   var soma = 0;

   var nCpf = [];

   // quebrando a strign recebida retirando os . e -

   for (var i =0; i < cpf.length; i++){

         if (cpf.charAt(i) != "." && cpf.charAt(i) != "-" ) nCpf.push(parseInt(cpf.charAt(i)));       
   }

 
   // montando o array com os valores para a verificação do digito verificador

   for (var i =1; i < aux.length; i++) aux2.push(aux[i] * nCpf[i-1]);


   // somando todos os valores do array

   for (var i =1; i < aux2.length; i++) soma += aux2[i];
   

   var digitoVerificador;

   //descobrindo o primeiro digito verificardor

   var achou = true;

   if(11-(soma % 11) > 9){  

         digitoVerificador = 0;
         if (nCpf[9] == digitoVerificador) achou = true;
   }

   else{
        digitoVerificador = 11-(soma% 11);
        if (nCpf[9] == digitoVerificador) achou = true;
   }

   for (var i =0; i < aux.length; i++) aux2[i] = aux[i] * nCpf[i];

    // somando todos os valores do array
    soma = 0;

    for (var i =0; i < aux2.length; i++) soma += aux2[i];


    var achou2 = false;

   if(11-(soma % 11) >  9 ) {
        digitoVerificador = 0;

        if (nCpf[10] == digitoVerificador) achou2 = true;
   }

   else{
        digitoVerificador = 11-(soma% 11);

        if (nCpf[10] == digitoVerificador) achou2 = true;
   }
    
  
   // validando se o cpf é valido

   if (achou == true && achou2 == true) mostrarMensagem("CPF Valido", "alert alert-success");

   else  mostrarMensagem("CPF Invalido", "alert alert-danger");
        
}

function mostrarMensagem(mensagem, cor) {
    var dialogo = "<div style='display: block; position: fixed; width: 45.3%;'><div id='mensagem'  class='" + cor +"'role='alert'><p style='text-align:right'>" + mensagem + "</p></div></div>";
    $(".resp").append(dialogo);
    $("#mensagem").hide();
    $("#mensagem").fadeIn(200);

    // contador de tempo para a mensagem sumir
    setTimeout(function () {
        $('#mensagem').fadeOut(300, function () {
            $(this).remove();
          });
        }, 3000)
}
