function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = 'Agora são ' + hora + ' Horas'
if(hora >= 0 && hora < 12){
    //BOM DIA
    img.src = 'imagens/fotomanhaP.png'
    document.body.style.backgroundColor = '#fffbf8'
} else if (hora >= 12 && hora <= 18){
    //BOA TARDE
    img.src = 'imagens/fototardeP.png'
    document.body.style.backgroundColor = '#a46965'
} else {
    //BOA NOITE
    img.srcc = 'imagens/fotonoiteP.png'
    document.body.style.backgroundColor = '#a46965'
}
}