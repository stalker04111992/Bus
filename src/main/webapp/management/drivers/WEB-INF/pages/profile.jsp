<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Данные о водителе</title>
    <link href="css/MainStyle.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
    <script type="text/javascript" src="js/profile.js"></script>
</head>
<body>

<div id="wrapper">
    <div id="menubar">
        <div id="menu">
            <ul>
                <li id = "menu0"><a href="../../index"><span>Главная</span></a></li>
                <li id = "menu1"><a href="../../management"><span>Управление</span></a></li>
            </ul>
        </div>
    </div>

    <script type="text/javascript">
        var driver = '${driver}';
        var jsonData = JSON.parse(driver);
        var error = '${error}';

        $(document).ready(function () {
            profile(error, jsonData);
        });
    </script>

    <div class="bus">
        <div id = "title" class="error"></div>
        <div id = "error" class="error"></div>
        <div id = "someContainer"></div>
        <div id = "formEdit"></div>
        <div id = "formDelete"></div>
    </div>

    <div id="footer"></div>

</div>

</body>
</html>