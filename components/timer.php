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
    <!-- controls -->
    <?php //include 'components/slide-navigation.php'; ?>

    <div id="timerDialog" class="timDefStyle timer_dialog">
        <dialog class="sub_timer_dialog" open>Please turn the timer <i>ON</i></dialog>
    </div>

    <timer id='timer' class="timDefStyle timer">
        <div class="timDefStyle timer__logo">
            <div class="sub_timDefStyle sub_timer__logo"></div>
        </div>

        <div class="timDefStyle timer__display">
            <div id="timerTime" class="timDefStyle timerDisplay_time">
                <time id="sub_timer_time" class="sub_timDefStyle">00:00:00</time>
            </div>
        </div>

        <div id="timerControlers" class="timDefStyle timer__controlers">
            <button id="startTimer">
                <div id="sub_startTimer" class="sub_timDefStyle"></div>
            </button>
            <button id="stopTimer">
                <div id="sub_stopTimer" class="sub_timDefStyle"></div>
            </button>
            <button id="clearTimer">
                <div id="sub_clearTimer" class="sub_timDefStyle"></div>
            </button>
        </div>
    </timer>
</body>

</html>