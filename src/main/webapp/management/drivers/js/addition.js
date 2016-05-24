
var nameMatches = function (elem) {
    var element = $(elem);
    var model = element.val();
    var regexModel = new RegExp(/^[A-Za-zА-Яа-яЁё -]{1,50}$/);
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

var patronymicMatches = function () {
    var element = $("#patronymic");
    var model = element.val();
    var regexModel = new RegExp(/^[A-Za-zА-Яа-яЁё -]{0,50}$/);
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

var dateMatches = function () {
    var element = $("#birthDate");
    var regNumber = element.val();
    var regexRegNumber = new RegExp(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/);
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

var addressMatches = function () {
    var element = $("#address");
    var regNumber = element.val();
    var regexRegNumber = new RegExp(/^[A-Za-zА-Яа-яЁё0-9-(),. ]{0,256}$/);
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

var licenseMatches = function () {
    var element = $("#licenseNumber");
    var regNumber = element.val();
    var regexRegNumber = new RegExp(/^[0-9]{1}[A-Z]{2} [0-9]{6}$/);
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

var telephoneMatches = function () {
    var element = $("#telephone");
    var regNumber = element.val();
    var regexRegNumber = new RegExp(/^[0-9]{0,15}$/);
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



var control = function (id) {

    var licenseNumber = $("#licenseNumber").val();
    $.ajax({
        type: 'GET',//тип запроса: get,post либо head
        url: 'control',//url адрес файла обработчика
        data: {'licenseNumber': licenseNumber, 'number': id},//параметры запроса
        dataType: 'json',
        success: function (data) {//возвращаемый результат от сервера
            if (data > 0){
                $("#error").text("Водитель с таким номером удостоверения существует");
                $("#licenseNumber").css('background-color', '#FFDAB9')
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
