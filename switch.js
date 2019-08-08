// switch.js
//
var sw = document.getElementsByClassName('switch');
var setSw = function () {
  for (var i = 0; i < sw.length; i++) {
    sw[i].innerHTML = '<img src="switch_off.png" alt="">';
	sw[i].onoff = 'off';
	  
  }
};
var changeSw = function (e) {
	if (e.onoff === 'off') {
		e.innerHTML = '<img src="switch_on.png" alt="">';
		e.onoff = 'on';
	}
	else {
		e.innerHTML = '<img src="switch_off.png" alt="">';
		e.onoff = 'off';
	}
};
window.onload = function () {
  setSw();
};
