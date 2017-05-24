var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (var i = 1; i <= 5; i++) {
  var path = "images/pic" + i + ".jpg";
  var newImage = document.createElement('img');
  newImage.setAttribute('src', path);
  thumbBar.appendChild(newImage);
  newImage.onclick = function (e) {
    var imgSrc = e.target.getAttribute('src');
    displayImage(imgSrc);
    function displayImage(imgSrc) {
      displayedImage.setAttribute('src', imgSrc);
    }
  }
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function (e) {
  var btnCls = btn.getAttribute('class');
  if (btnCls === 'dark') {
    overlay.style.backgroundColor = "rgba(0, 0 , 0, 0.5)";
    btn.textContent = "Lighten";
    btn.setAttribute('class', 'light');
  } else if (btnCls === 'light') {
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    btn.setAttribute('class', 'dark');
    btn.textContent = "Darken";
  }
}
