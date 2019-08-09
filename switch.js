// switch.js
//
var sw = document.getElementsByClassName('switch');
var bitno = document.getElementsByClassName('bit');
var bitArea = document.getElementById('bit-area');
var hexnoL = document.getElementById('hexL');
var hexnoR = document.getElementById('hexR');
var showBitBtn = document.getElementById('showBitBtn');

var setSw = function () {
	for (var i = 0; i < sw.length; i++) {
		sw[i].innerHTML = '<img src="switch_off.png" alt="">';
		sw[i].onoff = 'off';
		sw[i].bit = '0';
		bitno[i].innerHTML = sw[i].bit;
	}
	makeHex();
};
var changeSw = function (t) {
	if (sw[t].onoff === 'off') {
		sw[t].innerHTML = '<img src="switch_on.png" alt="">';
		sw[t].onoff = 'on';
		sw[t].bit = '1';
		bitno[t].innerHTML = sw[t].bit;
	}
	else {
		sw[t].innerHTML = '<img src="switch_off.png" alt="">';
		sw[t].onoff = 'off';
		sw[t].bit = '0';
		bitno[t].innerHTML = sw[t].bit;
	}
	makeHex();
};

// 2進数の文字列を16進数の文字列に変換する
// @param -- sBin string 2進数の文字列
// @return -- sHex string 16進数の文字列
var bin2hex = function (sBin) {
	var number = parseInt(sBin, 2);
	var sHex = number.toString(16);
	return sHex;
};

var makeHex = function () {
	var strBinL = sw[0].bit + sw[1].bit + sw[2].bit + sw[3].bit;
	var strBinR = sw[4].bit + sw[5].bit + sw[6].bit + sw[7].bit;
	var strHexL = bin2hex(strBinL);
	var strHexR = bin2hex(strBinR);
	hexnoL.innerHTML = strHexL;
	hexnoR.innerHTML = strHexR;
};

var setShowBitBtn = function () {
  showBitBtn.innerHTML = '2進数を表示しない';
  showBitBtn.onoff = 'on';
  bitArea.style.display = 'block';
};

var delBitBtn = function () {
  showBitBtn.innerHTML = '2進数を表示する';
  var bitArea = document.getElementById('bit-area');
  bitArea.style.display = 'none';
  showBitBtn.onoff = 'off';
};

var toggleBitBtn = function () {
  if (showBitBtn.onoff === 'on') {
	delBitBtn();
  } else {
	setShowBitBtn();
  }
};

window.onload = function () {
	setSw();
  setShowBitBtn();
};
