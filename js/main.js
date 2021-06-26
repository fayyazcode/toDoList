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





    btn1.innerHTML = "EDIT"
    btn2.innerHTML = "DELETE"


    btn1.setAttribute("id", "btn1")
    btn1.setAttribute("onclick", "updt(this)")
    btn1.setAttribute("class", " btn btn-success")

    btn2.setAttribute("id", "btn2")
    btn2.setAttribute("onclick", "del(this.parentElement)")
    btn2.setAttribute("class", "btn btn-danger ")

    inp.setAttribute("id", "listInput")
    inp.setAttribute("disabled", "disabled")
    inp.setAttribute("class", "list-input form-control")

    li.setAttribute("id", "li")
    li.setAttribute("class", "listitem")

    


    list.appendChild(li)
    li.appendChild(inp)
    li.appendChild(btn1)
    li.appendChild(btn2)


    inp.value = taskValue;
    mainInput.value = ""

}
