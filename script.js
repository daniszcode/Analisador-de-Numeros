const res = document.querySelector('div#res');
const lista = document.querySelector('select#fLista');
const valores = [];
const num = document.querySelector('input#addNumber');




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
        res.innerHTML = ''
        item.addEventListener('click', function() { 
            item.remove()
        })
    } else {
        window.alert('Valor inválido ou já existente na lista.')
    }
    salvarItem()
    num.value = ""
    num.focus() // variavel + funcao nativa focus [apaga o valor do input] 
    
}


function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let maior = valores[0] //o valor inicial tem que ser o valor inicial do array
        let menor = valores[0]
        let soma = 0
        let media = 0
        valores.forEach(item => {
            if (item > maior) {
                maior = item
            } else if (item < menor) {
                menor =  item
            }
            soma = soma + item
        })
        const tot = valores.length
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo você adicionou ${tot} numeros.</p>` 
        res.innerHTML += `<p>O maior numero é ${maior}</p>`
        res.innerHTML += `<p>O menor numero é ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os numeros é ${soma}</p>`
        res.innerHTML += `<p>A média de todos os numeros é ${parseInt(media)}</p>`
        
    }
    
}
function salvarItem() {
    const numero = Number(document.querySelector("#addNumber").value);
    const objectNum = { numero,  
       done: false
    };
    const valores = JSON.stringify(objectNum)
    //const local = localStorage.setItem('list', valores)
    console.log(valores)
       // return local

}


