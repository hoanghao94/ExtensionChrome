document.addEventListener("mousemove", function (e) {
  const target = e.target;
  const pixelSize = `${target.offsetWidth}px x ${target.offsetHeight}px`;
	console.log(pixelSize);
  // Gửi kết quả về background.js để hiển thị trong popup.html
  chrome.runtime.sendMessage({ pixelSize });
});
