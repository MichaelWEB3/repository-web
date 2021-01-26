
class Despesas{
    constructor(ano,mes,dia,tipo,descricao,valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
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

  mostrar(){
      console.log(this.ano)
      console.log(this.mes)
      console.log(this.dia)
      console.log(this.tipo)
      console.log(this.descricao)
      console.log(this.valor)
  }

}

class Dd{
    
gravar(d){
    localStorage.setItem('item',item)
     localStorage.setItem(item,JSON.stringify(d))
}


recuperarRe(){
    
    let tabela = document.getElementById('tabela')
    let contagem = localStorage.getItem('item')
    let despesas = Array()

    for(let i =0; i < contagem; i++ ){ 
        
    let despesa = JSON.parse(localStorage.getItem(i+1)) 
  
    
    despesas.push(despesa)
    
   despesa.id = i
   
  }
  
 return despesas 

}


pesquisar(despesa){

 let dispesasFil= Array()
 dispesasFil =    this.recuperarRe()

console.log(dispesasFil)
console.log(despesa)


if(despesa.ano != ''){
   dispesasFil = dispesasFil.filter(d => d.ano == despesa.ano)
 
 
}



if(despesa.mes != ''){
    dispesasFil = dispesasFil.filter(d => d.mes == despesa.mes)
  
  
 }

 if(despesa.dia != ''){
    dispesasFil = dispesasFil.filter(d => d.dia == despesa.dia)
  
  
 }
 
 if(despesa.tipo != ''){
    dispesasFil = dispesasFil.filter(d => d.tipo == despesa.tipo)
  
  
 }


 
 if(despesa.descricao != ''){
    dispesasFil = dispesasFil.filter(d => d.descricao == despesa.descricao)
  
  
 }

 
 if(despesa.valor != ''){
    dispesasFil = dispesasFil.filter(d => d.valor == despesa.valor)
  
  
 }


return dispesasFil


}

remover(item){
    let valor = item+1
 localStorage.removeItem(valor)
}

}
     let bd = new Dd()
    var item = 0


     function clicar(){
       
        let  ano = Number(document.getElementById('ano').value)
        let  mes = document.getElementById('mes').value
        let dia = Number(document.getElementById('dia').value)
        let tipo = document.getElementById('tipo').value
        let descricao = document.getElementById('descricao').value
        let  valor = Number(document.getElementById('valor').value)
        

         let intraDespeas = new Despesas(ano,mes,dia,tipo,descricao,valor)
        
    
         intraDespeas.validar()

         if(intraDespeas.validar()){
            item++
          alert("DADOS INSERIDOS COM SUCESSO")
          bd.gravar (intraDespeas)
          
         }else{
           alert("ERRO NA INCLUSAO DE DADOS VOLTE E TENTE NOVAMENTE")
         }
          
        
      
       
          
}

function carregaPa(){
 
    let despesa = Array()  
    despesa =  bd.recuperarRe()
    console.log(despesa)
   
    let tabela = document.getElementById('tabela')
 
    despesa.forEach(function(d){
        console.log(d)
       let linha = tabela.insertRow()


       switch(d.tipo){
        case '1': d.tipo = 'Alimentação'
        break
        case '2': d.tipo = 'Educação'
        break
        case '3': d.tipo = 'Lazer'
        break
        case '4': d.tipo = 'Saude'
        break
        case '5': d.tipo = 'trasnporte'
        break
    }

       linha.insertCell(0).innerHTML= `${d.dia} / ${d.mes} / ${d.ano}`
       linha.insertCell(1).innerHTML= `${d.tipo}`
       linha.insertCell(2).innerHTML= `${d.descricao}`
       linha.insertCell(3).innerHTML= `${d.valor}`
      
       

    let btn = document.createElement("button")
    btn.className='btn btn-danger'
   btn.innerHTML = '<i class="fas fa-times"></i>'
   btn.id =  'id_despesa'+d.id 
   
   btn.onclick = function(){
      

       let id = this.id.replace('id_despesa','')
 
         alert(id)
         bd.remover(id)
    }
    btn.innerHTML = '<i class="fas fa-times"></i>'
    linha.insertCell(4).append(btn)

       
    })

}




function pesquisarFo(){
    
    let  ano = Number(document.getElementById('ano').value)
    let  mes = document.getElementById('mes').value
    let dia = Number(document.getElementById('dia').value)
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let  valor = Number(document.getElementById('valor').value)
    

    let despesas = new Despesas(ano,mes,dia,tipo,descricao,valor)
  
    let mostraPes = new Array()

   mostraPes =  bd.pesquisar(despesas)
   
   console.log(mostraPes)


   let tabela = document.getElementById('tabela')
 
   mostraPes.forEach(function(d){
       console.log(d)
       let linha = tabela.insertRow()
       linha.style = `background:red;`

      switch(d.tipo){
       case '1': d.tipo = 'Alimentação'
       break
       case '2': d.tipo = 'Educação'
       break
       case '3': d.tipo = 'Lazer'
       break
       case '4': d.tipo = 'Saude'
       break
       case '5': d.tipo = 'trasnporte'
       break
   }

      linha.insertCell(0).innerHTML= `${d.dia} / ${d.mes} / ${d.ano}`
      linha.insertCell(1).innerHTML= `${d.tipo}`
      linha.insertCell(2).innerHTML= `${d.descricao}`
      linha.insertCell(3).innerHTML= `${d.valor}`
     
      
      
  

      
   })

}