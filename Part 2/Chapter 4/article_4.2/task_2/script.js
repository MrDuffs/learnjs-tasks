let table = document.getElementById("bagua-table");

let editedElem;

table.addEventListener("click", (event) => {
  let target = event.target.closest(".btn-ok,.btn-cancel,td");

  if (!table.contains(target)) return;

  if (target.tagName == "TD") {
    if (editedElem) return;

    editedElem = {
      elem: target,
      data: target.innerHTML,
    };
    target.classList.add("edit");

    let textarea = document.createElement("textarea");
    textarea.style.width = target.clientWidth + "px";
    textarea.style.height = target.clientHeight + "px";
    textarea.className = "textarea";
    textarea.value = target.innerHTML;

    let editButtons = document.createElement("div");
    let okBtn = document.createElement("button");
    let cancelBtn = document.createElement("button");

    [editButtons.className, okBtn.className, cancelBtn.className] = [
      "edit-buttons",
      "btn-ok",
      "btn-cancel",
    ];
    [okBtn.innerHTML, cancelBtn.innerHTML] = ["OK", "CANCEL"];

    editButtons.append(okBtn, cancelBtn);

    target.innerHTML = "";
    target.append(textarea, editButtons);
    textarea.focus();
  } else if (target.className == "btn-ok") {
    finishEditing(editedElem.elem, true);
  } else if (target.className == "btn-cancel") {
    finishEditing(editedElem.elem, false);
  }
});

function finishEditing(elem, aprove) {
  if (aprove) {
    elem.innerHTML = elem.firstChild.value;
  } else {
    elem.innerHTML = editedElem.data;
  }
  elem.classList.remove("edit");
  editedElem = null;
}
