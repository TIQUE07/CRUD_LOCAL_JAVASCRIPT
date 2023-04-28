let listaEmpleados = [];

const objEmpleado = {
    id: '',
    nombre: '',
    puesto:''
}

let editando = false;

const formulario = document.querySelector('#formulario');
const nombreImput = document.querySelector('#nombre');
const puestoImput = document.querySelector('#nombre');
const btnAgregar = document.querySelector('#ntnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    ev.preventDefault();
 
    if(nombreImput.value === '' || puestoImput.value === '') {
            alert('todos los campos son obligatorios.');
            return;
            
        }

        if(editando) {
            //editandoEmpleado();
            editando = false;
        } else {
            objEmpleado.id = Date.now();
            objEmpleado.nombre = nombreImput.value;
            objEmpleado.puesto = puestoImput.value;

            agregarEmpleado();

        }

    }

    function agregarEmpleado() {
        listaEmpleados.push({...objEmpleado});

        mostrarEmpleados();
    }

    function mostrarEmpleados() {
        const divEmpleados = document.querySelector('.div-empleados')

        listaEmpleados.forEach( empleado => {
            const {id, nombre, puesto} = empleado;

            const parrafo = document.createElement('p');
            parrafo.textContent = `${id} - ${nombre} - ${puesto} - `;
            parrafo.dataset.id = id;

            const editarBoton = document.createElement('button');
            //editarBoton.onclick = () => cargarEmpleado(empleado);
            editarBoton.textContent = 'Editar';
            editarBoton.classList.add('btn', 'btn-editar');
            parrafo.append(editarBoton);

            const eliminarBoton = document.createElement('button');
            //eliminarBoton.onclick = () => eliminarEmpleado(id);
            eliminarBoton.textContent = 'Eliminar';
            eliminarBoton.classList.add('btn', 'btn-eliminar');
            parrafo.append(eliminarBoton);

            const hr = document.createElement('hr');

            divEmpleados.appendChild(parrafo);
            divEmpleados.appendChild(hr);
        } 
        );
    }