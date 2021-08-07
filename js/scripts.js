//Create function to select elements
// const selectELement = (element) => {
//     document.querySelector(element)
// }

const selectELement2 = document.querySelector(".menu-icons");

selectELement2.addEventListener("click", function () {
    document.querySelector("nav").classList.toggle("active");
    document.querySelector("nav").style.transition = "500ms all ease";

})

//Open and close nav on click