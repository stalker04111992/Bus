<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Редактировать</title>
    <link href="css/MainStyle.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
    <script type="text/javascript" src="js/edition.js"></script>
    <script type="text/javascript" src="js/addition.js"></script>
</head>
<body>

<div id="wrapper">
    <div id="menubar">
        <div id="menu">
            <ul>
                <li id = "menu0"><a href="../../index"><span>Главная</span></a></li>
                <li id = "menu1"><a href="../../management"><span>Управление</span></a></li>
                <li id = "menu2"><a href="view"><span>Просмотр списка автобусов</span></a></li>
            </ul>
        </div>
    </div>

    <script type="text/javascript">
        var bus = '${bus}';
        var jsonData = JSON.parse(bus);
        var error = '${error}';

        $(document).ready(function () {
            load(jsonData, error);
            markMatches();
            modelMatches();
            regNumberMatches();
        });
    </script>

    <div class="bus">
        <h1>Редактировать</h1>
        <div id = "error" class = "error"></div>
        <form id = "editform"method="post" action="edit"></form>
    </div>
    <div id="footer"></div>
</div>

</body>
</html>