var ondelete = function (graph) {
    $.ajax({

        type: 'post',//тип запроса: get,post либо head
        url: 'delete',//url адрес файла обработчика
        data: {'graph':graph},//параметры запроса
        dataType: 'json',
        success: function (data) {//возвращаемый результат от сервера
            alert(data);
            onsearch();
        },
        error: function (rsp) {
            var error = JSON.parse(rsp.responseText);
            exception(error);
            onsearch();
        }
    });
};

var onadd = function (bus, graph) {
    var number = $(bus).val();

    $.ajax({

        type: 'post',//тип запроса: get,post либо head
        url: 'add',//url адрес файла обработчика
        data: {'bus': number, 'graph':graph},//параметры запроса
        dataType: 'json',
        success: function (data) {//возвращаемый результат от сервера
            alert(data);
            onsearch();
        },
        error: function (rsp) {
            var error = JSON.parse(rsp.responseText);
            exception(error);
            onsearch();
        }
    });
};


var onsearch = function () {
    var work = $("#work");
    if (work != null){
        work.remove();
    }

    var searchDate = $("#searchDate").val();
    var searchShift = $("#searchShift").val();

    $.ajax({

        type: 'get',//тип запроса: get,post либо head
        url: 'date',//url адрес файла обработчика
        data: {'shift': searchShift, 'date':searchDate},//параметры запроса
        dataType: 'json',
        success: function (data) {//возвращаемый результат от сервера

            if(data.length == 0){
                $("#error").text("Не найдены водители");
                return -1;
            }
            else{
                $("#error").text("");
            }

            print(data);

            $.ajax({

                type: 'get',//тип запроса: get,post либо head
                url: 'buses',//url адрес файла обработчика
                data: {'shift': searchShift, 'date':searchDate},//параметры запроса
                dataType: 'json',
                success: function (data) {//возвращаемый результат от сервера
                    if(data.length == 0){
                        $("#error").text("Не найдены свободные автобусы");
                        return -1;
                    }
                    addToSelect(data);
                },
                error: function (rsp) {
                    var error = JSON.parse(rsp.responseText);
                    exception(error);
                }
            });
        },
        error: function (rsp) {
            var error = JSON.parse(rsp.responseText);
            exception(error);
        }

    });
};

var addToSelect = function (buses) {
    for (var j = 0; j < buses.length; j++){
        var bus = buses[j];
        $(".buses").append($("<option></option>").val(bus['id']).html(bus['id']));
    }
};

var exception = function (msg) {
    $("#error").text(msg);
    alert(msg);
};

var print = function (graphics) {
    var table = $('<table id = "work"></table>').addClass('table_blur');
    var row = $('<th>Фамилия</th><th>Имя</th><th>Отчество</th><th>Дата</th><th>Смена</th><th>Номер автобуса</th><th>Марка автобуса</th><th></th>');
    table.append(row);

    for (var j = 0; j < graphics.length; j++) {
        var graph = graphics[j];
        var driver = graph['driver'];
        var work = graph['work'];
        var bus = null;
        if (work != null){
            bus = work['bus'];
        }
        row = $('<tr></tr>');
        var date = new Date(graph['date']);
        var rowData;
        if (work != null && bus != null){
            rowData = $('<td>' + driver['lastName'] + '</td><td>' + driver['firstName'] + '</td><td>' + driver['patronymic'] + '</td><td>' + graph['date'] + '</td><td>' + graph['shift'] + '</td><td>' + work['busId'] + '</td><td>' + bus['mark'] + ' ' + bus['model'] + '</td><td><input type="button" value="-" onclick="ondelete(' + work['id'] + ')">');
        }
        else{
            var id = "select" + j.toString();
            rowData = $('<td>' + driver['lastName'] + '</td><td>' + driver['firstName'] + '</td><td>' + driver['patronymic'] + '</td><td>' + graph['date'] + '</td><td>' + graph['shift'] + '</td><td><select class = "buses" id = "' + id + '" type = "text" name = "bus"></select></td><td> Не выбрано </td><td><input type="button" value="+" onclick="onadd(' + id + ',' + graph['id'] +')">');
        }
        row.append(rowData);
        table.append(row);
    }
    $('#graph').append(table);
};