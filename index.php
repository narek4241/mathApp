<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- media queries -->
    <link rel="stylesheet" href="styles/style.css">
    <!-- animations -->
    <!-- <link rel="stylesheet" href="styles/animate.css"> -->
    <!-- <link rel="stylesheet" href="app.min.css"> -->
    <title>AppLab</title>
</head>

<body id="mainBody">
    <!-- <div class="container"> -->
        <div id="loader" class="loader">
            <img src="images/loader.gif" alt="Loading ...">
        </div>

        <?php include 'components/header.php'; ?>
        <?php include 'components/side-nav.php'; ?>
        <?php include 'components/timer.php'; ?>
        <?php include 'components/select.php'; ?>
        <?php include 'components/take-care.php'; ?>
        <?php include 'components/task-iframe.php'; ?>
        <?php // include 'components/toolbar.php'; ?>
        <?php include 'components/answers.php'; ?>
        <?php include 'components/result-table.php'; ?>
        <?php include 'components/back-to-top.php'; ?>
        <?php // include 'components/report.php'; ?>
        <?php include 'components/footer.php'; ?>
    <!-- </div> -->



    <!-- Scripts -->
    <!-- static scripts -->
    <script src="scripts/js/database.js"></script>
    <script src="scripts/js/script.js"></script>
    
    <!-- modules  -->
    <script src="scripts/js/modules/header.js"></script>
    <script src="scripts/js/modules/timer.js"></script>
    <script src="scripts/js/modules/dialog.js"></script>

    <script src="scripts/js/modules/answers.js"></script>
    <script src="scripts/js/modules/answers-input-method.js"></script>
    <script src="scripts/js/modules/answers-status-table.js"></script>

    <script src="scripts/js/modules/back-to-top.js"></script>
    <script src="scripts/js/modules/check-answers.js"></script>
    <script src="scripts/js/modules/result-table.js"></script>
    <script src="scripts/js/modules/select.js"></script>
    <script src="scripts/js/modules/task-iframe.js"></script>
    <script src="scripts/js/modules/side-nav.js"></script>
    <script src="scripts/js/modules/scroll.js"></script>
    <!-- modules (after compiling)-->
    <!-- <script src="app.min.js"></script> -->

    <!-- jquery -->
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> -->
</body>

</html>





<!-- Things to do next -->
<!-- 
1. Keep code clear.
2. Remember rule 1st
3. master modals (replace dialogs)
4. Report Nuance

Season 2 

5. add Loader

 -->

<!-- Things to review -->
<!-- 
1. In Header (active scroll.js) when scrollbar appears 'Headings move' .
2. Toggle btns (display:none nuance +animation(transition))
    2.1) 'Insert answers' btn work flow normal (destroyed when clicking many times in second to test)

 -->
















