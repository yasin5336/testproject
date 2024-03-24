const themeSwitcherBtn = document.getElementById("theme-switcher");
const bodyTag = document.querySelector("body");
const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("addt");
const ul = document.querySelector(".todos");
const filter = document.querySelector(".filter");
const btnFilter = document.querySelector("#clear-completed");
var edititems = false;
var edititemid = null;

function main() {
  // Theme-Switcher
  themeSwitcherBtn.addEventListener("click", () => {
    bodyTag.classList.toggle("light");
    const themeImg = themeSwitcherBtn.children[0];
    themeImg.setAttribute(
      "src",
      themeImg.getAttribute("src") === "./assets/images/icon-sun.svg"
        ? "./assets/images/icon-moon.svg"
        : "./assets/images/icon-sun.svg"
    );
  });
  // Theme-Switcher-End

  // Drag-Todo
  makeTodoElement(JSON.parse(localStorage.getItem("todos")));

  ul.addEventListener("dragover", (e) => {
    e.preventDefault();
    if (
      e.target.classList.contains("card") &&
      !e.target.classList.contains("dragging")
    ) {
      const draggingCard = document.querySelector(".dragging");
      const cards = [...ul.querySelectorAll(".card")];
      const currentPos = cards.indexOf(draggingCard);
      const newPos = cards.indexOf(e.target);
      console.log(currentPos, newPos);
      if (currentPos > newPos) {
        ul.insertBefore(draggingCard, e.target);
      } else {
        ul.insertBefore(draggingCard, e.target.nextSibling);
      }
      const todos = JSON.parse(localStorage.getItem("todos"));
      const removed = todos.splice(currentPos, 1);
      todos.splice(newPos, 0, removed[0]);
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  });
  // Drag-Todo-End

  //Add Todo In LocalStorage
  addBtn.addEventListener("click", () => {
    const item = todoInput.value.trim();
    if (item) {
      todoInput.value = "";
      const todos = !localStorage.getItem("todos")
        ? []
        : JSON.parse(localStorage.getItem("todos"));
      const todosmap = edititems
        ? todos.map((value, i) => {
            if (value.id.toString() === edititemid.toString()) {
              return { id: i, item: item, isCompeleted: value.isCompeleted };
            } else {
              return {
                id: i,
                item: value.item,
                isCompeleted: value.isCompeleted,
              };
            }
          })
        : todos.map((item, i) => {
            return { id: i, item: item.item, isCompeleted: item.isCompeleted };
          });
      if (!edititems) {
        const newitem = {
          id: todosmap.length,
          item: item,
          isComplete: false,
        };
        todosmap.push(newitem);
      }
      localStorage.setItem("todos", JSON.stringify(todosmap));
      makeTodoElement(todosmap);
    }
  });

  todoInput.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      addBtn.click();
    }
  });

  filter.addEventListener("click", (e) => {
    const id = e.target.id;
    if (id) {
      document.querySelector(".on").classList.remove("on");
      document.getElementById(id).classList.add("on");
      document.querySelector(".todos").className = `todos ${id}`;
    }
  });

  btnFilter.addEventListener("click", () => {
    var deleteIndexes = [];
    document.querySelectorAll(".card.checked").forEach((card) => {
      deleteIndexes.push(
        [...document.querySelectorAll(".todos .card")].indexOf(card)
      );
      card.classList.add("fall");
      card.addEventListener("animationend", () => {
        card.remove();
      });
    });

    removeMultipleTodos(deleteIndexes);
  });
}

