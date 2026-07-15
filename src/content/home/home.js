import "./home.css";
import restaurantImage from "./restaurant.jpg";

export default function () {
  const mainBanner = document.createElement("div");

  const bannerContentWrapper = document.createElement("div"),
    bannerImage = document.createElement("img"),
    bannerTitle = document.createElement("h1"),
    bannerText = document.createElement("p"),
    bannerButton = document.createElement("a");

  bannerImage.src = restaurantImage;
  bannerTitle.textContent = "The Best Restaurant In Town!";
  bannerText.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias atque
    aperiam facilis porro quas quo ratione. Numquam repellendus vel velit totam
    repudiandae dignissimos adipisci nostrum. Dolor sit amet consectetur adipisicing elit. Alias atque
    aperiam facilis porro quas quo ratione.`;
  bannerButton.textContent = "Make a Reservation";
  bannerButton.href = "#";

  bannerContentWrapper.classList.add("banner-content");
  bannerButton.classList.add("button");

  bannerContentWrapper.append(bannerTitle, bannerText, bannerButton);

  mainBanner.classList.add("banner");

  mainBanner.append(bannerImage, bannerContentWrapper);

  return mainBanner;
}
