<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <title>Назначить транспорт</title>
    <link href="css/MainStyle.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
    <link href="css/table.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="js/viewing.js"></script>
    <link rel='stylesheet' href='css/calendar.css' type='text/css'>
    <script type='text/javascript' src='js/calendar.js'></script>
</head>
<body>
<script type="text/javascript">
    $(document).ready(function () {
        var error = '${error}';
        if (error.length != 0){
            exception(error);
        }
        var d = new Date();
        var n = d.toISOString();
        n = n.substring(0, n.indexOf('T'));
        $("#searchDate").val(n);
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
        <h1>Назначить транспорт</h1>
        <div id = "error" class="error"></div>
        <input id = "searchDate" name="data1" class="date">
        <select id = "searchShift" required>
            <option value="1">1</option>
            <option value="2">2</option>
        </select>
        <input type="button" onclick = "onsearch()" value="Выбрать">
    </div>
    <div id = "graph"></div>
    <div id="footer"></div>
</div>

</body>
</html>