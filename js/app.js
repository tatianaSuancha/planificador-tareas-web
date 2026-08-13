document.addEventListener('DOMContentLoaded', () => {

    const nombreTareaInput = document.querySelector('#nombreTarea');
    const descripcionTareaInput = document.querySelector('#descripcionTarea');
    const fechaTareaInput = document.querySelector('#fechaTarea');
    const estadoTareaInput = document.querySelector('#estadoTarea');

    const botonGuardar = document.querySelector('#guardarTarea');
    const alertaError = document.querySelector('#alertaErrorFormulario');

    function validFormFieldInput(data) {
        const errores = [];

        if (!data.nombre || data.nombre.trim() === '') {
            errores.push('el nombre de la tarea no puede estar vacio.');
        }

        if (!data.descripcion || data.descripcion.trim() === '') {
            errores.push('la descripcion no puede estar vacia.');
        }

        if (!data.fecha) {
            errores.push('debes seleccionar una fecha de entrega.');
        }

        if (!data.estado) {
            errores.push('debes seleccionar un estado.');
        }

        return {
            esValido: errores.length === 0,
            errores: errores
        };
    }

    function mostrarError(errores) {
        alertaError.innerHTML = errores.join('<br>');
        alertaError.classList.remove('d-none');
    }

    function ocultarError() {
        alertaError.classList.add('d-none');
        alertaError.innerHTML = '';
    }

    botonGuardar.addEventListener('click', () => {

        const data = {
            nombre: nombreTareaInput.value,
            descripcion: descripcionTareaInput.value,
            fecha: fechaTareaInput.value,
            estado: estadoTareaInput.value
        };

        console.log('nombre: ' + data.nombre);
        console.log('descripcion: ' + data.descripcion);
        console.log('fecha: ' + data.fecha);
        console.log('estado: ' + data.estado);

        const resultado = validFormFieldInput(data);

        if (!resultado.esValido) {
            mostrarError(resultado.errores);
        } else {
            ocultarError();
            console.log('formulario valido, datos listos para procesar:', data);
        }
    });

    [nombreTareaInput, descripcionTareaInput, fechaTareaInput, estadoTareaInput].forEach(campo => {
        campo.addEventListener('input', () => {
            if (!alertaError.classList.contains('d-none')) {
                ocultarError();
            }
        });
    });

});