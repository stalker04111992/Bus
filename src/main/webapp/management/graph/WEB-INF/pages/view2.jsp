<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Работа с графиком</title>
    <link href="css/MainStyle.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
    <link href="css/table.css" rel="stylesheet" type="text/css">
    <link rel='stylesheet' href='css/calendar.css' type='text/css'>
    <script type='text/javascript' src='js/calendar.js'></script>
    <script type="text/javascript" src="js/viewing2.js"></script>
</head>
<body>
<script type="text/javascript">
    var driver = '${driver}';
    var jsonDriver = JSON.parse(driver);
    var graphs = '${graphs}';
    var graphics= JSON.parse(graphs);
    var error = '${error}';

    $(document).ready(function () {
        prints(error, jsonDriver, graphics);
    });
</script>

<div id="wrapper">
    <div id="menubar">
        <div id="menu">
            <ul>
                <li id = "menu0"><a href="../../index"><span>Главная</span></a></li>
                <li id = "menu1"><a href="../../management"><span>Управление</span></a></li>
            </ul>
        </div>
    </div>
        <div class="bus">
            <h1>Управление графиком</h1>
            <div id = "error" class="error"></div>
            <div id = "driver"></div>
            <div id = "graph"></div>
        </div>
    <div id="footer"></div>
</div>
</body>
</html>
