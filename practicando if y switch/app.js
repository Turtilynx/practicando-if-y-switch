let dinero = 15;
let buenTiempo = true;
let tipoPlan;

if (dinero >= 10 && buenTiempo) {
  tipoPlan = "Vamos a la playa";
  console.log(tipoPlan);
} else if (dinero >= 10 && !buenTiempo) {
  tipoPlan = "Vamos al cine";
  console.log(tipoPlan);
} else {
  tipoPlan = "No tenemos suficiente dinero para hacer nada";
  console.log(tipoPlan);
}

switch (tipoPlan) {
  case "Vamos a la playa":
    console.log("¡Qué bien! Vamos a disfrutar del sol y la arena.");
    document.getElementById("resultado").textContent =
      "¡Qué bien! Vamos a disfrutar del sol y la arena.";

    break;

  case "Vamos al cine":
    console.log("¡Genial! Vamos a ver una película emocionante.");
    document.getElementById("resultado").textContent =
      "¡Genial! Vamos a ver una película emocionante.";
    break;

  case "No tenemos suficiente dinero para hacer nada":
    console.log("¡Qué mal! Tendremos que quedarnos en casa.");
    document.getElementById("resultado").textContent =
      "¡Qué mal! Tendremos que quedarnos en casa.";
    break;

    default:
    console.log("Plan desconocido.");
    document.getElementById("resultado").textContent = "Plan desconocido.";
    break;
}
