<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Добавить водителя</title>
    <link href="css/MainStyle.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
    <link rel='stylesheet' href='css/calendar.css' type='text/css'>
    <script type='text/javascript' src='js/calendar.js'></script>
    <script type="text/javascript" src="js/addition.js"></script>
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
        var error = '${error}';

        $(document).ready(function () {
            if (error.length != 0){
                $("#error").text(error);
            }
        });
    </script>

    <section class="container">
        <div class="bus">
            <h1>Добавление водителя</h1>
            <div id = "error" class = "error"></div>
            <form method="post" action="add">
                <input type="text" id = "lastName" oninput="nameMatches(lastName)" name = "lastName" placeholder="Фамилия (до 50 символов русского или латинского алфавита)" required pattern="^[A-Za-zА-Яа-яЁё\- ]{1,50}$">
                <input type="text" id = "firstName" oninput="nameMatches(firstName)" name = "firstName" placeholder="Имя (до 50 символов русского или латинского алфавита)" required pattern="^[A-Za-zА-Яа-яЁё\- ]{1,50}$">
                <input type="text" id = "patronymic" oninput="patronymicMatches()" name = "patronymic" placeholder="Отчество (до 50 символов русского или латинского алфавита)" pattern="^[A-Za-zА-Яа-яЁё\- ]{0,50}$">
                <input type="text" id = "birthDate" onchange="dateMatches()" oninput="dateMatches()" class="date" name = "birthDate" placeholder="Дата рождения в формате (гггг-мм-дд)" pattern="^[0-9]{4}-[0-9]{2}-[0-9]{2}$">
                <textarea id = "address" type="text" onchange="addressMatches()" oninput="addressMatches()" name = "address" placeholder="Адрес (до 256 символов)" maxlength="256"></textarea>
                <input type="text" id ="telephone" onchange="telephoneMatches()" oninput="telephoneMatches()" name = "telephone" placeholder="Номер телефона (1 - 16 цифр)" pattern="^[0-9]{1,16}$">
                <input id = "licenseNumber" oninput="licenseMatches()" onchange="control(0)" type="text" name = "licenseNumber" placeholder="Номер водительского удостоверения (1AB 234567)" pattern="^[0-9]{1}[A-Z]{2} [0-9]{6}$">
                <input id = "add" type="submit" value="Добавить водителя">
                <div class="stopForm"/>
            </form>
        </div>

    </section>

    <div id="footer">

    </div>

</div>


</body>
</html>
