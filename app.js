







$(document).ready(function(){

$("#add").on('click',function(){

  task=document.getElementById('input').value;
  if(task!=""){
  $("#list").append("<li>"+task+"<button type='button' class='done'>Done!</button> </li>");
  $(".done").on("mouseover", function(){
    $(this).closest('li').css("text-decoration", "line-through");
  });
  $(".done").on("mouseout", function(){
    $(this).closest('li').css("text-decoration", "none");
  });
  $(".done").on('click', function(){
    $(this).hide();
    $(this).closest("li").hide();
  });
};
$("input:text").val("");
  });


});
