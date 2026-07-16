import "./menu.css";

function adjustMenuLayoutIfNeeded() {
  const menuTableElement = document.querySelector("table");

  if (!menuTableElement) return;

  const categoryHeaderElements = menuTableElement.querySelectorAll("th");

  if (document.documentElement.clientWidth < 425) {
    for (const header of categoryHeaderElements) {
      header.removeAttribute("rowspan");

      header.colSpan = 2;
    }
  } else {
    for (const header of categoryHeaderElements) {
      header.removeAttribute("colspan");

      header.rowSpan = header.dataset.rowSpan;
    }
  }
}

export default function () {
  const menu = {
    "Main Courses": [
      { name: "Classic Cheeseburger", price: 13.99 },
      { name: "Grilled Chicken Sandwich", price: 12.99 },
      { name: "BBQ Bacon Burger", price: 15.49 },
      { name: 'Margherita Pizza (12")', price: 14.99 },
      { name: 'Pepperoni Pizza (12")', price: 16.99 },
      { name: "Fettuccine Alfredo", price: 15.99 },
    ],
    Sides: [
      { name: "French Fries", price: 3.99 },
      { name: "Onion Rings", price: 4.49 },
      { name: "Coleslaw", price: 2.99 },
      { name: "Side Salad", price: 4.99 },
    ],
    Beverages: [
      { name: "Soft Drink", price: 2.99 },
      { name: "Iced Tea", price: 2.49 },
    ],
  };

  const menuTable = document.createElement("table");

  for (const category of Object.keys(menu)) {
    const categoryHeader = document.createElement("th");

    categoryHeader.textContent = category;
    categoryHeader.rowSpan = menu[category].length + 1;

    categoryHeader.dataset.rowSpan = categoryHeader.rowSpan;

    let itemRow = document.createElement("tr");
    itemRow.append(categoryHeader);
    menuTable.append(itemRow);

    for (const item of menu[category]) {
      itemRow = document.createElement("tr");

      const itemName = document.createElement("td"),
        itemPrice = document.createElement("td");

      itemName.textContent = item.name;
      itemPrice.textContent = `$${item.price}`;

      itemRow.append(itemName, itemPrice);
      menuTable.append(itemRow);
    }
  }

  window.addEventListener("resize", adjustMenuLayoutIfNeeded);

  return menuTable;
}
