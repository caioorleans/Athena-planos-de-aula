	var recursos = []; 
	var recursosAnd = [];
	var recurso1 = {
		miniatura: "recursos/img/Desktop/Matematica/1/Meualbumgeometrico.png", 
		nome: "Meu Álbum Geométrico",
		ano: "1",
		id: "157"
	};
	recursos.push(recurso1);

	var recurso2 = {
		miniatura: "recursos/img/Desktop/Portugues/2/qualeoseupedido.png", 
		nome: "Qual é o seu pedido?",
		ano: "2",
		id: "25"
	};
	recursos.push(recurso2);
	
	var recurso3 = {
		miniatura: "recursos/img/Desktop/Matematica/3/eobicho2.png", 
		nome: "É o Bicho 2.0",
		ano: "3",
		id: "274"
	};
	recursos.push(recurso3);

	var recurso4 = {
		miniatura: "recursos/img/Desktop/Portugues/4/revistadigitaldacrianca.png", 
		nome: "Revista Digital da Criança",
		ano: "4",
		id: "65"
	};
	recursos.push(recurso4);

	var recurso5 = {
		miniatura: "recursos/img/Desktop/Matematica/5/Divertix.png", 
		nome: "Divertix",
		ano: "5",
		id: "221"
	};
	recursos.push(recurso5);

	var recurso6 = {
		miniatura: "recursos/img/Desktop/Portugues/6/vanguardas.png", 
		nome: "Vanguardas",
		ano: "6",
		id: "82"
	};
	recursos.push(recurso6);

	var recurso7 = {
		miniatura: "recursos/img/Desktop/Matematica/7/AdicaoeSubcomNumerosInteiros.png", 
		nome: "Adição e Subtração com Números Inteiros",
		ano: "7",
		id: "239"
	};
	recursos.push(recurso7);

	var recurso8 = {
		miniatura: "recursos/img/Desktop/Portugues/8/porumavirgula.png", 
		nome: "Por Uma Vírgula",
		ano: "8",
		id: "130"
	};
	recursos.push(recurso8);

	var recurso9 = {
		miniatura: "recursos/img/Desktop/Matematica/9/Desvendando_Senha_Resolvendo_Equacoes.png", 
		nome: "Desvendando a Senha - Resolvendo Equações",
		ano: "9",
		id: "264"
	};
	recursos.push(recurso9);

	var recurso10 = {
		miniatura: "recursos/img/Desktop/Portugues/9/cafecomlinguaportuguesamorfossintaxe.png", 
		nome: "Café com Língua Portuguesa - Morfossintaxe",
		ano: "9",
		id: "133"
	};
	recursos.push(recurso10);

