function apiLoteria(){
    fetch('https://loteriascaixa-api.herokuapp.com/api/megasena/latest')
     .then((res) => res.json())
     .then((data) => {
        let n1 = document.querySelector('#n1').innerHTML = data.dezenasOrdemSorteio[0]
        let n2 = document.querySelector('#n2').innerHTML = data.dezenasOrdemSorteio[1]
        let n3 = document.querySelector('#n3').innerHTML = data.dezenasOrdemSorteio[2]
        let n4 = document.querySelector('#n4').innerHTML = data.dezenasOrdemSorteio[3]
        let n5 = document.querySelector('#n5').innerHTML = data.dezenasOrdemSorteio[4]
        let n6 = document.querySelector('#n6').innerHTML = data.dezenasOrdemSorteio[5]
    })
}

apiLoteria()

