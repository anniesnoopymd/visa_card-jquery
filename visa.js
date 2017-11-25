$(document).ready(function(){
   $('.input_num').keyup(function(){
      var input_val = $(this).val();
      console.log( $(this).val());
      $('.card_number').empty();
      $('.card_number').append(input_val);
   });
});
