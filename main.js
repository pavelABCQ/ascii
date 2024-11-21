function getid(id) {
    return document.getElementById(id)
}
const bod = getid('bod')
const aft = getid('aft')
const head = getid('head')
const onebtn = getid('onebtn')
const twobtn = getid('twobtn')
const main = getid('main')
const codinp = getid('codinp')
const codout = getid('codout')
const codbtn = getid('codbtn')
const decodinp = getid('decodinp')
const decodout = getid('decodout')
const decodbtn = getid('decodbtn')


onebtn.addEventListener('click',de)
twobtn.addEventListener('click',cr)
codbtn.addEventListener('click',cod)
decodbtn.addEventListener('click',decod)

let move = false
function de(){
    if (move==true) {
        main.style.transform = 'translate(0%)'
        move = false
    }
    aft.style.animation = 'cry .5s  linear alternate forwards'

}
function cr(){
    if (move==false) {
        main.style.transform = 'translate(-50%)'
        move = true
    }
    aft.style.animation = 'dec .5s  linear alternate forwards'
}
function cod() {
    text = codinp.value
    x = text.split('')
    y=[]
    for (let i of x) {
        y+=(i.charCodeAt(0))+' '
    }
    codout.innerHTML = y
}

function decod() {
    console.log('aaa')
    num = decodinp.value
    x=num.split(' ')
    y = []
    for (let i of x) {
        y+=String.fromCharCode(i)
    }
    decodout.innerText= y
}