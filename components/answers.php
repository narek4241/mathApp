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
    <div id="answers" class="answDefStyle answers">
        <div class="answDefStyle answers__input">
            <div class="answDefStyle answInput__btn">
                <button id="answerInputBtn"><i>Insert</i> Answers</button>
            </div>
            <div id="answerInputCont" class="answDefStyle answInput__content">
                <div class="answDefStyle answInpCont__select">
                    <select id="selectAnswerInputNumber" disabled>
                        <!-- <option value="1">1</option> -->
                        <!-- add section's full numbers by dom  -->
                    </select>
                </div>
                <div class="answDefStyle answInpCont__form--submit">
                    <div id='answInpContForm' class="answDefStyle answInpCont__form">
                        <!-- by dom -->
                    </div>
                    <div class="answDefStyle answInpCont__submit">
                        <input id="answerSubmit" type="submit" value="Submit">
                    </div>
                </div>
            </div>
        </div>

        <div class="answDefStyle answers__status-table">
            <div class="answDefStyle answStatTbl__btn">
                <button id="answStatusTableBtn">Answer Status Table</button>
            </div>
            <div id="answStatusTableCont" class="answDefStyle answStatTbl__content">
                <!-- <div class="answDefStyle answStatusTableCont"></div> -->
            </div>
        </div>
    </div>

    <!-- <script src="scripts/js/modules/answers.js"></script> -->
</body>

</html>