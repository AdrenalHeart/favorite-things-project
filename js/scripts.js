$(document).ready(function(){
  $("#list form").submit(function(event) {
    var food = $("#food").val();
    var music = $("#music").val();
    var sports = $("#sports").val();
    var book = $("#book").val();
    var hobby = $("#hobby").val();
    var color = $("#color").val();
    var list = [food, music, sports, book, hobby, color];
    var list2 = [];
    list2.push(list[1]);
    list2.push(list[0]);
    list2.push(list[2]);

    $("#first").text(list2[0]);
    $("#second").text(list2[1]);
    $("#third").text(list2[2]);

    $("#things").show();
    event.preventDefault();
  });
});