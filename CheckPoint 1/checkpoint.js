let pipoca = 1
let macarrao = 2
let carne = 3
let feijao = 4
let brigadeiro = 5

function preparoPipoca(pipoca, valor){
    if(pipoca == 1 && valor > 20 && valor <= 20){
        console.log("Comida Queimou")

    }else if(pipoca != 1 && valor){
        console.log("Prato inexistente")

    }else if(pipoca == 1 && valor < 10){
        console.log("Tempo Insuficiente")

    }else if(pipoca == 1 && valor > 30){
            console.log("kabuum")
    }else{
        console.log( "Prato pronto, bom apetite!!!")
    }
}

preparoPipoca(1,11)

function preparoMacarrao(macarrao, valor){
    if(macarrao == 2 && valor > 16 && valor <= 24){
        console.log("Comida Queimou")

    }else if(macarrao != 2 && valor){
        console.log("Prato inexistente")

    }else if(macarrao == 2 && valor < 8){
        console.log("Tempo Insuficiente")

    }else if(macarrao == 2 && valor > 24){
            console.log("kabuum")
    }else{
        console.log( "Prato pronto, bom apetite!!!")
    }
}

preparoMacarrao(2,17)

function preparoCarne(carne, valor){
    if(carne == 3 && valor > 30 && valor <= 45){
        console.log("Comida Queimou")

    }else if(carne != 3 && valor){
        console.log("Prato inexistente")

    }else if(carne == 3 && valor < 15){
        console.log("Tempo Insuficiente")

    }else if(carne == 3 && valor > 45){
            console.log("kabuum")
    }else{
        console.log( "Prato pronto, bom apetite!!!")
    }
}

preparoCarne(3,46)

function preparoFeijao(feijao, valor){
    if(feijao == 4 && valor > 24 && valor <= 36){
        console.log("Comida Queimou")

    }else if(feijao != 4 && valor){
        console.log("Prato inexistente")

    }else if(feijao == 4 && valor < 12){
        console.log("Tempo Insuficiente")

    }else if(feijao == 4 && valor > 36){
            console.log("kabuum")
    }else{
        console.log( "Prato pronto, bom apetite!!!")
    }
}

preparoFeijao(4,9)

function preparoBrigadeiro(brigadeiro, valor){
    if(brigadeiro == 5 && valor > 16 && valor <= 24){
        console.log("Comida Queimou")

    }else if(brigadeiro != 5 && valor){
        console.log("Prato inexistente")

    }else if(brigadeiro == 5 && valor < 8){
        console.log("Tempo Insuficiente")

    }else if(brigadeiro == 5 && valor > 24){
            console.log("kabuum")
    }else{
        console.log( "Prato pronto, bom apetite!!!")
    }
}

preparoBrigadeiro(4,20)