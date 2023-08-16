function idade(){
    //verificar idade
    var ano 
    var idade
    ano = document.getElementById('anoqn').value
    idade = 2023 - ano

    if (ano == 0 ) {
         window.alert("ERRO! Tente novamente")
    }
     // Verificar sexo
    var seusx
    var genero = ''
    var res
    var fot
    fot = document.getElementById('figura')//imagem
    seusx = document.getElementsByName('msexo')

    if (seusx[0].checked) {
        //verifica se e homem
        genero = 'Homem'
        if (idade > 0 && idade <= 4) {
            fot.src = 'imagens/bebeM.png'
        } else if (idade => 5 && idade <= 10) {
            fot.src = 'imagens/menininho.png'
        }
        if (idade > 10 && idade <= 18){
            fot.src = 'imagens/meninoM.png'
        } else if (idade > 18 && idade <= 29) {
            fot.src = 'imagens/jovemH.png'
        }
        if (idade > 29 && idade <= 45) {
            fot.src = 'imagens/homem.png'
        } else if (idade > 45 && idade <= 65) {
            fot.src = 'imagens/meiaidadeH.png'
        }
        if (idade > 65){
            fot.src = 'imagens/velho.png'
        }
        
    }
    
    if (seusx[1].checked){
        //verifica se e mulher
        genero = 'Mulher'
        if ( idade > 0 && idade <= 5) {
            fot.src = 'imagens/bebeF.png'
        } else if (idade >= 6 && idade <= 11) {
            fot.src = 'imagens/Menininha.png'
        }
        if (idade > 11 && idade <= 15) {
            fot.src = 'imagens/meninaF.png'
        } else if (idade > 15 && idade <= 25) {
            fot.src = 'imagens/jovemM.png'
        }
        if (idade > 25 && idade <= 45) {
            fot.src = 'imagens/mulher.png'
        } else if (idade > 45 && idade <= 60) {
            fot.src = 'imagens/meiaidadeM.png'
        }
        if (idade > 60 && idade <= 70) {
            fot.src = 'imagens/idoM.png'
        } else if(idade > 70){
            fot.src = 'imagens/velha.png'
        }
    }
   

    //Resultado
    document.getElementById('resu').innerHTML = genero + ' de ' + idade + ' anos'
}