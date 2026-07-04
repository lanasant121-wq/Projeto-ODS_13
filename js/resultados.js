const c = parseInt(localStorage.getItem('ID'))+1;
const pOds = document.getElementById('p');
const linhaS = document.createElement("p");
    for(let i =0;c>i;i++){
       
            const dados = document.getElementById('dados');
            const sug = document.getElementById('sug');
            let auxN = "nome"+i;
            let auxE = "email"+i;
            let auxT = "telefone"+i;
            let auxS = "sugestao"+i;
            console.log(localStorage.getItem(auxN))
            const novaLinha = document.createElement("tr");
            dados.appendChild(novaLinha);
            const linhaV = document.createElement("td");
            const linhaN = document.createElement("td");
            const linhaE = document.createElement("td");
            const linhaT = document.createElement("td");
            const linhaS = document.createElement("p");
            linhaS.innerHTML= localStorage.getItem(auxS);
            linhaN.innerHTML= localStorage.getItem(auxN);
            linhaE.innerHTML= localStorage.getItem(auxE);
            
            if(localStorage.getItem(auxT) ==""){
                 linhaT.innerHTML="não informando";
            }else{
                linhaT.innerHTML= localStorage.getItem(auxT);
            }
            dados.appendChild(linhaV); 
            dados.appendChild(linhaN);
            dados.appendChild(linhaE);
            dados.appendChild(linhaT);
            sug.appendChild(linhaS);
    }
    const ods6 = document.createElement("p");
    ods6.innerHTML =parseInt(parseInt(localStorage.getItem('ods6'))/c*100)+'%';
    pOds.appendChild(ods6);
    const ods13 = document.createElement("p");
    ods13.innerHTML =parseInt(parseInt(localStorage.getItem('ods13'))/c*100)+'%';
    pOds.appendChild(ods13);
    const ods14 = document.createElement("p");
    ods14.innerHTML =parseInt(parseInt(localStorage.getItem('ods14'))/c*100)+'%';
    pOds.appendChild(ods14);
    const ods15 = document.createElement("p");
    ods15.innerHTML =parseInt(parseInt(localStorage.getItem('ods15'))/c*100)+'%';
    pOds.appendChild(ods15);
function reset(){
     localStorage.clear()
}