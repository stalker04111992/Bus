var search = function () {

    var result = $("#result");
    if (result != null){
        result.remove();
    }
    $("#error").text("");

    var param = $("#search").val();

    $.ajax({

        type: 'get',
        url: 'search',
        data: {'param': param},
        dataType: 'json',
        success: function (data) {
            if(data.length == 0){
                $("#error").text("Не найдены водители");
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
    alert(msg);
};


var print = function (jsonData) {
    $("#title").text("Список водителей");

    var table = $('<table id = "result"></table>').addClass('table_blur');
    var row = $('<th>Таб. номер</th><th>Фамилия</th><th>Имя</th><th>Отчество</th>');
    table.append(row);
    for (var j = 0; j < jsonData.length; j++) {
        var driver = jsonData[j];
        row = $('<tr></tr>');
        var rowData = $('<td><a href = "select?number=' + driver['id'] + '">' + driver['id'] + '</a></td><td>' + driver['lastName'] + '</td><td>' + driver['firstName'] + '</td><td>' +
            driver['patronymic'] + '</td>');

        row.append(rowData);
        table.append(row);
    }
    $('#someContainer').append(table);
};
