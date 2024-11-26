
var isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    document.querySelector(".contact").href = "tel:+919001155788";
  } else {
    document.querySelector(".contact").href = "mailto:anantmann9057@gmail.com";
  }

