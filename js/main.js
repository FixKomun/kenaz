$(document).ready(function () {
  const myModal = document.querySelector(".my-modal");
  const images = document.querySelectorAll(".gallery img");
  const enlarge = document.querySelector(".enlarge img");
  const original = document.querySelector(".full-image");
  const imgText = document.querySelector(".caption");
  const now = document.querySelectorAll(".now");

  enlarge.addEventListener("click", () => {
    now.forEach((noww) => {
      myModal.classList.add("open");
      original.classList.add("open");
      //Dynamic change text and image
      images.forEach((image) => {
        console.log(image);
        if (noww.classList.contains("active")) {
          const originalSrc = image.getAttribute("data-original");
          original.src = `./images/${originalSrc}`;
          console.log(originalSrc);
          const imgTextSrc = image.getAttribute("alt");
          imgText.textContent = imgTextSrc;
        }
      });
    });
  });

  myModal.addEventListener("click", (e) => {
    //console.log(e);
    if (e.target.classList.contains("my-modal")) {
      myModal.classList.remove("open");
      original.classList.remove("open");
    }
  });
});
//images.forEach((image) => {});

/*
  $(".after").on("click", function () {
    var currentImg = $(".active");
    var nextImg = currentImg.next();
    //console.log(nextImg);
    //console.log("Hallooo");

    if (nextImg.length) {
      currentImg.removeClass("active").css("z-index", -10);
      nextImg.addClass("active").css("z-index", 10);
    }
  });

  $(".prev").on("click", function () {
    var currentImg = $(".active");
    var prevImg = currentImg.prev();
    console.log(prevImg);

    if (prevImg.length) {
      currentImg.removeClass("active");
      prevImg.addClass("active");
    }
  });


  $(".number-list .btn").on("click", function () {
    $(this).css("background-color", "purple");
  });

  $("h2.click").on("click", function () {
    activeButton = $(".clicked");
    activeButton.removeClass("clicked");
    $(this).addClass("clicked");
  });

*/
