function enviar(){
     
     let novaLinha = document.createElement('tr');    
     let nome =document.getElementById("nome").value;
     let email =document.getElementById("email").value;
     let telefone =document.getElementById("telefone").value;
     let bairro =document.getElementById("bairro").value;
     let sugestao = document.getElementById("sugestao").value;
     const ods6 = document.getElementById("ods6");
     const ods13 = document.getElementById("ods13");
     const ods14 = document.getElementById("ods14");
     const ods15 = document.getElementById("ods15");
     let volutario = document.getElementById("ajuda-voluntario"); 
     let divulgado = document.getElementById("ajuda-divulgacao");
     let numero = localStorage.getItem('ID');
     
          if(localStorage.getItem('ID')==null){
               let Numero = 0;            
               localStorage.setItem('ID', Numero);
               let ID = localStorage.getItem('ID');
               localStorage.setItem('nome0', nome);
               localStorage.setItem('email0', email);
               localStorage.setItem('telefone0', telefone);
               localStorage.setItem('sugestao0', sugestao);
               localStorage.setItem("ods6",0);
               localStorage.setItem("ods13",0);
               localStorage.setItem("ods14",0);
               localStorage.setItem("ods15",0);
          }else{
               
               numero = parseInt(numero);
               numero += 1;               
               let aux = "ID"+numero;
               let auxN = "nome"+numero;
               let auxE = "email"+numero;
               let auxT = "telefone"+numero;
               let auxS = "sugestao"+numero;
               localStorage.setItem(auxN, nome);
               localStorage.setItem(auxE, email);
               localStorage.setItem(auxT, telefone);
               localStorage.setItem( aux, numero);
               localStorage.setItem(auxS, sugestao);
               localStorage.setItem('ID',numero);
          }
          if(ods6.checked){
               let auxOds6 = localStorage.getItem('ods6');
               auxOds6=parseInt(auxOds6)+1;
               localStorage.setItem('ods6', auxOds6);
          }
          if(ods13.checked){
               let auxOds13 = localStorage.getItem('ods13');
               auxOds13=parseInt(auxOds13)+1;
               localStorage.setItem('ods13', auxOds13);
          }
          if(ods14.checked){
               let auxOds14 = localStorage.getItem('ods14');
               auxOds14=parseInt(auxOds14)+1;
               localStorage.setItem('ods14', auxOds14);
          }
          if(ods15.checked){
               let auxOds15 = localStorage.getItem('ods15');
               auxOds15=parseInt(auxOds15)+1;
               localStorage.setItem('ods15', auxOds15);
          }

     
}