// Get the modal - Backdrop
const backdrop = document.querySelector(".backdrop");
const modalImgOne = document.getElementById("modal-image-one");
const modalImgTwo = document.getElementById("modal-image-two");
const modalImgThree = document.getElementById("modal-image-three");
const modalImgFour = document.getElementById("modal-image-four");

const modalEstorilForm = document.querySelector(".estoril-form");
// const modalEstorilReviews = document.querySelector(".estoril-reviews");

// const estorilData = document.getElementById("estorilReviews")

//Card`s Images
const cardImgOne = document.getElementById("image-one");
const cardImgTwo = document.getElementById("image-two");
const cardImgThree = document.getElementById("image-three");
const cardImgFour = document.getElementById("image-four");

//Mobile NavBar
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
const navAbout = document.querySelector("#mobile-nav__about");
const navPlaces = document.querySelector("#mobile-nav__places");
const navDirections = document.querySelector("#mobile-nav__directions");

// //Experience Button
// const buttonEstoril = document.querySelector("#buttonEstoril");

//Functions
const openModal = (element) => {
  element.style.display = "block";
};

const closeModal = (element) => {
  element.style.display = "none";
};

cardImgOne.addEventListener("click", () => {
  openModal(modalImgOne);
});

cardImgTwo.addEventListener("click", () => {
  openModal(modalImgTwo);
});

cardImgThree.addEventListener("click", () => {
  openModal(modalImgThree);
});

cardImgFour.addEventListener("click", () => {
  openModal(modalImgFour);
});

// buttonEstoril.addEventListener("click", () => {
//   openModal(modalEstorilForm);
//   openModal(backdrop);
// });

//Closing the modal
modalImgOne.addEventListener("click", () => {
  closeModal(modalImgOne);
});

modalImgTwo.addEventListener("click", () => {
  closeModal(modalImgTwo);
});

modalImgThree.addEventListener("click", () => {
  closeModal(modalImgThree);
});

modalImgFour.addEventListener("click", () => {
  closeModal(modalImgFour);
});

backdrop.addEventListener("click", () => {
  if (modalEstorilForm) {
    closeModal(modalEstorilForm);
  }
  if (mobileNav) {
    closeModal(mobileNav);
  }
  if (modalImgOne) {
    closeModal(modalImgOne);
  }
  if (modalImgTwo) {
    closeModal(modalImgTwo);
  }
  if (modalImgThree) {
    closeModal(modalImgThree);
  }
  if (modalImgFour) {
    closeModal(modalImgFour);
  }
  closeModal(backdrop);
});

//Toggle Buttom
toggleButton.addEventListener("click", () => {
  openModal(mobileNav);
  openModal(backdrop);
});

navAbout.addEventListener("click", () => {
  closeModal(mobileNav);
  closeModal(backdrop);
});

navPlaces.addEventListener("click", () => {
  closeModal(mobileNav);
  closeModal(backdrop);
});

navDirections.addEventListener("click", () => {
  closeModal(mobileNav);
  closeModal(backdrop);
});

// const reviewsDataURL = "http://localhost:3000/api/blogs"
// fetch(reviewsDataURL)
// .then(response => response.json())
// .then(response => {
//   console.log(response)

//   for (let review of response) {
//     const reviewTitle = document.createElement('p')
//     reviewTitle.innerText = review.title
//     estorilData.append(reviewTitle)

//     const reviewName = document.createElement('p')
//     reviewName.innerText = review.name
//     estorilData.append(reviewName)

//     const reviewExperience = document.createElement('p')
//     reviewExperience.innerText = review.experience
//     estorilData.append(reviewExperience)
//   }
// })