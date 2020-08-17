function tv(){
	preco = 800;
	loc = prompt("Digite sua localidade: ");
	if (loc == "Brasil"){
		frete = preco * 0.10;
		
	} else{
		frete =  preco * 0.15;
	}
	preco += frete;
	alert("Localizacao: " + loc);
	alert("Preco: R$" + preco + "(frete: R$" + frete + ")");
}

function cel(){
	preco = 1500;
	loc = prompt("Digite sua localidade: ");
	if (loc == "Brasil"){
		frete = preco * 0.10;
		
	} else{
		frete = preco * 0.15;
	}
	preco += frete;
	alert("Localizacao: " + loc);
	alert("Preco: R$" + preco + "(frete: R$" + frete + ")");
}

function imp(){
	preco = 250;
	loc = prompt("Digite sua localidade: ");
	if (loc == "Brasil"){
		frete = preco * 0.10;
		
	} else{
		frete = preco * 0.15;
	}
	preco += frete;
	alert("Localizacao: " + loc);
	alert("Preco: R$" + preco + "(frete: R$" + frete + ")");

}
function tor(){
	preco = 150;
	loc = prompt("Digite sua localidade: ");
	if (loc == "Brasil"){
		frete = preco * 0.10;
		
	} else{
		frete = preco * 0.15;
	}
	preco += frete;
	alert("Localizacao: " + loc);
	alert("Preco: R$" + preco + "(frete: R$" + frete + ")");

}