document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("mouseover", function (e) {
    const target = e.target;
    if (target) {
      const pixelSize = `${target.offsetWidth}px x ${target.offsetHeight}px`;
      document.getElementById("sizeDisplay").textContent = pixelSize;
    }
  });
});
