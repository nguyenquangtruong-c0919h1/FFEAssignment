$(document).ready(function () {
    var regex_string = /^[a-zA-Z]{1,}$/;
    var regex_email_phone = /^(([a-zA-Z0-9._]+@(fsoft.com.vn))|([0-9]{11}))$/;
    $("#form").on("submit", function (e) {
        e.preventDefault();
        validateString("name");
        validateString("subject");
        validateString("message");
        validateEmailPhone("email-phone")
    })

    function validateString(id) {
        if (!regex_string.test($("#" + id).val())) {
            $(".error-" + id).text("Vui lòng chỉ nhập chữ");
        } else {
            $(".error-" + id).text("");
        }
    }
    function validateEmailPhone(id) {
        if (!regex_email_phone.test($("#" + id).val())) {
            $(".error-" + id).text("Vui lòng nhập đúng email hoặc phone");
        } else {
            $(".error-" + id).text("");
        }
    }
})