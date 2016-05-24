var search = function () {

    var result = $("#result");
    if (result != null){
        result.remove();
    }
    exception("");

    var param = $("#search").val();

    $.ajax({
        type: 'get',//тип запроса: get,post либо head
        url: 'search',//url адрес файла обработчика
        data: {'param': param},//параметры запроса
        dataType: 'json',
        success: function (data) {//возвращаемый результат от сервера
            if(data == null || data.length == 0){
                exception("Не найдены водители");
                return -1;
            }
            print(data);
        },
        error: function (rsp) {
            var error = JSON.parse(rsp.responseText);
            exception(error);
        }

    });
};

var exception = function (msg) {
    $("#error").text(msg);
};


var print = function (jsonData) {
    var table = $('<table id = "result"></table>').addClass('table_blur');
    var row = $('<th>Таб. номер</th><th>Фамилия</th><th>Имя</th><th>Отчество</th>');
    table.append(row);
    for (var j = 0; j < jsonData.length; j++) {
        var driver = jsonData[j];
        row = $('<tr></tr>');
        var rowData = $('<td><a href = "profile?number=' + driver['id'] + '">' + driver['id'] + '</a></td><td>' + driver['lastName'] + '</td><td>' + driver['firstName'] + '</td><td>' +
            driver['patronymic'] + '</td>');

        row.append(rowData);
        table.append(row);
    }
    $('#someContainer').append(table);
};
