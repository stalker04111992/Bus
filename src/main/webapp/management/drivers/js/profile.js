var profile = function (error, jsonData) {
    if (error.length != 0){
        $("#error").text(error);
    }

    var title = $("#title");
    
    if(jsonData.length == 0){
        title.text("Произошла ошибка. Водитель не найден");
        return -1;
    }

    title.text("Данные о водителе");
    var element = $('#someContainer');
    var driver = jsonData[0];

    element.append('<p>Табельный номер: ' + driver['id'] + '</p>');
    element.append('<p>Фамилия: ' + driver['lastName'] + '</p>');
    element.append('<p>Имя: ' + driver['firstName'] + '</p>');
    element.append('<p>Отчество: ' + driver['patronymic'] + '</p>');
    element.append('<p>Дата рождения: ' + driver['birthDate'] + '</p>');
    element.append('<p>Адрес: ' + driver['address'] + '</p>');
    element.append('<p>Телефон: ' + driver['telephone'] + '</p>');
    element.append('<p>Дата рождения: ' + driver['birthDate'] + '</p>');
    element.append('<p>Номер водительского удостоверения: ' + driver['licenseNumber'] + '</p>');

    $("#formEdit").append('<form method="get" action="edit">' +
        '<input type="hidden" name = "number" value="' + driver['id'] + '">' +
        '<input type="submit" value="Редактировать">' +
        '<div class="stopForm"></div>' +
        '</form>');

    $("#formDelete").append('<form method="post" action="delete">' +
        '<input type="hidden" name = "number" value="' + driver['id'] + '">' +
        '<input type="submit" value="Удалить">' +
        '<div class="stopForm"></div>' +
        '</form>');    
};
