<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles/answers.css">
    <title>Document</title>
</head>

<body>
    <div class="answerInput_block">
        <div class="answerInput_btn">
            <!-- <dialog open>Message</dialog> -->
            <button id="answerInputBtn"><i>Insert</i> Answers</button>
        </div>
        <div class="answerInput_content">
            <!-- '#selectCheckSheetSec' of the <SELECT> element below -->
            <div class="answerInput_content_select">
                <select id="selectAnswerInputNumber" name="" form="">
                    <!-- <option value="1">1</option> -->
                    <!-- add section's full numbers by dom  -->
                </select>
            </div>
            <div class="answerInput_content_inputs">
                <input id="answerInput" type="text" value="" maxlength="4" placeholder="Insert the answer:">
                <input id="answerSubmit" type="submit" value="Submit">
            </div>
        </div>
    </div>
    <div class="answerInput_table">
        <div class="answerInputTableBtn"><button id="answerInputTableBtn">Answer Status Table</button></div>
        <div class="answerInputTableContent"></div>
    </div>

    <!-- <script src="scripts/js/modules/answers.js"></script> -->
</body>

</html>