<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles/select.css">
    <title>Document</title>
</head>

<body>
    <div id="selectCheckSheet" class="selDefStyle selectCheckSheet">
        <div class="selDefStyle sel_heading">SELECT THEM</div>
        <div class="selDefStyle sel_content">
            <div class="selDefStyle sel_subj_year_rep">
                <div class="selDefStyle sel_subj">
                    <select id="selectCheckSheetSubj" class="sub_selDefStyle" name="name1" form="form1">
                        <option value="" selected>Subject</option>
                    </select>
                </div>
                <div class="selDefStyle sel_year">
                    <select id="selectCheckSheetYear" class="sub_selDefStyle" name="name1" form="form1">
                        <option value="" selected>Year</option>
                    </select>
                </div>
                <div class="selDefStyle sel_rep">
                    <select id="selectCheckSheetRep" class="sub_selDefStyle" name="name1" form="form1">
                        <option value="" selected>Rep.</option>
                    </select>
                </div>
            </div>
            <div class="selDefStyle sel_chap_sec">
                <div class="selDefStyle sel_chap">
                    <select id="selectCheckSheetChap" class="sub_selDefStyle" name="name2" form="form2">
                        <option value="" selected>Chapter</option>
                    </select>
                </div>
                <div class="selDefStyle sel_sec">
                    <select id="selectCheckSheetSec" class="sub_selDefStyle" name="name2" form="form2">
                        <option value="" selected>Section</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="selDefStyle sel_control">
            <div class="selDefStyle sel_clear">
                <button id="clearSelect" class="sub_selDefStyle">DBL CLICK TO CLEAR</button>
            </div>
        </div>
    </div>

    <!-- <script src="scripts/js/modules/select.js"></script> -->
</body>

</html>