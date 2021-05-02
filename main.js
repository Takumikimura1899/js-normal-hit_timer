let timer;
let sec = 0;

const confirmTime = document.getElementById('confirmTime');
const startTimer = document.getElementById('startTimer');

// confirmTimeの処理
confirmTime.addEventListener('click', function() {
    if (sec === 20) {
        alert('正解');
    } else if (sec < 20) {
        alert(`まだ${sec}`);
    } else {
        alert(`もう${sec}`);
    }
    clearInterval(timer);
    sec = 0;
});

// startTimerの処理
startTimer.addEventListener('click', function() {
    clearInterval(timer);
    timer = setInterval('countUp()',1000);
});

const countUp = function() {
    sec += 1;
    console.log(sec);
    if (sec === 40) {
        clearInterval(timer);
        alert('タイムオーバー');
        sec = 0;
    }
};

// フロー
// スタートを押す
// カウントが進む
// 確認ボタンを押す
// カウントが２０秒だったら成功ですをアラート
// 20秒ではなかったら結果と秒数をアラート
// 40秒たったら強制終了
