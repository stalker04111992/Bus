
var modelMatches = function () {
    var element = $("#model");
    var model = element.val();
    var regexModel = new RegExp(/^[A-Za-zА-Яа-яЁё0-9 /-]{1,30}$/);
    if (model.length == 0){
        element.css('background-color', '#FFFFFF');
    }
    else if (model.search(regexModel) == -1){
        element.css('background-color', '#FFDAB9');
    }
    else{
        element.css('background-color', '#C1FFC1');
    }
};

var regNumberMatches = function () {
    var element = $("#regNumber");
    var regNumber = element.val();
    var regexRegNumber = new RegExp(/^[A-Z]{2} [0-9]{4}-[0-9]{1}$/);
    if (regNumber.length == 0){
        element.css('background-color', '#FFFFFF');
    }else
    if (regNumber.search(regexRegNumber) == -1){
        element.css('background-color', '#FFDAB9');
    }
    else{
        element.css('background-color', '#C1FFC1');
    }
};

var markMatches = function () {
    var element = $("#mark");
    var mark = element.val();
    var regexMark = new RegExp(/^[A-Za-zА-Яа-яЁё0-9 /-]{1,30}$/);
    if (mark.length == 0){
        element.css('background-color', '#FFFFFF');
    }else
        mark.search(regexMark) == -1 ?
            element.css('background-color', '#FFDAB9') :
            element.css('background-color', '#C1FFC1');
};

var control = function (id) {

    var regNumber = $("#regNumber").val();
    $.ajax({
        type: 'GET',//тип запроса: get,post либо head
        url: 'control',//url адрес файла обработчика
        data: {'regNumber': regNumber, 'number': id},//параметры запроса
        dataType: 'json',
        success: function (data) {//возвращаемый результат от сервера
            if (data > 0){
                $("#error").text("Автобус с таким номером существует");
                $("#regNumber").css('background-color', '#FFDAB9')
            }
            else{
                $("#error").text("");
            }
        },
        error: function (msg) {
            var error = JSON.parse(msg.responseText);
            $("#error").text(error);
        }
    });
};