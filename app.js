const showTime = document.querySelector('#showTime');
const btnStart = document.querySelector('#btn-start');
const btnPause = document.querySelector('#btn-pause');
const btnClear = document.querySelector('#btn-clear');
const resultShow = document.querySelector('#resultShow');

var second = 60;


btnStart.addEventListener('click', function(e) {
    e.preventDefault();
    let Minute = document.querySelector('#minute');
    var minute = Number(Minute.value);
    if (minute == 0) {
        alert('please input a value');
        window.reload();
        // window.location.reload();
    }
    btnPause.className = 'd-block';
    btnClear.className = 'd-block';
    btnStart.className = 'd-none';
    Minute.className = 'd-none';
    const myInterval = setInterval(promodoroTimer, 1000);
    btnPause.addEventListener('click', function() {
        btnPause.className = 'd-none';
        btnStart.className = 'd-block';
        btnStart.innerHTML = 'Resume';
        clearInterval(myInterval);
    });
    btnClear.addEventListener('click', function() {
        window.location.reload();
    });

    function promodoroTimer() {
        second -= 1;
        if (second == -1) {
            second = 60;
            minute -= 1;
        } else if (minute == 0) {
            resultShow.className = 'd-block text-center';
            showTime.className = 'd-none';
            btnPause.className = 'd-none';
            btnClear.innerHTML = 'Start Again'
            clearInterval(myInterval);

        } else {
            let m = '';
            let s = '';
            if (minute < 10) {
                m += '0';
            }
            if (second < 10) {
                s += '0';
            }
            showTime.textContent = `${m}${minute-1}: ${s}${second}`;
        }
    }
});