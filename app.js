
$('.carousel').carousel();
$('.datepicker').datepicker();

// ne marche pas avec un Text Area
document.forms["formulaire"].addEventListener("submit", function(e) {
    let erreur;
 
	let inputs = this;
 
	for (var i = 0; i < inputs.length; i++) {
		console.log(inputs[i]);
		if (!inputs[i].value) {
			erreur = "Veuillez renseigner tous les champs";
			break;
		}
	}
 
	if (erreur) {
		e.preventDefault();
		document.getElementById("erreur").innerHTML = erreur;
		return false;
	} else {
		alert('Formulaire envoyé !');
	}
});


