$(document).ready(function () {
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
});
