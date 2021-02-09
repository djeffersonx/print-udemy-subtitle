function translate(text){
	return text;
}

function initSubtitleManager(){
	$("[class^='captions-display--captions-container--']").bind("DOMSubtreeModified", function(e){
		let text = $(e.target).text();
		// console.log(text);
		console.log(translate(text));
	})	
}
initSubtitleManager();
