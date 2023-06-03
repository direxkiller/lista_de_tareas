/* const inputTarea = document.getElementById ('tarea');
const miParrafo = document.getElementById ('parrafo');
const miFormulario = document.getElementById ('formulario');
const boxTareas = document.getElementById ('box-tareas');
console.log(inputTarea.value);

function addTask (e){
    e.preventDefault();
    console.log('cargando');

    const nuevaTarea = document.createElement ('div');
    nuevaTarea.innerText = inputTarea.value;
    console.log(nuevaTarea);
    boxTareas.appendChild (nuevaTarea);

    inputTarea.value = '';
    const card = document.createElement ('div');
    card.classList.add('p-3', 'mb-2', 'bg-success', 'text-white');
    const textTarea = document.createElement ('p');
    textTarea.innerText = "text";
    textTarea.classList.add ('p-3', 'mb-2', 'bg-success', 'text-white');
    const icono = document.createElement ('i');
    icono.classList.add('gg');
    card.appendChild(textTarea);
    card.appendChild(icono);
}

miFormulario.addEventListener ("submit", addTask); */

const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}


/* function tachar (){
  let check = addBtn.querySelector ("check");
check.addEventListener ('click', ()=>{
  check.classList.add("active-check")
  check.children[0].children[1].classList.add("complete") 

  check.addEventListener("click", (e) => {
    const borrado = e.target.parentElement;
    ul.removeChild(borrado);

    const borrar = document.querySelectorAll("li");

    if (borrar.length) {
      ul.style.className = "complete";;
    }
})
} */