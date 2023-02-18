const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const select1 = document.querySelector('#select1');
const opciones1 = document.querySelector('#opciones1');
const contenidoSelect = document.querySelector('#select .contenido-select');
const contenidoSelect1 = document.querySelector('#select1 .contenido-select');

const hiddenInput = document.querySelector('#inputSelect');

document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		contenidoSelect.innerHTML = e.currentTarget.innerHTML;
		select.classList.toggle('active');
		opciones.classList.toggle('active');
		hiddenInput.value = e.currentTarget.querySelector('.titulo').innerText;
	});
});
document.querySelectorAll('#opciones1 > .opcion').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		contenidoSelect1.innerHTML = e.currentTarget.innerHTML;
		select1.classList.toggle('active');
		opciones1.classList.toggle('active');
		hiddenInput.value = e.currentTarget.querySelector('.titulo').innerText;
	});
});

select.addEventListener('click', () => {
	select.classList.toggle('active');
	opciones.classList.toggle('active');
});

select1.addEventListener('click', () => {
	select1.classList.toggle('active');
	opciones1.classList.toggle('active');
});