var ondelete = function (id) {
    $.ajax({
        type: 'POST',//тип запроса: get,post либо head
        url: 'deletegraph',//url адрес файла обработчика
        data: {'id': id.toString()},//параметры запроса
        dataType: 'json',
        success: function (data) {//возвращаемый результат от сервера
            alert(data);
            location.reload();
        },
        error: function (msg) {
            var error = JSON.parse(msg.responseText);
            alert(error);
        }
    });
};

var onadd = function (newDate, newShift) {
    var date = $(newDate).val();
    var shift = $(newShift).val();
    try{
        if (date == "" || shift == ""){
            throw new Error("Пустые строки");
        }
        var cur = new Date();
        var current = new Date(cur.getFullYear(), cur.getMonth(), cur.getDate());
        var dt = new Date(date);
        var addedDate = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());

        if (addedDate < current){
            alert("Невозможно добавить дату. Измените дату и попробуйте снова");
            return false;
        }
        else {
            var driver = jsonDriver[0];
            $.ajax({
                type: 'POST',
                url: 'add',
                data: {'number': driver['id'], 'date': date, 'shift': shift},
                dataType: 'json',
                success: function (data) {
                    alert(data);
                    location.reload();
                },
                error: function (msg) {
                    var error = JSON.parse(msg.responseText);
                    alert(error);
                }
            });
        }
    }
    catch (e){
        exception(e.message);
    }
};

var prints = function (error, jsonDriver, graphics) {
    if (error.length != 0){
        $("#error").text(error);
        return -1;
    }

    if(jsonDriver.length == 0){
        $("#error").text("Водитель не найден");
        return -1;
    }
    var driver = jsonDriver[0];
    $("#driver").text(driver['id'] + ' ' + driver['lastName'] + ' ' + driver['firstName'] + ' ' + driver['patronymic']);

    if(graphics.length == 0){
        $("#error").text("График не составлен");
    }

    var table = $('<table></table>').addClass('table_blur');
    var row = $('<th>Дата</th><th>Смена</th><th></th>');
    table.append(row);

    for (var j = 0; j < graphics.length; j++) {
        var graph = graphics[j];
        row = $('<tr></tr>');
        var date = new Date(graph['date']);
        var rowData = $('<td>' + graph['date'] + '</td><td>' + graph['shift'] + '</td><td><input type="button" value="-" onclick="ondelete(' + graph['id'] + ')">');
        row.append(rowData);
        table.append(row);
    }
    var data = $('<tr><td><input id = "newDate" name="data1" class="date" type="date"></td><td><select id = "newShift" required><option value="1">1</option><option value="2">2</option></select></td><td><input type="button" value="+" onclick="onadd(newDate, newShift)"></td></tr>');
    table.append(data);
    $('#graph').append(table);
};


