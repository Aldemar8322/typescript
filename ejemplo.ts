export {}
//let nombre = "exc";
//console.log(nombre);

// toma cualquer tipo de dato pero me toma solo el ultimo
/*  let miId: string | number;
miId = "abc";
miId = "321";
console.log(miId);*/

/* let miAny: any;
miAny = "abc";
miAny = 1;
miAny = false;
console.log(miAny); */

// tuplas
/* let miTupla: [string, number, boolean];
miTupla = ["pepita", 555, true];
console.log(miTupla); */

// inferencia
/* let arr1 = ["abc", 123, true, [], {}, function name(){}];
arr1 = ["1", "2", "3"]
arr1 = [1, 2, 3]
console.log(arr1); */

/* let arr2 = ["a"];
arr2 = [1, 2, 3]
console.log(arr2); */

// objetos
/* let miObject: object;
miObject = {};
console.log(miObject);
let objPersona1: object;
objPersona1 = {};
objPersona1 = {
    nombre: "pepita",
    usuario: "pepita@bit.com",
    contrasenia: "abc"
};
console.log(objPersona1); */
// al ponerle signo ? deja opcional ingresar el dato
/* let objPersona2: {
    nombre: string;
    hijos: number;
    casado?: boolean;
    activo: boolean;
};
objPersona2 = {
    nombre: "brandon",
    hijos: 5,
    activo: true
};
console.log(objPersona2); */

// enum-si le pongo =numero arranca la lista desde el numero que le ponga, debe ir administrador= numero
/* enum CodigosPermisos {
    Administrador,
    Profesor,
    Estudiante,
    Acudiente
}
console.log(CodigosPermisos);
console.log(CodigosPermisos.Administrador); */

/* // alias
type NombreEstudiante = string;
type HijosEstudiante = number;
type ActivoEstudiante = boolean;

type Estudiante = {
    nombre: NombreEstudiante;
    hijos: HijosEstudiante;
    activo: ActivoEstudiante;
}

let miEstudiante: Estudiante;
miEstudiante = {
    nombre: "juanito",
    hijos: 0,
    activo: true
}
console.log(miEstudiante); */

// interfaces
/* interface Profesor {
    id: number;
    nombre: string;
    curso: string;
    activo: boolean;
    perfil: string;
}
let miProfesor: Profesor;
miProfesor = {
    id: 1,
    nombre: "jirafales",
    curso: "básico1",
    activo: true,
    perfil: "profesor"
}
console.log(miProfesor); */

// funciones
let retornado: any;

/* function miFuncion1() {
    console.log("soy función 1");
}
retornado = miFuncion1();
console.log(retornado);

const miFuncion2 = () => {
    console.log("soy función 2");
}
retornado = miFuncion2();
console.log(retornado); */
// void significa ningun tipo-funcion vacia
/* function miFuncion(): void {
    console.log("soy Función");
}
retornado = miFuncion();
console.log(retornado); */

/* function miFuncion(): string {
    return "soy Función";
}
retornado = miFuncion();
console.log(retornado); */

// se le asigna el valor a la funcion en el retorno
/* function miFuncion(numero1: number, numero2: number): number {
    return numero1 * numero2;
}
retornado = miFuncion(2, 4);
console.log(retornado); */

// se le asigna el valor a la funcion en el retorno
/* function miFuncion(nombre: string = "desconocido"): string {
    return `hola, ${nombre}`;
}
retornado = miFuncion();
console.log(retornado);
retornado = miFuncion("pepita");
console.log(retornado); */

