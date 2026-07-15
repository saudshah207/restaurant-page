import "./base.css";
import getHomeContent from "./content/home/home.js";

const contentElement = document.querySelector("#content");

contentElement.append(getHomeContent());