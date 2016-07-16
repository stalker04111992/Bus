
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
                    exception("Не найдены автобусы");
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

    var starts = function (error) {
        if (error.length != 0){
            exception(error);
        }
    };
    
    var exception = function (msg) {
        $("#error").text(msg);
    };

    var print = function (jsonData) {
        $("#title").text("Список автобусов");

        var table = $('<table id = "result"></table>').addClass('table_blur');
        var row = $('<th>Номер</th><th>Марка</th><th>Модель</th><th>Рег. номер</th><th>Состояние</th>');

        table.append(row);

        for (var j = 0; j < jsonData.length; j++) {
            var bus = jsonData[j];
            var state = bus.state ? "На ходу" : "На техобслуживании";
            row = $('<tr></tr>');
            var rowData = $('<td><a href = "profile?number=' + bus['id'] + '">' + bus['id'] + '</a></td><td>' + bus['mark'] + '</td><td>' +
                bus['model'] + '</td><td>' + bus['regNumber'] + '</td>' +
                '<td>' + state + '</td>');
            row.append(rowData);
            table.append(row);
        }
        $('#someContainer').append(table);
    };

