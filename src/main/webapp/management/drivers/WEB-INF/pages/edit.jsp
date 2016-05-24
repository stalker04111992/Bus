<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Редактирование</title>
    <link href="css/MainStyle.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
    <script type="text/javascript" src="js/edition.js"></script>
    <script type="text/javascript" src="js/addition.js"></script>
</head>
<body>

<script type="text/javascript">
    var driver = '${driver}';
    var jsonData = JSON.parse(driver);
    var error = '${error}';

    $(document).ready(function () {
        edit(error, jsonData);
        nameMatches('#lastName');
        nameMatches('#firstName');
        patronymicMatches();
        dateMatches();
        addressMatches();
        telephoneMatches();
        licenseMatches();
    });
</script>

<div id="wrapper">
    <div id="menubar">
        <div id="menu">
            <ul>
                <li><a href="../../index"><span>Главная</span></a></li>
                <li><a href="../../management"><span>Управление</span></a></li>
            </ul>
        </div>
    </div>

        <div class="bus">
            <h1>Редактирование</h1>
            <div id = "error" class = "error">${error}</div>
            <form id = "editForm" method="post" action="edit">
            </form>
        </div>
    <div id="footer"></div>
</div>

</body>
</html>
