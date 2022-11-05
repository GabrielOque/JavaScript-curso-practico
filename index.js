const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const resultado = document.getElementById("Resultado");

const btnSuma = document.getElementById("suma");
const btnResta = document.getElementById("resta");
const btnMultiplica = document.getElementById("multiplica");
const btnDivide = document.getElementById("divide");
const btnLimpia = document.getElementById("limpia");
const btnAgrega = document.getElementById("agrega");
const btnQuita = document.getElementById("quita");

//AddEventListener

const Sumar = () => {
  const result = parseInt(input1.value) + parseInt(input2.value);
  resultado.innerHTML = "El resultado es :" + result;
};

const Restar = () => {
  const result = parseInt(input1.value) - parseInt(input2.value);
  resultado.innerHTML = "El resultado es :" + result;
};

const Multiplicar = () => {
  const result = parseInt(input1.value) * parseInt(input2.value);
  resultado.innerHTML = "El resultado es :" + result;
};

const Dividir = () => {
  const result = parseInt(input1.value) / parseInt(input2.value);
  resultado.innerHTML = "El resultado es :" + result;
};

const Limpiar = () => {
  input1.value = "";
  input2.value = "";
  resultado.innerHTML = "";
};

//Este es para agrwgar y quitar imagenes

const Imagen = document.getElementById("Imagen");

const Agregar = () => {
  const img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387_960_720.png"
  );
  Imagen.append(img);
};

const Quitar = () => {
  Imagen.innerHTML = "";
};

btnSuma.addEventListener("click", Sumar);
btnResta.addEventListener("click", Restar);
btnMultiplica.addEventListener("click", Multiplicar);
btnDivide.addEventListener("click", Dividir);
btnLimpia.addEventListener("click", Limpiar);
btnAgrega.addEventListener("click", Agregar);
btnQuita.addEventListener("click", Quitar);
