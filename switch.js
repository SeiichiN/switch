// switch.js
//
'use strict';

const sw = document.getElementsByClassName('switch');
const lamp = document.getElementsByClassName('lamp');
const bitno = document.getElementsByClassName('bit');
const bitArea = document.getElementById('bit-area');
const hexnoL = document.getElementById('hexL');
const hexnoR = document.getElementById('hexR');
const hexArea = document.getElementById('hex-area');
const decno = document.getElementById('dec');
const minusArea = document.getElementById('minus-area');
const decMinus = document.getElementById('dec-minus');
const decArea = document.getElementById('dec-area');
const charArea = document.getElementById('char-area');
const showBitBtn = document.getElementById('showBitBtn');
const showDecBtn = document.getElementById('showDecBtn');
const showHexBtn = document.getElementById('showHexBtn');


let decnum;  // 10進数の値

const setSw = function () {
	for (let i = 0; i < sw.length; i++) {
		sw[i].innerHTML = '<img src="switch_off.png" alt="">';
		sw[i].onoff = 'off';
		sw[i].bit = '0';
	  bitno[i].innerHTML = sw[i].bit;
      lamp[i].innerHTML = '<img src="denkyuu_off.png" alt="">';
	}
  makeHex();
  makeDec();
  makeDecMinus();
  makeChar();
};
const changeSw = function (t) {
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
  makeChar();
};

// 2進数の文字列を16進数の文字列に変換する
// @param -- sBin string 2進数の文字列
// @return -- sHex string 16進数の文字列
const bin2hex = function (sBin) {
  const number = parseInt(sBin, 2);
  const sHex = number.toString(16);
  return sHex;
};

const makeHex = function () {
	const strBinL = sw[0].bit + sw[1].bit + sw[2].bit + sw[3].bit;
	const strBinR = sw[4].bit + sw[5].bit + sw[6].bit + sw[7].bit;
	const strHexL = bin2hex(strBinL);
	const strHexR = bin2hex(strBinR);
	hexnoL.innerHTML = strHexL;
	hexnoR.innerHTML = strHexR;
};

const bin2dec = function (sBin) {
  const number = parseInt(sBin, 2);
  decnum = number;
  const sDec = number.toString(10);
  return sDec;
}

const makeDec = function () {
  const strBin = sw[0].bit + sw[1].bit + sw[2].bit + sw[3].bit +
               sw[4].bit + sw[5].bit + sw[6].bit + sw[7].bit;
  const strDec = bin2dec(strBin);
  dec.innerHTML = strDec;
}

const bin2decMinus = function(sBin) {
  const number = parseInt(sBin, 2) + 1;
  const sDec = number.toString(10);
  return sDec;
}

const rev = function(char) {
  if (char === '1') return '0';
  if (char === '0') return '1';
}

const makeDecMinus = function () {
  if (sw[0].bit === '1') {
    const strBin = rev(sw[0].bit) + rev(sw[1].bit) + rev(sw[2].bit)
               + rev(sw[3].bit) + rev(sw[4].bit) + rev(sw[5].bit)
               + rev(sw[6].bit) + rev(sw[7].bit);
    const strDecMinus = '-' + bin2decMinus(strBin);
    console.log("strDecMinus", strDecMinus);
    decMinus.innerHTML = strDecMinus;
  } else {
    const strBin = sw[0].bit + sw[1].bit + sw[2].bit + sw[3].bit +
                 sw[4].bit + sw[5].bit + sw[6].bit + sw[7].bit;
    const strDec = bin2dec(strBin);
    console.log("strDec", strDec);
    decMinus.innerHTML = strDec;
  }
}

const makeChar = function () {
  const char = document.getElementById('char');
  char.textContent = String.fromCharCode(decnum);
  
}

const setShowBitBtn = function () {
  showBitBtn.innerHTML = '2進数を表示しない';
  showBitBtn.onoff = 'on';
  bitArea.style.display = 'block';
};

const delBitBtn = function () {
  showBitBtn.innerHTML = '2進数を表示する';
  // var bitArea = document.getElementById('bit-area');
  bitArea.style.display = 'none';
  showBitBtn.onoff = 'off';
};

const toggleBitBtn = function () {
  if (showBitBtn.onoff === 'on') {
	delBitBtn();
  } else {
	setShowBitBtn();
  }
};

const setShowDecBtn = function () {
  showDecBtn.innerHTML = '10進数を表示しない';
  showDecBtn.onoff = 'on';
  decArea.style.display = 'block';
};

const delDecBtn = function () {
  showDecBtn.innerHTML = '10進数を表示する';
  // var decArea = document.getElementById('dec-area');
  decArea.style.display = 'none';
  showDecBtn.onoff = 'off';
};

const toggleDecBtn = function () {
  if (showDecBtn.onoff === 'on') {
	delDecBtn();
  } else {
	setShowDecBtn();
  }
};

const setShowHexBtn = function () {
  showHexBtn.innerHTML = '16進数を表示しない';
  showHexBtn.onoff = 'on';
  hexArea.style.display = 'block';
}

const delHexBtn = function () {
  showHexBtn.innerHTML = '16進数を表示する';
  hexArea.style.display = 'none';
  showHexBtn.onoff = 'off';
}

const toggleHexBtn = function () {
  if (showHexBtn.onoff === 'on') {
    delHexBtn();
  } else {
    setShowHexBtn();
  }
}

const setShowMinusBtn = function () {
  showMinusBtn.innerHTML = 'マイナスを表示しない';
  showMinusBtn.onoff = 'on';
  minusArea.style.display = 'block';
}

const delMinusBtn = function () {
  showMinusBtn.innerHTML = 'マイナスを表示する';
  minusArea.style.display = 'none';
  showMinusBtn.onoff = 'off';
}

const toggleMinusBtn = function () {
  if (showMinusBtn.onoff === 'on') {
    delMinusBtn();
  } else {
    setShowMinusBtn();
  }
}

const setShowAsciiBtn = function () {
  showAsciiBtn.innerHTML = 'ASCII文字を表示しない';
  showAsciiBtn.onoff = 'on';
  charArea.style.display = 'block';
}

const delAsciiBtn = function () {
  showAsciiBtn.innerHTML = 'ASCII文字を表示する';
  showAsciiBtn.onoff = 'off';
  charArea.style.display = 'none';
  
}

const toggleAsciiBtn = function () {
  if (showAsciiBtn.onoff === 'on') {
    delAsciiBtn();
  } else {
    setShowAsciiBtn();
  }
}


window.onload = function () {
  setSw();
  setShowBitBtn();
  setShowHexBtn();
  setShowDecBtn();
  setShowMinusBtn();
  setShowAsciiBtn();
};

// 修正時刻: Sat 2023/07/22 05:37:422
