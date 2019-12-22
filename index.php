<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- media queries -->
    <link rel="stylesheet" href="styles/style.css">
    <!-- animations -->
    <!-- <link rel="stylesheet" href="styles/animate.css"> -->
    <title>SiteSource</title>
</head>

<body>
    <?php include 'components/header.php'; ?>
    <?php include 'components/timer.php'; ?>
    <?php include 'components/select.php'; ?>
    <?php include 'components/taskIframe.php'; ?>
    <?php include 'components/toolbar.php'; ?>
    <?php include 'components/answers.php'; ?>
    <?php include 'components/resultTable.php'; ?>
    <?php include 'components/backToTop.php'; ?>
    <?php include 'components/footer.php'; ?>

    <!-- #task add python nuance -->

    <script src="scripts/js/modules/timer.js"></script>
    <script src="scripts/js/database.js"></script>
    <script src="scripts/js/modules/select.js"></script>
    
    <script src="scripts/js/modules/taskIframe.js"></script>
    
    <script src="scripts/js/modules/answers.js"></script>
    <script src="scripts/js/modules/checkAnswers.js"></script>
        
    <script src="scripts/js/modules/resultTable.js"></script>
    <script src="scripts/js/modules/backToTop.js"></script>
    
    <script src="scripts/js/script.js"></script>

    <!-- jquery -->
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> -->
</body>

</html>










<!-- Tasks -->
<!-- 
 ///// 1. every time when pushing "push button" it generates table 'again'DONE
 // 2. validate prompt form unwanted values (wscwsc, 587696 ...) (REGEX)
 // 3. selectCheckSheetSec's   if(.value = 1)...make shorter  use eval() (WARNING)
 ///// 4. build <select> by dom  -> DONE
 ///// 5. embed pdf file in html (youtube) -> DONE
 // 6. add timer animation after generatingTable(); (after stop();) 
 // 7. add quote (text) 'SLIDER' in footer bar (about math, machineLearning)
 // 8. after generating table ...<audio> record 10s ...then after 5s play it (fun!!!) 
 ///// 9. make pdf iframe work on mobile* -> DONE
 ///// 10. make loadIframe to work on many sections at once ...not after refreshing (pageNumbers) -> DONE
 ///// 11. make loadIframe button toggle (load & disload by "one" button) -> DONE
 // 12. make loadIframe animatable toggle crushes sometimes (transition: 2s;) ...now css line is commented
 /// 13. add indexes of answerInput, preferable to add also table which shows which done which not -> half done
 /////14. pushAnswers button "Push Answers" -> "Generate Table" (text changed, id stayed the same) -> DONE
 // 15. add new chapters
 /// 16. numeric keyboard for input (type answers) -> solution (type=number)
 // 17. turn multi-language (arm, eng)
 // 18. timer adjustments (reminder to play, +print result)
 // 19. #answerSubmit review 'visited' (or smth like clicked), in mobile clicked btn remains yellow (like active)
 // 20. take care of fucntionality's working flow without enabling (click) or disabling btns *
 // standard -> build table 
-->