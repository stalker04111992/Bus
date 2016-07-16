var controlProfile = function (jsonData, error) {
    if (error.length != 0){
        $("#error").text(error);
    }

    var title = $("#title");

    if(jsonData.length == 0){
        title.text("Произошла ошибка. Автобус не найден");
        return -1;
    }

    title.text("Данные об автобусе");
    var element = $('#someContainer');
    var bus = jsonData[0];
    var state = bus.state ? "На ходу" : "На техобслуживании";

    element.append('<p>Гаражный номер: ' + bus['id'] + '</p>');
    element.append('<p>Регистрационный номер: ' + bus['regNumber'] + '</p>');
    element.append('<p>Марка: ' + bus['mark'] + ' ' + bus['model'] + '</p>');
    element.append('<p>Категория транспортного средства: ' + bus['category'] + '</p>');
    element.append('<p>Состояние: ' + state + '</p>');
    element.append('<p>Описание: ' + bus['description'] + '</p>');

    $("#formEdit").append('<form method="get" action="edit">' +
        '<input type="hidden" name = "number" value="' + bus['id'] + '">' +
        '<input type="submit" value="Редактировать">' +
        '<div class="stopForm"></div>' +
        '</form>');

    $("#formDelete").append('<form method="post" action="delete">' +
        '<input type="hidden" name = "number" value="' + bus['id'] + '">' +
        '<input type="submit" value="Удалить">' +
        '<div class="stopForm"></div>' +
        '</form>');
};
