function toDo() {

    var mainInput = document.getElementById("mainInput")
    var taskValue = mainInput.value;


    if (taskValue == "") {
        alert("This field cant be empty")
        return 0
    }
    else if (!taskValue.trim().length) {
        alert('Invalid Task');
        mainInput.value = ""
        return 0
    }



    var list = document.getElementById("mainList")


    var li = document.createElement("li")
    var inp = document.createElement("input")
    var btn1 = document.createElement("button")
    var btn2 = document.createElement("button")