//recursos android
	var recursoA1 = {
		miniatura: "recursos/img/Mobile/Portugues/1/brincandocomoalfabeto.jpg", 
		nome: "Brincando com o alfabeto",
		ano: "1",
		id: "10"
	};
	recursosAnd.push(recursoA1);

	var recursoA2 = {
		//mat
		miniatura: "recursos/img/Mobile/Matematica/2/jeformasecontar.jpg", 
		nome: "Jogos educativos para crianças: formas e contar",
		ano: "2",
		id: "74"
	};
	recursosAnd.push(recursoA2);

	var recursoA3 = {
		miniatura: "recursos/img/Mobile/Portugues/3/oraptodavaca.jpg", 
		nome: "O Rapto da Vaca Sagrada",
		ano: "3",
		id: "22"
	};
	recursosAnd.push(recursoA3);

	var recursoA4 = {
		//mat
		miniatura: "recursos/img/Mobile/Matematica/4/mathflashcards.jpg", 
		nome: "Math Flash Cards",
		ano: "4",
		id: "87"
	};
	recursosAnd.push(recursoA4);

	var recursoA5 = {
		miniatura: "recursos/img/Mobile/Portugues/5/Acentuando.jpg", 
		nome: "Acentuando",
		ano: "5",
		id: "39"
	};
	recursosAnd.push(recursoA5);

	var recursoA6 = {
		//mat
		miniatura: "recursos/img/Mobile/Matematica/6/mestredamatematica.jpg", 
		nome: "Mestre da matemática: Jogo educativo e exercícios",
		ano: "6",
		id: "94"
	};
	recursosAnd.push(recursoA6);

	var recursoA7 = {
		miniatura: "recursos/img/Mobile/Portugues/7/wordacademy.jpg", 
		nome: "Word Academy",
		ano: "7",
		id: "52"
	};
	recursosAnd.push(recursoA7);

	var recursoA8 = {
		//mat
		miniatura: "recursos/img/Mobile/Matematica/8/volumeareaconversao.jpg", 
		nome: "Volume, Área e Conversão",
		ano: "8",
		id: "107"
	};
	recursosAnd.push(recursoA8);

	var recursoA9 = {
		miniatura: "recursos/img/Mobile/Portugues/9/gramaticadebolso.jpg", 
		nome: "Gramática de bolso",
		ano: "9",
		id: "67"
	};
	recursosAnd.push(recursoA9);

	var recursoA10 = {
		//mat
		miniatura: "recursos/img/Mobile/Matematica/9/geogebra.jpg", 
		nome: "Calculadora Gráfica GeoGebra",
		ano: "9",
		id: "111"
	};
	recursosAnd.push(recursoA10);

		document.getElementById('recurso1').children[0].src = recursos[0].miniatura;
		document.getElementById('recurso1').children[1].innerHTML = recursos[0].nome;
		document.getElementById('recurso1').children[2].innerHTML = recursos[0].ano+"º ano";

		document.getElementById('recurso2').children[0].src = recursos[1].miniatura;
		document.getElementById('recurso2').children[1].innerHTML = recursos[1].nome;
		document.getElementById('recurso2').children[2].innerHTML = recursos[1].ano+"º ano";

		document.getElementById('recurso3').children[0].src = recursos[2].miniatura;
		document.getElementById('recurso3').children[1].innerHTML = recursos[2].nome;
		document.getElementById('recurso3').children[2].innerHTML = recursos[2].ano+"º ano";

		document.getElementById('recurso4').children[0].src = recursos[3].miniatura;
		document.getElementById('recurso4').children[1].innerHTML = recursos[3].nome;
		document.getElementById('recurso4').children[2].innerHTML = recursos[3].ano+"º ano";

		document.getElementById('recurso5').children[0].src = recursos[4].miniatura;
		document.getElementById('recurso5').children[1].innerHTML = recursos[4].nome;
		document.getElementById('recurso5').children[2].innerHTML = recursos[4].ano+"º ano";

		document.getElementById('recurso6').children[0].src = recursos[5].miniatura;
		document.getElementById('recurso6').children[1].innerHTML = recursos[5].nome;
		document.getElementById('recurso6').children[2].innerHTML = recursos[5].ano+"º ano";

		document.getElementById('recurso7').children[0].src = recursos[6].miniatura;
		document.getElementById('recurso7').children[1].innerHTML = recursos[6].nome;
		document.getElementById('recurso7').children[2].innerHTML = recursos[6].ano+"º ano";

		document.getElementById('recurso8').children[0].src = recursos[7].miniatura;
		document.getElementById('recurso8').children[1].innerHTML = recursos[7].nome;
		document.getElementById('recurso8').children[2].innerHTML = recursos[7].ano+"º ano";		

		document.getElementById('recurso9').children[0].src = recursos[8].miniatura;
		document.getElementById('recurso9').children[1].innerHTML = recursos[8].nome;
		document.getElementById('recurso9').children[2].innerHTML = recursos[8].ano+"º ano";

		document.getElementById('recurso10').children[0].src = recursos[9].miniatura;
		document.getElementById('recurso10').children[1].innerHTML = recursos[9].nome;
		document.getElementById('recurso10').children[2].innerHTML = recursos[9].ano+"º ano";	


