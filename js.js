var cambio = false;
function cambiarTexto(){
	$('#col1').html("Nuevo Texto");
    if(cambio){
    	$('#col1').html("Columna 1");
    }
    cambio= !cambio;

}