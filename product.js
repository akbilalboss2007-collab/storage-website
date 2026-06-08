$(document).ready(function () {

  $('.filter-btn').click(function () {

    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    var value = $(this).attr('data-filter');

    if(value == 'all'){
      $('.product').show();
    }

    else{
      $('.product').hide();
      $(".product[data-category='" + value + "']").show();
    }

  });

});



function showDetails(title, image, desc){

  document.getElementById("modalTitle").innerHTML = title;

  document.getElementById("modalImg").src = image;

  document.getElementById("modalDesc").innerHTML = desc;

}



// where to buy 

$(document).ready(function () {
  $('#selector').change(function () {
    var city = $(this).val();

    $('.city').hide();

    if (city !== "") {
      $('#' + city).fadeIn();   // smooth effect
    }
  });
});