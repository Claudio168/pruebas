var cambio = false;
function cambiarTexto(p){
	$(p).html("Nuevo Texto");
    if(cambio){
    	$(p).html("Columna 1");
    }
    cambio= !cambio;

}