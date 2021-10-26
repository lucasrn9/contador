function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    

    if(inicio.value.length==0 || fim.value.length==0 || passo.value.length==0){
        window.alert('[ERRO] Algum dos campos se encontra vazio, verifique-os e tente novamente!')
    }

    
    
    else{ 
    
    var i = Number(inicio.value) 
    var f = Number(fim.value)
    var p = Number(passo.value)

    if(passo.value<=0){

        window.alert('O valor do passo não pode ser 0! A contagem será realizada considerando passo 1')
        p=1    
    
        }
    
        res.innerHTML='Contando: '    

        for(i; i<=f; i+=p){

        res.innerHTML+=`${i}&#x1F449; `

        }
        res.innerHTML+='&#x1F3C1'
} 

    

}








