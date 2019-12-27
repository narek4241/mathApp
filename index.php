<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- media queries -->
    <link rel="stylesheet" href="styles/style.css">
    <!-- animations -->
    <link rel="stylesheet" href="styles/animate.css">
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

    <!-- Scripts -->
    <!-- static scripts -->
    <script src="scripts/js/database.js"></script>
    <script src="scripts/js/script.js"></script>
    
    <!-- modules  -->
    <!-- <script src="scripts/js/modules/answers.js"></script>
    <script src="scripts/js/modules/back-to-top.js"></script>
    <script src="scripts/js/modules/check-answers.js"></script>
    <script src="scripts/js/modules/result-table.js"></script>
    <script src="scripts/js/modules/select.js"></script>
    <script src="scripts/js/modules/task-iframe.js"></script>
    <script src="scripts/js/modules/timer.js"></script> -->

    <!-- modules (after compiling)-->
    <script src="app.min.js"></script>

    <!-- jquery -->
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> -->
</body>

</html>




















