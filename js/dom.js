let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

// Add item
form.addEventListener("submit", addItem);

// Remove item
itemList.addEventListener("click", removeItem);

// Filter according to search text
filter.addEventListener("keyup", filterItems);

function addItem(e) {
  e.preventDefault();
  let newItem = document.getElementById("item").value;

  let li = document.createElement("li");
  li.className = "list-group-item";
  li.innerText = newItem;

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.innerText = "X";

  li.appendChild(deleteBtn);

  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  let text = e.target.value.toLowerCase();
  // Get lis
  let items = itemList.getElementsByTagName("li");

  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    itemName.toLowerCase().indexOf(text) != -1
      ? (item.style.display = "block")
      : (item.style.display = "none");
  });
}
