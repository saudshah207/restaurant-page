import "./base.css";
import getHomeContent from "./content/home/home.js";
import getMenuContent from "./content/menu/menu.js";
import getContactContent from "./content/contact/contact.js";

const contentElement = document.querySelector("#content");

contentElement.append(getHomeContent());

function switchTab(event) {
  const target = event.target;

  const isTargetHomeTabButton = target.closest(".home-tab-button"),
    isTargetMenuTabButton = target.closest(".menu-tab-button"),
    isTargetContactTabButton = target.closest(".contact-tab-button");

  if (isTargetHomeTabButton || isTargetMenuTabButton || isTargetContactTabButton) {
    contentElement.innerHTML = "";

    if (isTargetHomeTabButton) contentElement.append(getHomeContent());
    else if (isTargetMenuTabButton) contentElement.append(getMenuContent());
    else contentElement.append(getContactContent());
  }
}

document.addEventListener("click", switchTab);
