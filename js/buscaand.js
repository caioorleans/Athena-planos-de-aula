var urlString = window.location.href;
var recursos = [];
var url = new URL(urlString);
var disciplinaDesejada = url.searchParams.get("d");
var anoDesejado = url.searchParams.get("a");
var descritoresDesejados = String(url.searchParams.get("t"));
var pagina = url.searchParams.get("p");
var primeiroIntervaloRecursos = 0;
var buscarPorDescritores = false;

if(descritoresDesejados!="null" && descritoresDesejados!=""){
	buscarPorDescritores = true;
}

if(String(disciplinaDesejada)=="lp"){
	disciplinaDesejada = "Portugues";	
	$('.d :nth-child(2)').prop('selected', true);
}else if(String(disciplinaDesejada)=="mat"){
	disciplinaDesejada = "Matematica";
	$('.d :nth-child(3)').prop('selected', true);
}else{
	disciplinaDesejada = "null";
}


if(String(anoDesejado)==""){
	anoDesejado="null";
}

if(pagina == null){
	pagina = 0;
} else if(String(pagina)==""){
	pagina = 0;
}
else{
	pagina = parseInt(pagina);
	primeiroIntervaloRecursos = pagina*8;
}

$(document).ready(function() {
    processData(recursos_mobile);
});

function processData(textoParam){
	var linhas = textoParam;
	for (var i=0; i < linhas.length; i++){
	    var aux = linhas[i];
	    if(String(disciplinaDesejada) != "null" && String(disciplinaDesejada) != String(aux.disciplina)){
	    	continue;
	    }
	    if(String(anoDesejado)!="null" && String(aux.ano)!=String(anoDesejado)){
	    	continue;
	    }
	    recursos.push(aux);
	}


	//processamento de consulta por descritores
	//alert(buscarPorDescritores);
	if(buscarPorDescritores == true){
	//alert("testando");
		descritoresArray = descritoresDesejados.split(";");
		recursosComDescritoresDesejados = [];
		for(var i=0; i < recursos.length; i++){
			for(var j=0; j<descritoresArray.length; j++){
				if(recursos[i].descritores.indexOf(descritoresArray[j]) > -1){
					recursosComDescritoresDesejados.push(recursos[i]);
					break;
				}
			}
		}
		recursos = recursosComDescritoresDesejados;
	}

	//colocando recursos no seus locais
	var auxCount = 0;
	for(i=primeiroIntervaloRecursos;i<primeiroIntervaloRecursos+8;i++){
		//if para o caso de nao ter a pagina inteira, ex: com 20 recursos há duas paginas cheias e uma com quatro
		if(recursos[i]==null){
			break;
		}
		document.getElementById('recurso'+auxCount).children[0].src = recursos[i].imagem;
		document.getElementById('recurso'+auxCount).children[1].innerHTML = recursos[i].nome;
		document.getElementById('recurso'+auxCount).children[2].innerHTML = recursos[i].ano+"º ano";
		document.getElementById('recurso'+auxCount).style.display = "block";
		auxCount++;
	}

	//colocando os links para passar de página
	//pagina+1 para calcular quantos recursos temos, se tiver menos recursos que o maximo das paginas, é a ultima
	document.getElementById("paginaAtual").innerHTML=' Página '+ (pagina+1);
	if((pagina+1)*8 >= recursos.length){
		document.getElementById("proximaPagina").style.visibility = "hidden";
	}else{
		var proximaPaginaUrl = urlString.replace('p='+pagina,'p='+(pagina+1))
		document.getElementById('proximaPagina').href=proximaPaginaUrl;
		document.getElementById("proximaPagina").innerHTML='Página'+(pagina+2)+'&raquo;';
	}

	if(pagina == 0){
		document.getElementById("paginaAnterior").style.visibility = "hidden";
	}else{
		var paginaAnteriorUrl = urlString.replace('p='+pagina,'p='+(pagina-1))
		document.getElementById('paginaAnterior').href=paginaAnteriorUrl;
		document.getElementById("paginaAnterior").innerHTML='&laquo;Página '+pagina;	
	}

	if(recursos.length == 0){
		//alert("testando");
		document.getElementById("nenhumRecurso").style.visibility = "visible";
		document.getElementById("nenhumRecurso").style.padding = "5% 0";
		document.getElementById("paginacao").style.visibility = "hidden";
	}

}


function irPararecursoAnd(n) {
	location.href="../athena/recursomobile.html?n=" + recursos[n+pagina*8].item;
}