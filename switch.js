// switch.js
//
var sw = document.getElementsByClassName('switch');
var bitno = document.getElementsByClassName('bit');

var setSw = function () {
  for (var i = 0; i < sw.length; i++) {
    sw[i].innerHTML = '<img src="switch_off.png" alt="">';
	sw[i].onoff = 'off';
    sw[i].bit = '0';
    bitno[i].innerHtml = sw[i].bit;
  }
};
var changeSw = function (e) {
	if (e.onoff === 'off') {
		e.innerHTML = '<img src="switch_on.png" alt="">';
	  e.onoff = 'on';
      e.bit = '1';
	}
	else {
		e.innerHTML = '<img src="switch_off.png" alt="">';
	  e.onoff = 'off';
      e.bit = '0';
	}
};
window.onload = function () {
  setSw();
};
