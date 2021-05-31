function cronometro(){//Função em que calcula a hora atual e dispara ela no display do site.
    var result = document.getElementById('horas')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundos = data.getSeconds()

    if(hora < 10){hora = '0'+hora}
    if(minuto < 10){minuto = '0'+minuto}
    if(segundos < 10){segundos = '0'+segundos}

    var time = hora+":"+minuto+":"+segundos
    result.innerHTML = time
}
function time(){ //Intervalo de tempo em que a hora é atualizada
    setInterval(cronometro, 500)
}

//-------------------------VARIAVEIS---------------------------------------

    var data = new Date()
    // var horas = 14
    var horas = data.getHours()
    var title = document.getElementById('title')
    var fundo = document.getElementById('body')
    var imgs = document.getElementById('img')
    var creditos = document.getElementById('creditos')

    //---------------------------DIA-----------------------------------

    if(horas > 5 && horas <= 12){
        fundo.style = 'background-color: #88ffcd;'
        title.style = 'color: black;'
        creditos.style = 'color: black;'
        imgs.src = 'code/images/manhã.jpg'

            //---------------------------TARDE-----------------------------------

            }else if(horas >= 13 && horas <= 18){
                fundo.style = 'background-color: #ffac2fb4;'
                title.style = 'color: black;'
                creditos.style = 'color: black;'
                imgs.src = 'code/images/tarde.jpg'

                //---------------------------NOITE-----------------------------------

                }else if(horas > 19 && horas <= 23){
                        fundo.style = 'background-color: #0c0b27;'
                        title.style = 'color: white;'
                        imgs.src = 'code/images/noite.jpg'

                //---------------------------MADRUGADA-----------------------------------

                        }else{
                            fundo.style = 'background-color: #1f1f1f;'
                            title.style = 'color: white;'
                            imgs.src = 'code/images/madrugada.jpg'
                        }