// switch.js
//
var sw = document.getElementsByClassName('switch');
var lamp = document.getElementsByClassName('lamp');
var bitno = document.getElementsByClassName('bit');
var bitArea = document.getElementById('bit-area');
var hexnoL = document.getElementById('hexL');
var hexnoR = document.getElementById('hexR');
var hexArea = document.getElementById('hex-area');
var decno = document.getElementById('dec');
var minusArea = document.getElementById('minus-area');
var decMinus = document.getElementById('dec-minus');
var decArea = document.getElementById('dec-area');
var showBitBtn = document.getElementById('showBitBtn');
var showDecBtn = document.getElementById('showDecBtn');
var showHexBtn = document.getElementById('showHexBtn');

var setSw = function () {
	for (var i = 0; i < sw.length; i++) {
		sw[i].innerHTML = '<img src="switch_off.png" alt="">';
		sw[i].onoff = 'off';
		sw[i].bit = '0';
	  bitno[i].innerHTML = sw[i].bit;
      lamp[i].innerHTML = '<img src="denkyuu_off.png" alt="">';
	}
  makeHex();
  makeDec();
  makeDecMinus();
};
var changeSw = function (t) {
	if (sw[t].onoff === 'off') {
		sw[t].innerHTML = '<img src="switch_on.png" alt="">';
		sw[t].onoff = 'on';
		sw[t].bit = '1';
	  bitno[t].innerHTML = sw[t].bit;
      lamp[t].innerHTML = '<img src="denkyuu_on.png" alt="">';
	}
	else {
		sw[t].innerHTML = '<img src="switch_off.png" alt="">';
		sw[t].onoff = 'off';
		sw[t].bit = '0';
		bitno[t].innerHTML = sw[t].bit;
      lamp[t].innerHTML = '<img src="denkyuu_off.png" alt="">';
	}
  makeHex();
  makeDec();
  makeDecMinus();
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

var bin2dec = function (sBin) {
  var number = parseInt(sBin, 2);
  var sDec = number.toString(10);
  return sDec;
}

var makeDec = function () {
  var strBin = sw[0].bit + sw[1].bit + sw[2].bit + sw[3].bit +
               sw[4].bit + sw[5].bit + sw[6].bit + sw[7].bit;
  var strDec = bin2dec(strBin);
  dec.innerHTML = strDec;
}

var bin2decMinus = function(sBin) {
  var number = parseInt(sBin, 2) + 1;
  var sDec = number.toString(10);
  return sDec;
}

var rev = function(char) {
  if (char === '1') return '0';
  if (char === '0') return '1';
}

var makeDecMinus = function () {
  if (sw[0].bit === '1') {
    var strBin = rev(sw[0].bit) + rev(sw[1].bit) + rev(sw[2].bit)
               + rev(sw[3].bit) + rev(sw[4].bit) + rev(sw[5].bit)
               + rev(sw[6].bit) + rev(sw[7].bit);
    var strDecMinus = '-' + bin2decMinus(strBin);
    console.log("strDecMinus", strDecMinus);
    decMinus.innerHTML = strDecMinus;
  } else {
    var strBin = sw[0].bit + sw[1].bit + sw[2].bit + sw[3].bit +
                 sw[4].bit + sw[5].bit + sw[6].bit + sw[7].bit;
    var strDec = bin2dec(strBin);
    console.log("strDec", strDec);
    decMinus.innerHTML = strDec;
  }
}

var setShowBitBtn = function () {
  showBitBtn.innerHTML = '2進数を表示しない';
  showBitBtn.onoff = 'on';
  bitArea.style.display = 'block';
};

var delBitBtn = function () {
  showBitBtn.innerHTML = '2進数を表示する';
  // var bitArea = document.getElementById('bit-area');
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

var setShowDecBtn = function () {
  showDecBtn.innerHTML = '10進数を表示しない';
  showDecBtn.onoff = 'on';
  decArea.style.display = 'block';
};

var delDecBtn = function () {
  showDecBtn.innerHTML = '10進数を表示する';
  // var decArea = document.getElementById('dec-area');
  decArea.style.display = 'none';
  showDecBtn.onoff = 'off';
};

var toggleDecBtn = function () {
  if (showDecBtn.onoff === 'on') {
	delDecBtn();
  } else {
	setShowDecBtn();
  }
};

var setShowHexBtn = function () {
  showHexBtn.innerHTML = '16進数を表示しない';
  showHexBtn.onoff = 'on';
  hexArea.style.display = 'block';
}

var delHexBtn = function () {
  showHexBtn.innerHTML = '16進数を表示する';
  hexArea.style.display = 'none';
  showHexBtn.onoff = 'off';
}

var toggleHexBtn = function () {
  if (showHexBtn.onoff === 'on') {
    delHexBtn();
  } else {
    setShowHexBtn();
  }
}

var setShowMinusBtn = function () {
  showMinusBtn.innerHTML = 'マイナスを表示しない';
  showMinusBtn.onoff = 'on';
  minusArea.style.display = 'block';
}

var delMinusBtn = function () {
  showMinusBtn.innerHTML = 'マイナスを表示する';
  minusArea.style.display = 'none';
  showMinusBtn.onoff = 'off';
}

var toggleMinusBtn = function () {
  if (showMinusBtn.onoff === 'on') {
    delMinusBtn();
  } else {
    setShowMinusBtn();
  }
}



window.onload = function () {
  setSw();
  setShowBitBtn();
  setShowHexBtn();
  setShowDecBtn();
  setShowMinusBtn();
};

// 修正時刻: Fri 2023/01/27 05:09:242
