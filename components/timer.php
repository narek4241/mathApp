<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles/timer.css">
    <title>Document</title>
</head>

<body>
    <div id="timerDialog" class="timDefStyle timer_dialog">
        <dialog class="sub_timer_dialog" open>Please turn the timer <i>ON</i></dialog>
    </div>

    <timer id='timer' class="timDefStyle timer">
        <div class="timDefStyle timer_display">
            <div id="timerTime" class="timDefStyle timer_time">
                <time id="sub_timer_time" class="timDefStyle">00:00:00</time>
            </div>
        </div>

        <div id="timerControlers" class="timDefStyle timer_controlers">
            <button id="startTimer">
                <div id="sub_startTimer" class="timDefStyle"></div>
            </button>
            <button id="stopTimer">
                <div id="sub_stopTimer" class="timDefStyle"></div>
            </button>
            <button id="clearTimer">
                <div id="sub_clearTimer" class="timDefStyle"></div>
            </button></div>
        </div>
    </timer>

    <!-- <script src="scripts/js/modules/timer.js"></script> -->
</body>

</html>