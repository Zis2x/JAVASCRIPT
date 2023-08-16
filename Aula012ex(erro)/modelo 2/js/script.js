function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.Value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('ERRO! Verifique os dados e tente novamente')
    } else {
        window.alert('Tudo Ok')
    }
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked){
        genero = 'homem'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', '../fotos/bebeM.png')
        }else if (idade < 21){
            //jovem
            img.setAttribute('src', 'fotos/MeninoM.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'fotos/homem.png')
        } else {
            //idoso
            img.setAttribute('src', 'fotos/velho')
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher'
    }
    if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'fotos/bebeF')
    } else if (idade < 21){
        //jovem
        img.setAttribute('src', 'MeninaF')
    } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'mulher')
    } else {
        //idoso
        img.setAttribute('src', 'velha')
    }
    res.innerHTML = 'Detecmos ' + genero + 'com ' + idade + 'anos'
    res.appendChild(img)
}