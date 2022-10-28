function createElement(text) {

    let div = document.createElement("div");
    div.classList.add("newdiv");

    let label = document.createElement("label");
    label.classList.add("labeltable")
    label.textContent = text;
    div.appendChild(label);

    let divDoi = document.createElement("div");
    divDoi.classList.add("divDoi")
    div.appendChild(divDoi)

    let labelDoi = document.createElement("label")
    labelDoi.textContent="confirmed";
    divDoi.appendChild(labelDoi)

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("ok")
    divDoi.appendChild(checkbox);

    let lastDiv = document.createElement("div");
    lastDiv.classList.add("lastdiv");
    div.appendChild(lastDiv)

    let btnEdit = document.createElement("button");
    btnEdit.textContent="Edit";
    btnEdit.classList.add("edit")
    lastDiv.appendChild(btnEdit); 

    let btnRemove = document.createElement("button");
    btnRemove.textContent="Remove";
    btnRemove.classList.add("remove")
    lastDiv.appendChild(btnRemove)

    return div;

}





