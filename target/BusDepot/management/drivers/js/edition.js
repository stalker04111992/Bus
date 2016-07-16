var edit = function (error, jsonData) {
    if (error.length != 0){
        $("#error").text(error);
    }

    if(jsonData.length == 0){
        $("#error").text("Произошла ошибка. Водитель не найден");
        return -1;
    }

    var driver = jsonData[0];
    var form = $("#editForm");

    form.append('<input type="hidden" id = "number" name = "number">');
    form.append('<input type="text" id = "lastName" oninput="nameMatches(lastName)" name = "lastName" placeholder="Фамилия" required pattern="^[A-Za-zА-Яа-яЁё0-9\-, ]{1,50}$">');
    form.append('<input type="text" id = "firstName" oninput="nameMatches(firstName)" name = "firstName" placeholder="Имя" required pattern="^[A-Za-zА-Яа-яЁё0-9\-, ]{1,50}$">');
    form.append('<input type="text" id = "patronymic" oninput="patronymicMatches()" name = "patronymic" placeholder="Отчество" pattern="^[A-Za-zА-Яа-яЁё0-9\-, ]{0,50}$">');
    form.append('<input type="text" id = "birthDate" onchange="dateMatches()" oninput="dateMatches()" class="date" name = "birthDate" placeholder="Дата рождения в формате (гггг-мм-дд)" pattern="^[0-9]{4}-[0-9]{2}-[0-9]{2}$">');
    form.append('<textarea id = "address" onchange="addressMatches()" oninput="addressMatches()" type="text" name = "address" placeholder="Адрес (до 256 символов)" maxlength="256"></textarea>');
    form.append('<input type="text" id = "telephone" onchange="telephoneMatches()" oninput="telephoneMatches()" name = "telephone" placeholder="Номер телефона (1 - 16 цифр)" pattern="^[0-9]{1,16}$">');
    form.append('<input type="text" id = "licenseNumber" oninput="licenseMatches()" onchange="control(' + driver['id'] + ')" name = "licenseNumber" placeholder="Номер водительского удостоверения (1AB 234567)" pattern="^[0-9]{1}[A-Z]{2} [0-9]{6}$">');
    form.append('<input type="submit" value="Сохранить изменения">');
    form.append('<div class="stopForm"/>');

    $("#number").val(driver['id']);
    $("#lastName").val(driver['lastName']);
    $("#firstName").val(driver['firstName']);
    $("#patronymic").val(driver['patronymic']);
    $("#birthDate").val(driver['birthDate']);
    $("#address").val(driver['address']);
    $("#telephone").val(driver['telephone']);
    $("#licenseNumber").val(driver['licenseNumber']);
};









