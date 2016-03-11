function parse(){

	var jsondata = "data.json";
	var request = new XMLHttpRequest();

	request.open("GET", jsondata, true);

	request.onreadystatechange = function() {
		if (request.status == 200 & request.readyState == 4) {
			var messages = JSON.parse(request.responseText);
			
			document.getElementById("messages").innerHTML = 
			messages[0].content + " " + messages[0].username + "<br>" +
			messages[1].content + " " + messages[1].username + "<br>";
		}
	}
	request.send();
}

