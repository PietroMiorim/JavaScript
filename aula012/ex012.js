var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <= 12) {
    console.log(`Tenha uma Bom Dia!`)
} else if (hora <= 18) {
    console.log(`Tenha uma Boa Tarde!`)
} else if (hora < 23) {
    console.log(`Tenha uma Boa Noite!`)
} else {
    console.log(`Tenha uma Boa Madrugade!`)
}