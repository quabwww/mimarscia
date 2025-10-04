const imagen = document.getElementById("imagen");
const texto = document.getElementById("texto");

const secciones = [
  { img: "img1.jpeg", txt: "Mi amor, no sé cómo explicarte lo mucho que te necesito. Cuando estás triste, el mundo pierde color. Eres mi razón de calma, mi lugar seguro, y solo quiero verte sonreír otra vez, porque tu sonrisa es lo que mantiene viva la mía" },
  { img: "img2.jpeg", txt: "Marscia… no sé cómo explicarlo, pero te siento incluso cuando estamos lejos. Duele pensar que algo tan bonito ahora pesa tanto, y aun así, no puedo dejar de amarte." },
  { img: "img3.jpeg", txt: "No hay momento del día en el que no piense en ti, Marscia. Te amo de una forma tranquila, pero inmensa; de esas que no necesitan ruido para ser reales. A veces solo quiero abrazarte sin decir nada, porque en ese silencio también va todo mi amor. Eres la persona que le dio sentido a mi mundo, y aunque no siempre lo diga, eres lo más bonito que tengo" },
  { img: "img4.jpeg", txt: "Te amo, Marscia. Te amo con calma y con locura, con ternura y con fuerza. Te amo sin condiciones, sin esperar nada, solo porque tu existencia me basta. Cuando el día se apaga y pienso en lo que me hace feliz, siempre apareces tú."},
  { img: "img5.jpeg", txt: "Te amo, Marscia, y ese amor no depende de nada. No de los días, ni del ánimo, ni del pasado. Es un amor que simplemente está, que respira conmigo y que me sostiene. Me gusta cómo llenas mi mente sin siquiera intentarlo, cómo tu nombre me da calma" }
];

let indice = 0;

imagen.addEventListener("click", () => {
  indice = (indice + 1) % secciones.length;
  imagen.src = secciones[indice].img;
  texto.textContent = secciones[indice].txt;
});
