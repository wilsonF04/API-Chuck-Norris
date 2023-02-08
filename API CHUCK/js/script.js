const imagem = document.querySelector(".imagem");
const frase = document.querySelector(".texto");
const botao = document.querySelector(".botao");

botao.addEventListener("click", () => {
 getApi();
});

async function getApi() {
 try {
  const url = `https://api.chucknorris.io/jokes/random`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  frase.textContent = data.value;
 } catch (e) {
  console.log(e);
 }
}

const textoCategoria = document.querySelector(".texto-categoria");
const lista = document.querySelectorAll(".categorias ul li");

console.log(lista);
async function getCategoriaApi(category) {
 try {
  const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
  const response = await fetch(url);
  const data = await response.json();
  lista.forEach((item) => {
   item.addEventListener("click", () => {
    getCategoriaApi(item.textContent);
    textoCategoria.textContent = data.value;
   });
  });
 } catch (e) {
  console.log(e);
 }
}

getCategoriaApi();
