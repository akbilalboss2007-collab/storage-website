$(document).ready(function () {

    // Password Show Hide
    $("#eye").click(function () {

        if ($("#password").attr("type") === "password") {

            $("#password").attr("type", "text");

            $("#eye").removeClass("fa-eye-slash");
            $("#eye").addClass("fa-eye");

        } else {

            $("#password").attr("type", "password");

            $("#eye").removeClass("fa-eye");
            $("#eye").addClass("fa-eye-slash");
        }
    });

    // Form Validation
    $("#myform").submit(function (e) {

        e.preventDefault();

        var name = $("#name").val();
        var email = $("#email").val();
        var password = $("#password").val();

        var namepattern = /^[a-zA-Z\s]{3,}$/;
        var emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (!namepattern.test(name)) {

            alert("Invalid Name");

        } else if (!emailpattern.test(email)) {

            alert("Invalid Email");

        } else if (!passwordpattern.test(password)) {

            alert("Weak Password");

        } else {

            localStorage.setItem("Username", name);
            localStorage.setItem("Useremail", email);

            alert("Form Submitted Successfully");
        }

    });

});