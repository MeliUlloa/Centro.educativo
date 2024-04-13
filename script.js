class Persona {
    nombre; apellido; estado_civil; nro_identificacion; rol;
    // Los "p"palabra indican los que son parametros
    constructor(pnombre, papellido, pestado_civil, pnro_identificacion) {
        this.nombre = pnombre;
        this.apellido = papellido;
        this.estado_civil = pestado_civil;
        this.nro_identificacion = pnro_identificacion;
    }
    //Metodos Getter 
    getNombre() {
        return this.nombre;
    }

    getApellido() {
        return this.apellido;
    }

    getEstado_civil() {
        return this.estado_civil;
    }

    getNro_identificacion() {
        return this.nro_identificacion;
    }

    getRol() {
        return this.rol;
    }
    //Metodo Setter para cambiar el estado civil
    setEstado_civil(nuevo_estado_civil) {
        this.estado_civil = nuevo_estado_civil;
    }
}

//Clase de empleado que extiende desde persona 
class Empleado extends Persona {
    ano_incorporacion; numero_despacho;

    constructor(pnombre, papellido, pestado_civil, pnro_identificacion, pano_incorporacion, pnumero_despacho) {
        super(pnombre, papellido, pestado_civil, pnro_identificacion);
        this.ano_incorporacion = pano_incorporacion;
        this.numero_despacho = pnumero_despacho;

    }

    // metodo get para obtener datos y set para enviar datos
    getAno_incorporacion() {
        return this.ano_incorporacion;
    }
    getDespacho() {
        return this.numero_despacho;
    }
    setDespacho(nuevo_despacho) {
        this.numero_despacho = nuevo_despacho;
    }

}

class Estudiante extends Persona {
    curso_matriculado;

    constructor(pnombre, papellido, pestado_civil, pnro_identificacion, pcurso_matriculado) {
        super(pnombre, papellido, pestado_civil, pnro_identificacion);
        this.curso_matriculado = pcurso_matriculado;
    }

    getCurso_matriculado() {
        return this.curso_matriculado;
    }
    setCurso_matriculado(nuevo_curso_matriculado) {
        this.curso_matriculado = nuevo_curso_matriculado;
    }
}

class Profesor extends Empleado {
    departamento;

    constructor(pnombre, papellido, pestado_civil, pnro_identificacion, pano_incorporacion, pnumero_despacho, pdepartamento) {
        super(pnombre, papellido, pestado_civil, pnro_identificacion, pano_incorporacion, pnumero_despacho);
        this.departamento = pdepartamento;

    }
    getDepartamento() {
        return this.departamento;
    }
    setDepartamento(nuevo_departamento) {
        this.departamento = nuevo_departamento;
    }

}

class Personal_servicio extends Empleado {
    seccion_asignada;
    constructor(pnombre, papellido, pestado_civil, pnro_identificacion, pano_incorporacion, pnumero_despacho, pseccion_asignada) {
        super(pnombre, papellido, pestado_civil, pnro_identificacion, pano_incorporacion, pnumero_despacho);
        this.seccion_asignada = pseccion_asignada;
    }
    getSeccion_asignada() {
        return this.seccion_asignada;
    }
    setSeccion_asignada(nueva_seccion_asignada) {
        this.seccion_asignada = nueva_seccion_asignada;
    }

}

class Centro_educativo {
    nombre; estudiante; profesor; lista_personal_servicio;
    constructor(pnombre) {
        this.nombre = pnombre;
        this.estudiante = [];
        this.profesor = [];
        this.lista_personal_servicio = [];
    }
}


// funsion para interactuar con el usuario 

