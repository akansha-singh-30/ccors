var names = new Array();
names[0] = "Yaakov";
names[1] = "John";
names[2] = "jeson";
names[3] = "Paul";
names[4] = "keiv";
names[5] = "jordan";
names[6] = "Frank";
names[7] = "laura";
names[8] = "Jim";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==="j" || names[i].charAt(0)==="J"){
		       byeSpeaker.speak(names[i]);

	}
	else{
	 helloSpeaker.speak(names[i]);

	}
}