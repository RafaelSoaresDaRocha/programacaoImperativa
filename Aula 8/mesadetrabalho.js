 
function podeSubir(altura, acompanhado){
    let podeSubir = false

if(altura <= 2.0 && altura >= 1.20){
    podeSubir = true 

}

if(altura >= 1.20 && acompanhado){
    podeSubir = true
}
return podeSubir
}

function podeSubir(altura )