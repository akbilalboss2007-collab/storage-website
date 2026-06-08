$(document).ready(function () {

    // Password Show Hide
    $('#eye').click(function () {

        if ($('#password').attr('type') == 'password') {

            $('#password').attr('type', 'text');

            $('#eye').removeClass('fa-eye-slash');
            $('#eye').addClass('fa-eye');

        } else {

            $('#password').attr('type', 'password');

            $('#eye').removeClass('fa-eye');
            $('#eye').addClass('fa-eye-slash');
        }
    });

    // Confirm Password Show Hide
    $('#eye1').click(function () {

        if ($('#cpassword').attr('type') == 'password') {

            $('#cpassword').attr('type', 'text');

            $('#eye1').removeClass('fa-eye-slash');
            $('#eye1').addClass('fa-eye');

        } else {

            $('#cpassword').attr('type', 'password');

            $('#eye1').removeClass('fa-eye');
            $('#eye1').addClass('fa-eye-slash');
        }
    });

    // Validation Patterns
    var namepattern = /^[a-zA-Z\s]{3,}$/;
    var emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    // Form Submit
    $('#myform').submit(function (e) {

        e.preventDefault();

        var name = $("#name").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var confirmPassword = $("#cpassword").val();

        if (!namepattern.test(name)) {

            alert("Invalid Name");

        } else if (!emailpattern.test(email)) {

            alert("Invalid Email");

        } else if (!passwordpattern.test(password)) {

            alert("Weak Password");

        } else if (password !== confirmPassword) {

            alert("Passwords do not match");

        } else {

            localStorage.setItem("UserName", name);
            localStorage.setItem("Useremail", email);

            alert("Form submitted successfully");
        }

    });

});