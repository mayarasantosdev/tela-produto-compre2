const changeSlideButton = document.querySelectorAll("[data-change-slide-button]")
changeSlideButton.forEach(button => {
  button.addEventListener("click", () => {
    const productlist = document.querySelector(".productlist")
    const activeProduc = productlist.querySelector("[data-active]")
    let indexActiveProduc = Array.from(productlist.children).indexOf(activeProduc)

    indexActiveProduc = button.dataset.changeProducButton === "next" 
    ?  indexActiveProduc + 1 
    :  indexActiveProduc - 1

    if (indexActiveProduc >= productlist.children.length) {
      indexActiveSlide = 0
    }

    if (indexActiveProduc < 0) {
      indexActiveProduc = productlist.children.length - 1
    }

    activeProduc.removeAttribute("data-active")
    slides.children[indexActiveProduc].dataset.active = true
  })
})