function removeTodo(index) {
  const todos = JSON.parse(localStorage.getItem("todos"));
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeMultipleTodos(indexes) {
  var todos = JSON.parse(localStorage.getItem("todos"));
  todos = todos.filter((todo, index) => {
    return !indexes.includes(index);
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function stateTodo(index, isComplete) {
  const todos = JSON.parse(localStorage.getItem("todos"));
  todos[index].isCompleted = isComplete;
  localStorage.setItem("todos", JSON.stringify(todos));
}

function makeTodoElement(todoArray) {
  if (!todoArray) {
    return null;
  } else {
    edititemid = null;
    edititems = null;
    const ItemsLeft = document.querySelector("#items-left");
    document.querySelector(".todos").innerHTML = "";
    todoArray.forEach((todoObject) => {
      //Create Html Elements Of Todo
      const card = document.createElement("li");
      const cbContainer = document.createElement("div");
      const cbInput = document.createElement("input");
      const checkSpan = document.createElement("span");
      const item = document.createElement("p");
      const clearBtn = document.createElement("button");
      const editBtn = document.createElement("button");
      const img = document.createElement("img");
      const editIcon = document.createElement("i");

      //Add Classes
      card.classList.add("card");
      cbContainer.classList.add("cb-container");
      cbInput.classList.add("cb-input");
      checkSpan.classList.add("check");
      item.classList.add("item");
      clearBtn.classList.add("clear");
      editBtn.classList.add("clear");
      editIcon.classList.add("fa-solid");
      editIcon.classList.add("fa-pen");
      editIcon.classList.add("iconedit");
      //Add Attributes
      card.setAttribute("draggable", true);
      cbInput.setAttribute("type", "checkbox");
      img.setAttribute("src", "./assets/images/icon-cross.svg");
      img.setAttribute("alt", "Clear It");
      item.textContent = todoObject.item;
      item.setAttribute("data-id", todoObject.id);

      if (todoObject.isCompleted) {
        card.classList.add("checked");
        cbInput.setAttribute("checked", "checked");
      }

      //Add EventListener
      card.addEventListener("dragstart", () => {
        card.classList.add("dragging");
      });
      editIcon.addEventListener("click", () => {
        todoInput.focus();
        edititems = true;
        edititemid = item.getAttribute("data-id");
        todoInput.value = item.textContent;
        if ((edititems = true)) {
          addBtn.addEventListener("click", () => {
            item.textContent === todoInput.value;
          });
        }
      });
      card.addEventListener("dragend", () => {
        card.classList.remove("dragging");
      });
      cbInput.addEventListener("click", (e) => {
        const currentCard = cbInput.parentElement.parentElement;
        const checked = cbInput.checked;
        const currentCardIndex = [
          ...document.querySelectorAll(".todos .card"),
        ].indexOf(currentCard);
        stateTodo(currentCardIndex, checked);

        checked
          ? currentCard.classList.add("checked")
          : currentCard.classList.remove("checked");

        ItemsLeft.textContent = document.querySelectorAll(
          ".todos .card:not(.checked)"
        ).length;
      });

      clearBtn.addEventListener("click", (e) => {
        const currentCard = clearBtn.parentElement;
        currentCard.classList.add("fall");
        const indexOfCurrentCard = [
          ...document.querySelectorAll(".todos .card"),
        ].indexOf(currentCard);
        removeTodo(indexOfCurrentCard);
        currentCard.addEventListener("animationend", () => {
          setTimeout(() => {
            currentCard.remove();
            ItemsLeft.textContent = document.querySelectorAll(
              ".todos .card:not(.checked)"
            ).length;
          }, 100);
        });
      });

      //Set Element by Parent Child
      clearBtn.appendChild(img);
      editBtn.appendChild(editIcon);
      cbContainer.appendChild(cbInput);
      cbContainer.appendChild(checkSpan);
      card.appendChild(cbContainer);
      card.appendChild(item);
      card.appendChild(clearBtn);
      card.appendChild(editBtn);

      document.querySelector(".todos").appendChild(card);
    });
    ItemsLeft.textContent = document.querySelectorAll(
      ".todos .card:not(.checked)"
    ).length;
  }
}
console.log(edititems);
document.addEventListener("DOMContentLoaded", main);
