$(document).ready(function () {
    $('#selector').change(function () {
        var city = $(this).val();

        $('.city').hide();

        if (city !== "") {
            $('#' + city).fadeIn();
        }
    });
});