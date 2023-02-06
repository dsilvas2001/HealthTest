  document.querySelectorAll(".btn2").forEach((vid) => {
    vid.onclick = () => {
      document.querySelector(".popup-video").style.display = "block";
      document.querySelector(".popup-video video") = vid.getAttribute("src");
    };
  });
  document.querySelector(".popup-video .close").onclick = () => {
    document.querySelector(".popup-video").style.display = "none";
  };

  document.querySelectorAll(".btn3").forEach((vid) => {
    vid.onclick = () => {
      document.querySelector(".popup-video2").style.display = "block";
      document.querySelector(".popup-video2 video") = vid.getAttribute("src");
    };
  });
  document.querySelector(".popup-video2 .close").onclick = () => {
    document.querySelector(".popup-video2").style.display = "none";
  };

  document.querySelectorAll(".btn4").forEach((vid) => {
    vid.onclick = () => {
      document.querySelector(".popup-video3").style.display = "block";
      document.querySelector(".popup-video3 video") = vid.getAttribute("src");
    };
  });
  document.querySelector(".popup-video3 .close").onclick = () => {
    document.querySelector(".popup-video3").style.display = "none";
  };
