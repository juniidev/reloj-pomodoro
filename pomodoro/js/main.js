// ===== variables globales =====

let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');

let workTime = 25;
let breakTime = 5;

let seconds = "00";

// ===== Display =====

window.onload = () => {
    document.getElementById('min').innerHTML = workTime;
    document.getElementById('sec').innerHTML = seconds;

    workTitle.classList.add('active');
}

// ===== Start timer =====
function start() {
    // cambiar el boton
    document.getElementById('start').style.display = 'none';
    document.getElementById('reset').style.display = 'block';

    // cambiar el tiempo
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    // cuenta regresiva
    let timerFunction = () => {
        //cambia el display
        document.getElementById('min').innerHTML = workMinutes;
        document.getElementById('sec').innerHTML = seconds;

        // iniciar
        seconds = seconds - 1;

        if (seconds === 0) {
            workMinutes = workMinutes - 1;
            if (workMinutes === -1) {
                if (breakCount % 2 === 0) {
                    // inicia el descanso
                    workMinutes = breakMinutes;
                    breakCount++

                    // cambiar el panel
                    workTitle.classList.remove('active');
                    breakTitle.classList.add('active');
                } else {
                    // continuar trabajando
                    workMinutes = workTime;
                    breakCount++


                    // cambiar el panel
                    breakTitle.classList.remove('active');
                    workTitle.classList.add('active');
                }
            }
            seconds = 59;
        }
    }

    //iniciar cuenta regresiva
    setInterval(timerFunction, 1000); //1000 = 1s

}