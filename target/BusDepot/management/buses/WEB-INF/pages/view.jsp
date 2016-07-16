<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Автобусы</title>
    <link href="css/MainStyle.css" rel="stylesheet" type="text/css">
    <link href="css/table.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
    <script type="text/javascript" src="js/viewing.js"></script>
</head>
<body>

<script type="text/javascript">
    var error = '${error}';

    $(document).ready(function () {
        starts(error);
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
        <div class="error">Выбор автобуса</div>
        <div id = "error" class="error"></div>
        <div class="search">
            <input type="text" placeholder="Гаражный или рег. номер" id = "search">
            <input type="button" value="Поиск" onclick="search()">
        </div>
    </div>
    <div id = "someContainer"></div>
    <div id="footer"></div>
</div>

</body>
</html>
