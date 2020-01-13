<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles/taskIframe.css">
    <title>Document</title>
</head>

<body>
    <div class="ifrDefStyle iframe_container">
        <div class="ifrDefStyle iframe_btn">
            <button id="loadIframe" class="sub_ifrDefStyle">Load Iframe</button>
        </div>
        <div id="iframeContainer" class="ifrDefStyle iframe_content">
            <div class="ifrDefStyle iframe_controler">
            <div class="ifrDefStyle ifrCtrl_slider">
                <div class="ifrDefStyle ifrCtrlSlider_input">
                    <input id="ifrContrSlider_Input" class="slider" type="range" min="250" max="1250" step="50" value="750">
                </div>
                <div class="ifrDefStyle ifrContrSlider_status">
                    <div id="ifrContrSlider_status">Size: <span id="demo"></span> </div>
                </div>
            </div>
            </div>
            <div class="iframe">
                <iframe id="iframeSource" class="sub_ifrDefStyle" src=""></iframe>
            </div>
        </div>
    </div>

    <!-- <script src="scripts/js/modules/taskIframe.js"></script> -->
</body>

</html>