export function calcularTotal(cantidad,plazo){
	let interes;
	if(cantidad<=1000){
		interes=cantidad*.25;
	}
	else if(cantidad<=5000){
		interes=cantidad*.20;
	}
	else if(cantidad<=10000){
		interes=cantidad*.15;
	}
	else interes=cantidad*.1;

	let totalPlazo=0;
	switch(plazo){
		case 3:
			totalPlazo=cantidad*0.05;
			break;
		case 6:
			totalPlazo=cantidad*0.10;
			break;
		case 12:
			totalPlazo=cantidad*0.15;
			break;
		case 24:
			totalPlazo=cantidad*0.20;
			break;
		default:
			break;
	}
	return totalPlazo+interes+cantidad;
}