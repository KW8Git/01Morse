/**
 * Morse Code预处理
 * @param {Object} str
 * 提取出数字，以便后续添加上去
 */
function handleStrGetNumP(str){
	return (str.match(/[0-9]/g));
}
function handleStrGetNumM(str){
	return (str.match(/[0-9]/g));
}

/**
 * Morse翻译-->字母明码
 * @param {Object} string
 * ----1----2----2----
 */
function morsvefToMings(str){
	var arrNums = handleStrGetNumP(str);
	if(arrNums != null){
		var arraySplits = str.split(/[0-9]/);
		var strMing = "";
		for(arr in arraySplits){
			//最后要把数字加上,并加上一个空格进行分隔，这样文本就不会溢出，导致布局崩溃。我也不知道为什么，反正这样做很有效。
			strMing = strMing + mToMing(arraySplits[arr]) + arrNums[arr] + " ";//最后要把数字加上,并加上一个空格进行分隔，这样文本就不会溢出，导致布局崩溃。我也不知道为什么，反正这样做很有效。
		}
		return strMing.split(/undefined/)[0];
	}else if(1){
		if(mToMing(str) == "")
			return "噢，对不起！Kuei太笨了，建议您去问一问聪明的小幸君，嘻嘻嘻...";
		else
			return mToMing(str);
	}else{
		return "噢，对不起！Kuei太笨了，建议您去问一问聪明的小幸君，嘻嘻嘻...";
	}
}
function mingsToMorsvef(str){
	var arrNums = handleStrGetNumM(str);
	if(arrNums != null){
		var arraySplits = str.split(/[0-9]/);
		var strPinyin = "";
		for(arr in arraySplits){
			strPinyin = strPinyin + mToMorse(arraySplits[arr]) + arrNums[arr];//最后要把数字加上
		}
		return strPinyin.split(/undefined/)[0];
	}else if(1){
		if(mToMorse(str) == "")
			return "噢，对不起！Kuei太笨了，建议您去问一问聪明的小幸君，嘻嘻嘻...";
		else
			return mToMorse(str);
	}else{
		return "噢，对不起！Kuei太笨了，建议您去问一问聪明的小幸君，嘻嘻嘻...";
	}
}
/**
 * Morse Code-->字母明码
 * @param {Object} str
 * ----1
 */
function mToMing(str){
	var arrSplits = str.split(" ");
	var strSaveMing = "";
	var listenerStrSaveMing = "";
	var strToLowerMing = "";
	for(arr1 in arrSplits){
		if(arrSplits[arr1] != ""){
			for(var i=0; i < morseData.length; i++){
				if(morseData[i][1] == arrSplits[arr1]){
					if(arr1 == 0){
						strToLowerMing = morseData[i][0];
					}else{
						strToLowerMing = morseData[i][0].toLowerCase();
					}
					
					strSaveMing = strSaveMing + strToLowerMing;
					break;
				}
			}
			if(strSaveMing == listenerStrSaveMing){//对匹配不到的字符进行处理
				var arrStrSplits = arrSplits[arr1].split("");
				for(var temp=0;temp<arrStrSplits.length;temp++){
					strSaveMing = strSaveMing + arrStrSplits[temp].strike() + " ";					
				}
			}
			listenerStrSaveMing = strSaveMing;
		}
	}
	return strSaveMing;
}
function mToMorse(str){
	var arrSplits = str.split("");
	var strSaveMorse = "";
	var listenerStrSaveMorse = "";
	var tmpMorse = "";
	for(arr1 in arrSplits){
		if(arrSplits[arr1] != "" || arrSplits[arr1] != " "){
			for(var i=0; i < morseData.length; i++){
				if(morseData[i][0].toUpperCase() == arrSplits[arr1].toUpperCase()){
					tmpMorse = morseData[i][1];
					
					strSaveMorse = strSaveMorse + tmpMorse + " ";
					break;
				}
			}
			if(strSaveMorse == listenerStrSaveMorse){
				strSaveMorse = strSaveMorse + arrSplits[arr1].strike() + " ";
			}
			listenerStrSaveMorse = strSaveMorse;
		}
	}
	return strSaveMorse;
}