document.addEventListener("DOMContentLoaded", () => {
  const points = document.getElementsByClassName("point");
  const popup = document.getElementById("timeline-wrapper");
  let pause;

  const seqCount = {
    "INT3D-1": 152,
    "INT3D-2": 1364,
    "INT3D-3": 694,
  }

  const showVideo = (id) => {
    document.getElementById("timeline").innerHTML = "";
    popup.classList.add("opened");

    const {playerPause} = timeline({
      containerId: "timeline",
      framesFolder: `media/${id}`,
      fps: 15,
      framesCount: seqCount[id] - 1,
      firstFrameName: `${id}.0000.jpg`,
      periods: []
    });

    pause = playerPause;
  };

  const closePopUp = () => {
    if (popup.classList.contains("opened")) {
      pause();
      popup.classList.remove("opened");
      document.getElementById("timeline").innerHTML = "";
    }
  }

  for (let point of points) {
    point.addEventListener("click", () => {
      showVideo(point.getAttribute("data-point"))
    });
  }

  document.getElementById("closeButton").addEventListener("click", () => {
    closePopUp();
  });
});
