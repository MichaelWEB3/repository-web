class RecebeInformacos {
    constructor(doutor,servicos,descricao,valor){
        this.doutor = doutor 
        this.servicos = servicos
        this.descricao = descricao
        this.valor = valor
   
      }
      validar(){
        for(let i in this){
            console.log(i,this[i])
            if(this[i] == undefined || this[i] == '' || this[i] == null){
                return false
            }else{
                return true
            }
        }
    }
    
    }

    class BancoDados{
      gravar(d) {


    let  recebJason =  JSON.stringify(d)
    
     
    localStorage.setItem("item",item)
    localStorage.setItem(item,recebJason)

 }  


 pegarItem(){
   let contagem = localStorage.getItem('item')
   let listagem = Array()
   for(let i=0; i < contagem; i++){
              
              
              let recebeJason = JSON.parse(localStorage.getItem(i+1))
             
              listagem.push(recebeJason)
              
             recebeJason.id=i+1

   }

    return listagem
 }
    
 
 pesquisar(recibo){
       let filtro = Array()
       filtro =  this.pegarItem()
       console.log(recibo)
       console.log(filtro)
    
       filtro = filtro.filter( d  => d.doutor == recibo.doutor)
     
   return filtro
    }
 
}
 
 




let  bancoDados  = new BancoDados()

var item  = 0


function buttonGo(){
    let doutor = document.getElementById("doutor").value
    let servicos = document.getElementById("servicos").value
    let descricao = document.getElementById("descricao").value
    let valor = document.getElementById('valor').value
   
    let recibo = new  RecebeInformacos(doutor,servicos,descricao,valor)
   
    

   
if(recibo.validar()){
    item++
    bancoDados.gravar(recibo)
    alert("Dados inseridos com sucesso")
  
 }else{
   alert("ERRO NA INCLUSAO DE DADOS VOLTE E TENTE NOVAMENTE")
 }
  
   

} 

function carregar(){

    let  lista  = bancoDados.pegarItem()
    console.log(lista)
   
    lista.forEach(d => {
        let tableEnter = document.getElementById('tableEnter')


        

         
         tableEnter.innerHTML += ` <tr>
         <th>${d.doutor}</th>
         <th>${d.servicos}</th>
         <th>${d.descricao}</th>
         <th>${d.valor}</th>
         <th></th>
       </tr>`
    });

}



function pesquisarFo(){
    let doutor = document.getElementById("doutor").value
    let servicos = ''
    let descricao = ''
    let valor = ''
   
    let recibo = new  RecebeInformacos(doutor,servicos,descricao,valor)
   
    let valorPesquisa = bancoDados.pesquisar(recibo)
   valorPesquisa.forEach(d => {
    let tableEnter = document.getElementById('tableEnter')

    tableEnter.innerHTML += `     
    <br>
   
    <tr>

    <th style="color:red">${d.doutor}</th>
    <th style="color:red">${d.servicos}</th>
    <th style="color:red"> ${d.descricao}</th>
    <th style="color:red">${d.valor}</th>
    <th style="color:red"></th>
  </tr>`
   })

}