function interactuarConUsuario() {
    let centroEducativo = new Centro_educativo("Mi Centro Educativo");

    while (true) {
        let opcion = prompt(
            "Selecciona una opción:\n1. Dar de alta una persona\n2. Dar de baja una persona\n3. Imprimir información\n4. Salir"
        );

        switch (opcion) {
            case "1":
                darDeAltaPersona(centroEducativo);
                break;
            case "2":
                darDeBajaPersona(centroEducativo);
                break;
            case "3":
                imprimirInformacion(centroEducativo);
                break;
            case "4":
                return; // Salir del bucle y terminar la ejecución del programa
            default:
                alert("Opción no válida. Por favor, selecciona una opción válida.");
        }
    }
}
// funsion para dar de alta a una persona 
function darDeAltaPersona(centroEducativo) {
    let tipoPersona = prompt(
        "Selecciona el tipo de persona a dar de alta:\n1. Estudiante\n2. Profesor\n3. Personal de Servicio"
    );
    let nombre = prompt("Ingresa el nombre:");
    let apellido = prompt("Ingresa el apellido:");
    let estadoCivil = prompt("Ingresa el estado civil:");
    let nroIdentificacion = prompt("Ingresa el número de identificación:");

    switch (tipoPersona) {
        case "1":
            let cursoMatriculado = prompt("Ingresa el curso matriculado:");
            let nuevoEstudiante = new Estudiante(
                nombre,
                apellido,
                estadoCivil,
                nroIdentificacion,
                cursoMatriculado
            );
            centroEducativo.estudiante.push(nuevoEstudiante);
            break;
        case "2":
            let departamentoProfesor = prompt("Ingresa el departamento:");
            let anoIncorporacionProfesor = prompt("Ingresa el año de incorporación:");
            let despachoProfesor = prompt("Ingresa el número de despacho:");
            let nuevoProfesor = new Profesor(
                nombre,
                apellido,
                estadoCivil,
                nroIdentificacion,
                anoIncorporacionProfesor,
                despachoProfesor,
                departamentoProfesor
            );
            centroEducativo.profesor.push(nuevoProfesor);
            break;
        case "3":
            let seccionAsignada = prompt("Ingresa la sección asignada:");
            let anoIncorporacionPersonalServicio = prompt("Ingresa el año de incorporación:");
            let despachoPersonalServicio = prompt("Ingresa el número de despacho:");
            let nuevoPersonalServicio = new Personal_servicio(
                nombre,
                apellido,
                estadoCivil,
                nroIdentificacion,
                anoIncorporacionPersonalServicio,
                despachoPersonalServicio,
                seccionAsignada
            );
            centroEducativo.lista_personal_servicio.push(nuevoPersonalServicio);
            break;
        default:
            alert("Tipo de persona no válido.");
    }
}

// funsion para dar de baja una persona
function darDeBajaPersona(centroEducativo) {
    let identificacion = prompt("Ingresa el número de identificación de la persona a dar de baja:");

    // Buscar y eliminar la persona en la lista correspondiente
    centroEducativo.estudiante = centroEducativo.estudiante.filter(
        (estudiante) => estudiante.nro_identificacion !== identificacion
    );
    centroEducativo.profesor = centroEducativo.profesor.filter(
        (profesor) => profesor.nro_identificacion !== identificacion
    );
    centroEducativo.lista_personal_servicio = centroEducativo.lista_personal_servicio.filter(
        (personalServicio) => personalServicio.nro_identificacion !== identificacion
    );
    alert("La persona ha sido eliminada correctamente.");
}

// Función para imprimir información
function imprimirInformacion(centroEducativo) {
    let tipoInformacion = prompt("Selecciona el tipo de información a imprimir:\n1. Listar todas las personas\n2. Listar nóminas");

    switch (tipoInformacion) {
        case "1":
            console.log("Estudiantes:");
            centroEducativo.estudiante.forEach((estudiante) => {
                console.log(estudiante);
            });
            console.log("Profesores:");
            centroEducativo.profesor.forEach((profesor) => {
                console.log(profesor);
            });
            console.log("Personal de Servicio:");
            centroEducativo.lista_personal_servicio.forEach((personalServicio) => {
                console.log(personalServicio);
            });
            break;
        case "2":
            // Implementar la lógica para imprimir nóminas
            console.log("Nóminas:");
            break;
        default:
            alert("Tipo de información no válido.");
    }
}

// Llamar a la función principal para iniciar la interacción con el usuario
interactuarConUsuario();
