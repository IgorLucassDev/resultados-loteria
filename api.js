function apiLoteria(){
    fetch('https://loteriascaixa-api.herokuapp.com/api/megasena/latest')
     .then((res) => res.json())
     .then((data) => {

        for(i = 0; i < 6; i++){
            let id = 'n' + i
            let n = document.querySelector('#'+id)
            n.innerHTML = data.dezenasOrdemSorteio[i]
        }
    })
}

apiLoteria()

