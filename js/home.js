	/*if($("#randroidcontainer").scrollLeft() <= 1){
		document.getElementById('botaosliderEsquerda').style.visibility = "hidden";
	}

	if($("#randroidcontainer").scrollLeft() >= 1453){
		document.getElementById('botaosliderDireita').style.visibility = "hidden";
	}

	if($("#randroidcontainer").scrollLeft() >= 1){
		document.getElementById('botaosliderEsquerda').style.visibility = "visible";
	}

	if($("#randroidcontainer").scrollLeft() <= 1453){
		document.getElementById('botaosliderDireita').style.visibility = "visible";
	}*/

function scrollToRight(a){
	$(a).animate({scrollLeft:'+=200'}, 500);

	/*if($("#randroidcontainer").scrollLeft() >= 1){
		document.getElementById('botaosliderEsquerda').style.visibility = "visible";
	}

	if($("#randroidcontainer").scrollLeft() >= 1453){
		document.getElementById('botaosliderDireita').style.visibility = "hidden";
	}
	alert($("#randroidcontainer").scrollLeft());*/
}

function scrollToLeft(a){
	$(a).animate({scrollLeft:'-=200'}, 500);
/*
	if($("#randroidcontainer").scrollLeft() <= 1453){
		document.getElementById('botaosliderDireita').style.visibility = "visible";
	}

	if($("#randroidcontainer").scrollLeft() <= 1){
		document.getElementById('botaosliderEsquerda').style.visibility = "hidden";
	}
	alert($("#randroidcontainer").scrollLeft());*/
}

function baixarRepo(){ 
	window.open('https://www.dropbox.com/s/ia7n1i1uigg3d8m/athena.zip?dl=1', '_blank');
}