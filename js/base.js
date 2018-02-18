/**
 * Morse Code预处理
 * @param {Object} str
 * 提取出数字，以便后续添加上去
 */
function handleStrGetNum(str){
	return (str.match(/[0-9]/g));
}
/**
 * Morse翻译-->字母明码
 * @param {Object} string
 * ----1----2----2----
 */
function morsiefToMings(str){
	var arrNums = handleStrGetNum(str);
	if(arrNums != null){
		var arraySplits = str.split(/[0-9]/);
		var strMing = "";
		for(arr in arraySplits){
			strMing = strMing + mToMing(arraySplits[arr]) + arrNums[arr];//最后要把数字加上
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
			if(strSaveMing == listenerStrSaveMing){
				strSaveMing = strSaveMing + arrSplits[arr1].strike();
			}
			listenerStrSaveMing = strSaveMing;
		}
	}
	return strSaveMing;
}