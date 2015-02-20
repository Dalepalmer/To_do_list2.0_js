var List = {listName: "",
tasks: []};
var Task = {taskName: ""};




$(document).ready(function() {
  var currentlist = null

  $("form#new-list").submit(function(event) {
    event.preventDefault();

    var inputtedListName = $("input#new-list-name").val();

    var newList = Object.create(List);
    newList.tasks = []
    newList.listName = inputtedListName;


    $("ul#list2").append("<li class='list'>" + newList.listName + "</li>");



    $("ul#list2 li.list").last().click(function() {
      $("ul#tasks").empty();
      $('.task-area').show();
      currentlist = newList

      $('#list-name').text(currentlist.listName);

              currentlist.tasks.forEach(function(task) {
                $("ul#tasks").append("<li class='task'>" + task.taskName + "</li>");
              });

    });


  });
    $("form#new-task").submit(function(event) {
      event.preventDefault();


      var inputtedTask = $("input#new-task-name").val();
      var newTask = Object.create(Task);

      newTask.taskName = inputtedTask;
      currentlist.tasks.push(newTask);

      $("ul#tasks").append("<li class='task'>" + newTask.taskName + "</li>");

debugger




    //   lists.forEach(function(list) {
    //     $("ul#tasks").empty();
    //     list.tasks.forEach(function(task){
    //       $("ul#tasks").append("<li class='task'>" + task.taskName + "</li>");
    //     });
    //   });
    });


    // $("ul#list2 li.list").last().click(function() {
    //   $('.task-area').show();
    // });


    $("input#new-list-name").val("");



});
