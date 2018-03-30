
function buttSearchOnClickP(){
	var elemInputTag = document.getElementById("inp-morse");
	var elemIputValue = elemInputTag.value;
	var result = morsvefToMings(elemIputValue);
	resultShow(result);
}
function buttSearchOnClickM(){
	var elemInputTag = document.getElementById("inp-morse");
	var elemIputValue = elemInputTag.value;
	var result = mingsToMorsvef(elemIputValue);
	resultShow(result);
}
/**
 * 对查询到的结果进行展示
 * @param {Object} str
 * 对查询到的结果进行展示
 */
function resultShow(str){
	var elemPTag = document.getElementById("p-resultShow");
	elemPTag.innerHTML = str;//输出查询结果
}
