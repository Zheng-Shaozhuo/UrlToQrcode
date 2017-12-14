document.addEventListener('DOMContentLoaded', function() {
	chrome.tabs.getSelected(function(tab) {
		var url = 'http://pan.baidu.com/share/qrcode?w=320&h=320&url=' + tab.url; 
		document.getElementById('a').innerHTML = tab.title;
		document.getElementById('a').title = tab.title;
		document.getElementById('img').src = url;
	});
});