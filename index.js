const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const bodyOverlay = document.querySelector("#body-overlay");

const burgerContainer = document.querySelector("#navbarToggleExternalContent");
const burgerBtn = document.querySelector("#mobile-burger_icon");
const sliderBtns = document.getElementsByClassName("slider-btn");

const burgerMenuItems = document.getElementsByClassName("burger-menu_item");
const burgerSubmenus = document.getElementsByClassName("burger-smenu");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const searchModal = document.querySelector(button.dataset.modalTarget);
    openModal(searchModal);
  });
});

bodyOverlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".search-modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const searchModal = button.closest(".search-modal");
    closeModal(searchModal);
  });
});

function openModal(searchModal) {
  if (searchModal == null) return;
  searchModal.classList.add("active");
  bodyOverlay.classList.add("active");
}

function closeModal(searchModal) {
  if (searchModal == null) return;
  searchModal.classList.remove("active");
  bodyOverlay.classList.remove("active");
}

//---------------------
burgerBtn.addEventListener("click", () => {
  setTimeout(() => {
    if (burgerContainer.classList.contains("show")) {
      sliderBtns[0].style.display = "none";
      sliderBtns[1].style.display = "none";
    } else {
      sliderBtns[0].style.display = "block";
      sliderBtns[1].style.display = "block";
    }
  }, 500);
});

//---------------------
for (let i = 1; i < 4; i++) {
  burgerMenuItems[i].addEventListener("click", () => {
    burgerMenuItems[i].classList.toggle("burger-active");
  });
}

//scrollButton----------------------------------------
window.addEventListener("scroll", () => {
  document
    .querySelector("#scroll-top")
    .classList.toggle("scroll-active", window.scrollY > 300);
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
