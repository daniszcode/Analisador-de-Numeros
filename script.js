let res = document.querySelector('div#res')
let lista = document.querySelector('select#fLista')
let valores = []
const num = document.querySelector('input#addNumber')


function isNumero(n) {

    if (Number(n) >= 1 && Number(n) <= 100) { //verifica se os num estão entre 0 e 100//

        return true
    } else {
        return false
    }

}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { //roda a lista e verifica se aquele numero ja tem um indice nela, caso o n° seja negativo é pq não tem//
        return true
    } else {
        return false
    }
}

function adicionar() {



    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já existente na lista.')
    }
}


/*function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        const maior = 0
        const menor = 0
        valores.forEach(item => {
            console.log(item)
            if (item > maior) {
                maior = item
            } else if (item < menor) {
                menor = item
            }
        })
        const tot = valores.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo você adicionou ${tot}</p>` 
    }

}
finalizar()*/