<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Список водителей</title>
    <link href="css/MainStyle.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
    <script type="text/javascript" src="js/viewing1.js"></script>
    <link href="css/table.css" rel="stylesheet" type="text/css">
</head>
<body>

<script type="text/javascript">

    $(document).ready(function () {
        var error = '${error}';
        if (error.length != 0){
            exception(error);
        }
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
        <div class="error">Выберите водителя</div>
        <div id = "error" class="error"></div>
        <input type="text" placeholder="Табельный номер или фамилия" id = "search">
        <input type="button" value="Поиск" onclick="search()">
    </div>

    <div id = "someContainer"></div>
    <div id="footer"></div>
</div>

</body>
</html>