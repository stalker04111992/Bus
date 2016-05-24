<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Водители</title>
    <link href="css/MainStyle.css" rel="stylesheet" type="text/css">
    <link href="css/table.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
    <script type="text/javascript" src="js/viewing.js"></script>
</head>
<body>

<div id="wrapper">
    <div id="menubar">
        <div id="menu">
            <ul>
                <li><a href="../../index"><span>Главная</span></a></li>
                <li><a href="../../management"><span>Управление</span></a></li>
            </ul>
        </div>
    </div>

    <script type="text/javascript">
        $(document).ready(function () {
            var error = '${error}';
            if (error.length != 0){
                exception(error);
            }
        });
    </script>

    <div class="bus">
        <div class = "error">Список водителей</div>
        <div id = "error" class = "error"></div>
        <input type="text" placeholder="Табельный номер или фамилия" id = "search">
        <input type="button" value="Поиск" onclick="search()">
    </div>

    <div id = "someContainer"></div>
    <div class="Stop"></div>
    <div id="footer"></div>
</div>

</body>
</html>
