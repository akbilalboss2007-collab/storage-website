$(document).ready(function () {
  $('#selector').change(function () {
    var city = $(this).val();

    $('.city').hide();

    if (city !== "") {
      $('#' + city).fadeIn();   // smooth effect
    }
  });
});

// modal 



let buttons = document.querySelectorAll(".detail-btn");

buttons.forEach(button => {

    button.addEventListener("click", function(){

        let title = this.getAttribute("data-title");
        let image = this.getAttribute("data-image");
        let description = this.getAttribute("data-description");

        document.getElementById("modalTitle").innerText = title;

        document.getElementById("modalImage").src = image;

        document.getElementById("modalDescription").innerText = description;

    });

});


