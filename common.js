function onDeviceReady(){
  document.getElementById("helloworld").innerHtml = "Hello World! Loaded PhoneGap Framework!"
}
function init(){
	document.addEventListener("deviceready",onDeviceReady,false);
}
