const shareButton = document.getElementById("button");
const socialSection = document.querySelector(".social");
const buttonIcon = document.querySelector(".button__icon");

const handleShareButton = () => {
  socialSection.classList.toggle("hide");
  shareButton.classList.toggle("button--active");
  buttonIcon.classList.toggle("button__icon--active");
};
shareButton.addEventListener("click", handleShareButton);
