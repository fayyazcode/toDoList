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

