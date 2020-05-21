var cambio = false;
function cambiarTexto(p){
	$(p).html("Nuevo Texto");
    if(cambio){
    	$(p).html("Columna"+p);
    }
    cambio= !cambio;

}
