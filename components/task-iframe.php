<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles/task-iframe.css">
    <title>Document</title>
</head>

<body>
    <div id='iframe' class="ifrDefStyle ifr iframe">
        <div class="ifrDefStyle iframe__img">
            <div class="sub_ifrDefStyle sub_iframe__img"></div>
        </div>

        <div class="ifrDefStyle iframe__content">
            <div class="ifrDefStyle ifrCont__btn">
                <button id="loadIframe" class="sub_ifrDefStyle sub_ifrCont__btn">Load Book</button>
            </div>
            
            <div id="iframeContainer" class="ifrDefStyle ifrCont__content">
                <div class="ifrDefStyle ifrContCont_controler">
                    <div class="ifrDefStyle ifrContContCtrl__slider">
                        <div class="ifrDefStyle ifrContContCtrlSlider__input">
                            <input id="ifrContrSlider_Input" class="slider sub_ifrDefStyle sub_ifrContContCtrlSlider__input" type="range" min="250" max="1250" step="50" value="750">
                        </div>
                        <div class="ifrDefStyle ifrContContCtrlSlider__status">
                            <div id="ifrContrSlider_status" class="sub_ifrDefStyle sub_ifrContContCtrlSlider__status">Size: <span id="demo"></span> </div>
                        </div>
                    </div>
                </div>
                <div class="ifrContCont_iframe">
                    <iframe id="iframeSource" class="sub_ifrDefStyle" src=""></iframe>
                </div>
            </div>
        </div>
    </div>
</body>

</html>