//recursos android
		/*document.getElementById('recursoA1').children[0].src = recursosAnd[0].miniatura;
		document.getElementById('tituloRecursoA1').innerHTML = recursosAnd[0].nome;
		document.getElementById('anoA1').innerHTML = recursosAnd[0].ano+"º ano";

		document.getElementById('recursoA2').children[0].src = recursosAnd[1].miniatura;
		document.getElementById('tituloRecursoA2').innerHTML = recursosAnd[1].nome;
		document.getElementById('anoA2').innerHTML = recursosAnd[1].ano+"º ano";

		document.getElementById('recursoA3').children[0].src = recursosAnd[2].miniatura;
		document.getElementById('tituloRecursoA3').innerHTML = recursosAnd[2].nome;
		document.getElementById('anoA3').innerHTML = recursosAnd[2].ano+"º ano";

		document.getElementById('recursoA4').children[0].src = recursosAnd[3].miniatura;
		document.getElementById('tituloRecursoA4').innerHTML = recursosAnd[3].nome;
		document.getElementById('anoA4').innerHTML = recursosAnd[3].ano+"º ano";

		document.getElementById('recursoA5').children[0].src = recursosAnd[4].miniatura;
		document.getElementById('tituloRecursoA5').innerHTML = recursosAnd[4].nome;
		document.getElementById('anoA5').innerHTML = recursosAnd[4].ano+"º ano";

		document.getElementById('recursoA6').children[0].src = recursosAnd[5].miniatura;
		document.getElementById('tituloRecursoA6').innerHTML = recursosAnd[5].nome;
		document.getElementById('anoA6').innerHTML = recursosAnd[5].ano+"º ano";

		document.getElementById('recursoA7').children[0].src = recursosAnd[6].miniatura;
		document.getElementById('tituloRecursoA7').innerHTML = recursosAnd[6].nome;
		document.getElementById('anoA7').innerHTML = recursosAnd[6].ano+"º ano";

		document.getElementById('recursoA8').children[0].src = recursosAnd[7].miniatura;
		document.getElementById('tituloRecursoA8').innerHTML = recursosAnd[7].nome;
		document.getElementById('anoA8').innerHTML = recursosAnd[7].ano+"º ano";

		document.getElementById('recursoA9').children[0].src = recursosAnd[8].miniatura;
		document.getElementById('tituloRecursoA9').innerHTML = recursosAnd[8].nome;
		document.getElementById('anoA9').innerHTML = recursosAnd[8].ano+"º ano";

		document.getElementById('recursoA10').children[0].src = recursosAnd[9].miniatura;
		document.getElementById('tituloRecursoA10').innerHTML = recursosAnd[9].nome;
		document.getElementById('anoA10').innerHTML = recursosAnd[9].ano+"º ano";*/

		document.getElementById('recursoA1').children[0].src = recursosAnd[0].miniatura;
		document.getElementById('recursoA1').children[1].innerHTML = recursosAnd[0].nome;
		document.getElementById('recursoA1').children[2].innerHTML = recursosAnd[0].ano+"º ano";

		document.getElementById('recursoA2').children[0].src = recursosAnd[1].miniatura;
		document.getElementById('recursoA2').children[1].innerHTML = recursosAnd[1].nome;
		document.getElementById('recursoA2').children[2].innerHTML = recursosAnd[1].ano+"º ano"

		document.getElementById('recursoA3').children[0].src = recursosAnd[2].miniatura;
		document.getElementById('recursoA3').children[1].innerHTML = recursosAnd[2].nome;
		document.getElementById('recursoA3').children[2].innerHTML = recursosAnd[2].ano+"º ano";

		document.getElementById('recursoA4').children[0].src = recursosAnd[3].miniatura;
		document.getElementById('recursoA4').children[1].innerHTML = recursosAnd[3].nome;
		document.getElementById('recursoA4').children[2].innerHTML = recursosAnd[3].ano+"º ano";

		document.getElementById('recursoA5').children[0].src = recursosAnd[4].miniatura;
		document.getElementById('recursoA5').children[1].innerHTML = recursosAnd[4].nome;
		document.getElementById('recursoA5').children[2].innerHTML = recursosAnd[4].ano+"º ano";

		document.getElementById('recursoA6').children[0].src = recursosAnd[5].miniatura;
		document.getElementById('recursoA6').children[1].innerHTML = recursosAnd[5].nome;
		document.getElementById('recursoA6').children[2].innerHTML = recursosAnd[5].ano+"º ano";

		document.getElementById('recursoA7').children[0].src = recursosAnd[6].miniatura;
		document.getElementById('recursoA7').children[1].innerHTML = recursosAnd[6].nome;
		document.getElementById('recursoA7').children[2].innerHTML = recursosAnd[6].ano+"º ano";

		document.getElementById('recursoA8').children[0].src = recursosAnd[7].miniatura;
		document.getElementById('recursoA8').children[1].innerHTML = recursosAnd[7].nome;
		document.getElementById('recursoA8').children[2].innerHTML = recursosAnd[7].ano+"º ano";

		document.getElementById('recursoA9').children[0].src = recursosAnd[8].miniatura;
		document.getElementById('recursoA9').children[1].innerHTML = recursosAnd[8].nome;
		document.getElementById('recursoA9').children[2].innerHTML = recursosAnd[8].ano+"º ano";

		document.getElementById('recursoA10').children[0].src = recursosAnd[9].miniatura;
		document.getElementById('recursoA10').children[1].innerHTML = recursosAnd[9].nome;
		document.getElementById('recursoA10').children[2].innerHTML = recursosAnd[9].ano+"º ano";

		function page(n) {
			location.href="../athena/recursocomputador.html?n=" + recursos[n].id;
		}

		function pageAnd(n) {
			location.href="../athena/recursomobile.html?n=" + recursosAnd[n].id;
		}