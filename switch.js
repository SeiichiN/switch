// switch.js
//
var sw = document.getElementsByClassName('switch');
var setSw = function () {
  for (var i = 0; i < sw.length; i++) {
	sw[i].innerHTML = '<img src="switch_off.png" alt="">';
	sw[i].onclick = (function () {
	  return function () {console.log(i)};
	  // sw[i].innerHTML = '<img src="switch_on.png" alt="">';
	})();
  }
};
window.onload = function () {
  setSw();
};
