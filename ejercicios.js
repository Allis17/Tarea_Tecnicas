
//BLOQUEA
// dado un número, indicar si es positivo, negativo o neutro
debugger;
/* let numero=0
numero = parseInt(prompt("Ingrese un número: "));
if(numero > 0){

        console.log(`El número ${numero} es positivo`);
    } else if (numero == 0){
         console.log(`El número ${numero} es neutro`);
    }else{
        console.log(`El número ${numero} es negativo`);
    } */
// fin

function positivoNegativo(numero){
    if(numero > 0){
        console.log(`El número ${numero} es positivo`);
    } else if (numero == 0){
         console.log(`El número ${numero} es neutro`);
    }else{
        console.log(`El número ${numero} es negativo`);
    }
}

// dado el número de lápices que compra un cliente, calcular el costo total
debugger;
/* let cantidad=0;
cantidad = parseInt(prompt("Ingrese la cantidad de lápices que desea comprar: "));

let precio = 0;

if(cantidad >= 1000){
    precio = 0.85;
}else{
    precio = 0.90;
}

let total = cantidad * precio;

console.log(`Total a pagar: $${total.toFixed(2)}`); */
// fin

function costoLapices(cantidad){
    let precio = 0;

    if(cantidad >= 1000){
        precio = 0.85;
    }else{
        precio = 0.90;
    }

    let total = cantidad * precio;
    console.log(`Total a pagar: $${total.toFixed(2)}`);
}

// dado el precio de un traje, calcular el descuento y el total a pagar
debugger;
/* let precio=0;
precio = parseFloat(prompt("Ingrese el precio del traje: "));

let descuento = 0;

if(precio > 2500){
    descuento = precio * 0.15;
}else{
    descuento = precio * 0.08;
}

let total = precio - descuento;

console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
console.log(`Total a pagar: $${total.toFixed(2)}`); */
// fin

function descuentoTraje(precio){
    let descuento = 0;

    if(precio > 2500){
        descuento = precio * 0.15;
    }else{
        descuento = precio * 0.08;
    }

    let total = precio - descuento;
    console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
    console.log(`Total a pagar: $${total.toFixed(2)}`);
}


// dado el tipo de autobús, la distancia y la cantidad de personas, calcular el costo total del viaje
debugger;
/* let tipo = prompt("Ingrese el tipo de autobús (A, B o C): ").toUpperCase();
let distancia = parseFloat(prompt("Ingrese la distancia en km: "));
let personas = parseInt(prompt("Ingrese la cantidad de personas: "));

let tarifa = 0;

if(tipo === "A"){
    tarifa = 2.0;
}else if(tipo === "B"){
    tarifa = 2.5;
}else if(tipo === "C"){
    tarifa = 3.0;
}else{
    console.log("Tipo de autobús inválido");
}

if(personas < 20){
    personas = 20;
}

let total = tarifa * distancia * personas;

console.log(`Total a pagar por el viaje: $${total.toFixed(2)}`); */
// fin

function costoViaje(tipo, distancia, personas){
    let tarifa = 0;

    if(tipo === "A"){
        tarifa = 2.0;
    }else if(tipo === "B"){
        tarifa = 2.5;
    }else if(tipo === "C"){
        tarifa = 3.0;
    }else{
        console.log("Tipo de autobús inválido");
        return;
    }

    if(personas < 20){
        personas = 20;
    }

    let total = tarifa * distancia * personas;
    console.log(`Total a pagar por el viaje: $${total.toFixed(2)}`);
}


// dado el número de la cita, calcular su costo y el acumulado
debugger;
/* let numeroCita = parseInt(prompt("Ingrese el número de la cita: "));
let costo = 0;

if(numeroCita >= 1 && numeroCita <= 3){
    costo = 200;
}else if(numeroCita >= 4 && numeroCita <= 5){
    costo = 150;
}else if(numeroCita >= 6 && numeroCita <= 8){
    costo = 100;
}else if(numeroCita >= 9){
    costo = 50;
}else{
    console.log("Número de cita inválido");
}

let acumulado = 0;
for(let i=1; i<=numeroCita; i++){
    if(i >= 1 && i <= 3){
        acumulado += 200;
    }else if(i >= 4 && i <= 5){
        acumulado += 150;
    }else if(i >= 6 && i <= 8){
        acumulado += 100;
    }else{
        acumulado += 50;
    }
}

console.log(`Costo de la cita ${numeroCita}: $${costo}`);
console.log(`Total acumulado hasta la cita ${numeroCita}: $${acumulado}`); */
// fin

function costoCita(numeroCita){
    let costo = 0;

    if(numeroCita >= 1 && numeroCita <= 3){
        costo = 200;
    }else if(numeroCita >= 4 && numeroCita <= 5){
        costo = 150;
    }else if(numeroCita >= 6 && numeroCita <= 8){
        costo = 100;
    }else if(numeroCita >= 9){
        costo = 50;
    }else{
        console.log("Número de cita inválido");
        return;
    }

    let acumulado = 0;
    for(let i=1; i<=numeroCita; i++){
        if(i >= 1 && i <= 3){
            acumulado += 200;
        }else if(i >= 4 && i <= 5){
            acumulado += 150;
        }else if(i >= 6 && i <= 8){
            acumulado += 100;
        }else{
            acumulado += 50;
        }
    }

    console.log(`Costo de la cita ${numeroCita}: $${costo}`);
    console.log(`Total acumulado hasta la cita ${numeroCita}: $${acumulado}`);
}

// dado la clave (1-6) y el costo de materia prima, calcular el costo de producción y el precio de venta
debugger;
/* let clave = parseInt(prompt("Ingrese la clave (1-6): "));
let materiaPrima = parseFloat(prompt("Ingrese el costo de la materia prima: "));

let manoObra = 0;
let gastosFab = 0;

switch(clave){
    case 1:
        manoObra = materiaPrima * 0.80;
        gastosFab = materiaPrima * 0.28;
        break;
    case 2:
        manoObra = materiaPrima * 0.85;
        gastosFab = materiaPrima * 0.30;
        break;
    case 3:
        manoObra = materiaPrima * 0.75;
        gastosFab = materiaPrima * 0.35;
        break;
    case 4:
        manoObra = materiaPrima * 0.75;
        gastosFab = materiaPrima * 0.28;
        break;
    case 5:
        manoObra = materiaPrima * 0.80;
        gastosFab = materiaPrima * 0.30;
        break;
    case 6:
        manoObra = materiaPrima * 0.85;
        gastosFab = materiaPrima * 0.35;
        break;
    default:
        console.log("Clave inválida");
}

let costoProduccion = materiaPrima + manoObra + gastosFab;
let precioVenta = costoProduccion * 1.45;

console.log(`Materia prima: $${materiaPrima.toFixed(2)}`);
console.log(`Mano de obra: $${manoObra.toFixed(2)}`);
console.log(`Gastos de fabricación: $${gastosFab.toFixed(2)}`);
console.log(`Costo de producción: $${costoProduccion.toFixed(2)}`);
console.log(`Precio de venta: $${precioVenta.toFixed(2)}`); */
// fin

function fabricaCometa(clave, materiaPrima){
    let manoObra = 0;
    let gastosFab = 0;

    switch(clave){
        case 1:
            manoObra = materiaPrima * 0.80;
            gastosFab = materiaPrima * 0.28;
            break;
        case 2:
            manoObra = materiaPrima * 0.85;
            gastosFab = materiaPrima * 0.30;
            break;
        case 3:
            manoObra = materiaPrima * 0.75;
            gastosFab = materiaPrima * 0.35;
            break;
        case 4:
            manoObra = materiaPrima * 0.75;
            gastosFab = materiaPrima * 0.28;
            break;
        case 5:
            manoObra = materiaPrima * 0.80;
            gastosFab = materiaPrima * 0.30;
            break;
        case 6:
            manoObra = materiaPrima * 0.85;
            gastosFab = materiaPrima * 0.35;
            break;
        default:
            console.log("Clave inválida");
            return;
    }

    let costoProduccion = materiaPrima + manoObra + gastosFab;
    let precioVenta = costoProduccion * 1.45;

    console.log(`Materia prima: $${materiaPrima.toFixed(2)}`);
    console.log(`Mano de obra: $${manoObra.toFixed(2)}`);
    console.log(`Gastos de fabricación: $${gastosFab.toFixed(2)}`);
    console.log(`Costo de producción: $${costoProduccion.toFixed(2)}`);
    console.log(`Precio de venta: $${precioVenta.toFixed(2)}`);
}


// dado el tipo de tarjeta y el límite actual, calcular el nuevo límite de crédito
debugger;
/* let tipo = parseInt(prompt("Ingrese el tipo de tarjeta (1, 2, 3 u otro): "));
let limiteActual = parseFloat(prompt("Ingrese el límite actual de crédito: "));

let porcentaje=0, aumento=0, nuevoLimite=0;

switch(tipo){
    case 1:
        porcentaje = 0.25;
        break;
    case 2:
        porcentaje = 0.35;
        break;
    case 3:
        porcentaje = 0.40;
        break;
    default:
        porcentaje = 0.50;
        break;
}

aumento = limiteActual * porcentaje;
nuevoLimite = limiteActual + aumento;

console.log(`Tipo de tarjeta: ${tipo}`);
console.log(`Límite actual: $${limiteActual.toFixed(2)}`);
console.log(`Porcentaje de aumento: ${porcentaje*100}%`);
console.log(`Aumento: $${aumento.toFixed(2)}`);
console.log(`Nuevo límite de crédito: $${nuevoLimite.toFixed(2)}`); */
// fin

function aumentoCredito(tipo, limiteActual){
    let porcentaje=0, aumento=0, nuevoLimite=0;

    switch(tipo){
        case 1:
            porcentaje = 0.25;
            break;
        case 2:
            porcentaje = 0.35;
            break;
        case 3:
            porcentaje = 0.40;
            break;
        default:
            porcentaje = 0.50;
            break;
    }

    aumento = limiteActual * porcentaje;
    nuevoLimite = limiteActual + aumento;

    console.log(`Tipo de tarjeta: ${tipo}`);
    console.log(`Límite actual: $${limiteActual.toFixed(2)}`);
    console.log(`Porcentaje de aumento: ${porcentaje*100}%`);
    console.log(`Aumento: $${aumento.toFixed(2)}`);
    console.log(`Nuevo límite de crédito: $${nuevoLimite.toFixed(2)}`);
}


// dado el peso y la zona, calcular el costo de envío (peso ≤ 5kg)
debugger;
/* let peso = parseFloat(prompt("Ingrese el peso del paquete en kg (máx 5kg): "));
let zona = parseInt(prompt("Ingrese la zona de destino (1, 2, 3, 4): "));

if(peso > 5){
    console.log("El paquete excede el límite de 5 kg.");
}else{
    let tarifa = 0;

    switch(zona){
        case 1:
            tarifa = 10;
            break;
        case 2:
            tarifa = 20;
            break;
        case 3:
            tarifa = 30;
            break;
        case 4:
            tarifa = 50;
            break;
        default:
            console.log("Zona inválida");
            tarifa = 0;
            break;
    }

    let costo = peso * tarifa;
    console.log(`Peso del paquete: ${peso} kg`);
    console.log(`Zona de envío: ${zona}`);
    console.log(`Costo total de envío: $${costo.toFixed(2)}`);
} */
// fin

function costoEnvio(peso, zona){
    if(peso > 5){
        console.log("El paquete excede el límite de 5 kg.");
        return;
    }

    let tarifa = 0;

    switch(zona){
        case 1:
            tarifa = 10;
            break;
        case 2:
            tarifa = 20;
            break;
        case 3:
            tarifa = 30;
            break;
        case 4:
            tarifa = 50;
            break;
        default:
            console.log("Zona inválida");
            return;
    }

    let costo = peso * tarifa;
    console.log(`Peso del paquete: ${peso} kg`);
    console.log(`Zona de envío: ${zona}`);
    console.log(`Costo total de envío: $${costo.toFixed(2)}`);
}


// dado una edad, clasificar según el rango etario
debugger;
/* let edad = parseInt(prompt("Ingrese la edad: "));
let categoria = "";

if(edad >= 1 && edad <= 3){
    categoria = "Infante";
}else if(edad >= 4 && edad <= 13){
    categoria = "Niño";
}else if(edad >= 14 && edad <= 17){
    categoria = "Adolescente";
}else if(edad >= 18 && edad <= 35){
    categoria = "Joven";
}else if(edad >= 36 && edad <= 64){
    categoria = "Adulto";
}else if(edad >= 65){
    categoria = "Adulto mayor";
}else{
    categoria = "Edad inválida";
}

console.log(`Edad: ${edad}`);
console.log(`Categoría: ${categoria}`); */
// fin

function clasificacionEdad(edad){
    let categoria = "";

    if(edad >= 1 && edad <= 3){
        categoria = "Infante";
    }else if(edad >= 4 && edad <= 13){
        categoria = "Niño";
    }else if(edad >= 14 && edad <= 17){
        categoria = "Adolescente";
    }else if(edad >= 18 && edad <= 35){
        categoria = "Joven";
    }else if(edad >= 36 && edad <= 64){
        categoria = "Adulto";
    }else if(edad >= 65){
        categoria = "Adulto mayor";
    }else{
        categoria = "Edad inválida";
    }

    console.log(`Edad: ${edad}`);
    console.log(`Categoría: ${categoria}`);
}


// dado un número del 1 al 7, mostrar el día de la semana
debugger;
/* let numero = parseInt(prompt("Ingrese un número del 1 al 7: "));
let dia = "";

switch(numero){
    case 1:
        dia = "Lunes";
        break;
    case 2:
        dia = "Martes";
        break;
    case 3:
        dia = "Miércoles";
        break;
    case 4:
        dia = "Jueves";
        break;
    case 5:
        dia = "Viernes";
        break;
    case 6:
        dia = "Sábado";
        break;
    case 7:
        dia = "Domingo";
        break;
    default:
        dia = "Número inválido";
        break;
}

console.log(`Número: ${numero}`);
console.log(`Día de la semana: ${dia}`); */
// fin

function diaSemana(numero){
    let dia = "";

    switch(numero){
        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Martes";
            break;
        case 3:
            dia = "Miércoles";
            break;
        case 4:
            dia = "Jueves";
            break;
        case 5:
            dia = "Viernes";
            break;
        case 6:
            dia = "Sábado";
            break;
        case 7:
            dia = "Domingo";
            break;
        default:
            dia = "Número inválido";
            break;
    }

    console.log(`Número: ${numero}`);
    console.log(`Día de la semana: ${dia}`);
}


//BLOQUEB

function seriePositivoNegativo(n){
    let numero,c=1
    while (c <= n){
        numero = parseInt(prompt("Ingrese un número: "));
        positivoNegativo(numero);
        c++;
    }
}
//Bloque B – Ejercicios con Ciclos
//1. N números positivos o negativos
function clasificarNumeros(numeros) {
let i = 0;
while (i < numeros.length) {
    let num = numeros[i];


    if (num > 0) {
    console.log(`${num} es positivo`);
    } else if (num < 0) {
    console.log(`${num} es negativo`);
    } else {
    console.log(`${num} es neutro`);
    }


    i++;
}
}


//2. N compras de lápices
function calcularPedidos(pedidos) {
let i = 0;
while (i < pedidos.length) {
    let cantidad = pedidos[i];
    let precioUnitario = cantidad >= 1000 ? 0.85 : 0.90;
    let costo = cantidad * precioUnitario;


    console.log(`Pedido ${i + 1}: $${costo}`);


    i++;
}
}


//3. N compras de trajes
function comprasTrajes(trajes) {
let i = 0;
while (i < trajes.length) {
    let precio = trajes[i];
    let descuento = precio > 2500 ? 0.15 : 0.08;
    let precioFinal = precio - (precio * descuento);


    console.log(`Traje ${i + 1}: $${precioFinal.toFixed(2)}`);
    i++;
}
}


//4. N viajes en autobús
function viajesAutobus(viajes) {
let i = 0;
while (i < viajes.length) {
    let [tipo, km, personas] = viajes[i];
    let tarifa = 0;


    if (tipo === "A") tarifa = 2.0;
    else if (tipo === "B") tarifa = 2.5;
    else if (tipo === "C") tarifa = 3.0;


    let costoTotal = km * tarifa * personas;
    let costoPersona = costoTotal / personas;


    console.log(`Viaje ${i + 1}: Costo total $${costoTotal.toFixed(2)} – Costo por persona $${costoPersona.toFixed(2)}`);
    i++;
}    
}


//5. N pacientes en consultorio
function pacientesConsultorio(citas) {
function costoCita(n) {
    if (n >= 1 && n <= 3) return 200;
    if (n >= 4 && n <= 5) return 150;
    if (n >= 6 && n <= 8) return 100;
    return 50;
}
let i = 0;
while (i < citas.length) {
    let cita = citas[i];
    let acumulado = 0;


    let j = 1;
    while (j <= cita) {
    acumulado += costoCita(j);
    j++;
    }


    console.log(`Cita ${cita}: $${costoCita(cita)} – Acumulado: $${acumulado}`);
    i++;
}
}


//6. N artículos de la Fábrica El Cometa
function articulosFabrica(articulos) {
let i = 0;
while (i < articulos.length) {
    let [clave, mp] = articulos[i];
    let manoObra = 0, gastos = 0;


    if (clave === 1) { manoObra = mp * 0.80; gastos = mp * 0.28; }
    else if (clave === 2) { manoObra = mp * 0.85; gastos = mp * 0.30; }
    else if (clave === 3) { manoObra = mp * 0.75; gastos = mp * 0.35; }
    else if (clave === 4) { manoObra = mp * 0.75; gastos = mp * 0.28; }
    else if (clave === 5) { manoObra = mp * 0.80; gastos = mp * 0.30; }
    else if (clave === 6) { manoObra = mp * 0.85; gastos = mp * 0.35; }


    let costoProduccion = mp + manoObra + gastos;
    let precioVenta = costoProduccion * 1.45;


    console.log(`Artículo ${i + 1}: PV = $${precioVenta.toFixed(0)}`);
    i++;
}
}


//7. N clientes del Banco XYZ
function clientesBanco(clientes) {
let i = 0;
while (i < clientes.length) {
    let [tipo, credito] = clientes[i];
    let factor = 1;


    if (tipo === 1) factor = 1.25;
    else if (tipo === 2) factor = 1.35;
    else if (tipo === 3) factor = 1.40;
    else factor = 1.50;


    let nuevoCredito = credito * factor;
    console.log(`Cliente ${i + 1}: Nuevo crédito $${nuevoCredito.toFixed(0)}`);
    i++;
}
}


//8. N paquetes en paquetería
function paquetesEnvio(paquetes) {
  let i = 0;
  while (i < paquetes.length) {
    let [peso, zona] = paquetes[i];
    let tarifa = 0;


    if (zona === "América") tarifa = 50;
    else if (zona === "Europa") tarifa = 60;
    else if (zona === "Asia") tarifa = 70;
    else if (zona === "África") tarifa = 80;
    else if (zona === "Oceanía") tarifa = 90;
    else {
    console.log(`Paquete ${i + 1}: Zona inválida`);
    i++;
    continue;
    }


    if (peso > 5) {
    console.log(`Paquete ${i + 1}: Error, excede 5 kg`);
    } else {
      let costo = peso * tarifa;
    console.log(`Paquete ${i + 1}: Costo envío $${costo}`);
    }


    i++;
}
}


//9. N personas con clasificación de edades
function clasificarEdades(edades) {
let i = 0;
while (i < edades.length) {
    let edad = edades[i];
    let categoria = "";


    if (edad >= 1 && edad <= 3) categoria = "Infante";
    else if (edad <= 13) categoria = "Niño";
    else if (edad <= 17) categoria = "Adolescente";
    else if (edad <= 35) categoria = "Joven";
    else if (edad <= 64) categoria = "Adulto";
    else categoria = "Adulto mayor";


    console.log(`${edad} → ${categoria}`);
    i++;
}
}


//10. N números → días de la semana
function clasificarEdades(edades) {
let i = 0;
 while (i < edades.length) {
    let edad = edades[i];
    let categoria = "";


    if (edad >= 1 && edad <= 3) categoria = "Infante";
    else if (edad <= 13) categoria = "Niño";
    else if (edad <= 17) categoria = "Adolescente";
    else if (edad <= 35) categoria = "Joven";
    else if (edad <= 64) categoria = "Adulto";
    else categoria = "Adulto mayor";


    console.log(`${edad} → ${categoria}`);
    i++;
}
}




//BLOQUEC
function seriePositivoNegativoArreglo(numeros){
    let c=0
    while (c < numeros.length){
        positivoNegativo(numeros[c]);
        c++;
    }
}
function PositivoNegativoArreglo(numeros){
    for ( let c=0;c < numeros.length;c++){
        positivoNegativo(numeros[c]);
    }
}
function seriePositivoNegativo2(n){
    let numero,c=1
    while (c <= n){
        numero = parseInt(prompt("Ingrese un número: "));
        if(numero > 0){
            console.log(`El número ${numero} es positivo`);
        } else if (numero == 0){
            console.log(`El número ${numero} es neutro`);
        }else{
            console.log(`El número ${numero} es negativo`);
        }
        c++;
    }
}

// ================= Costo de pedidos de lápices en arreglo =================
// dado un arreglo con la cantidad de lápices de varios pedidos, calcular el costo total de cada uno
debugger;

/*
let n = parseInt(prompt("Ingrese la cantidad de pedidos: "));
let pedidos = [];
for(let i=0; i<n; i++){
    pedidos.push(parseInt(prompt(`Ingrese la cantidad de lápices del pedido ${i+1}: `)));
}
*/

function costoPedidosLapices(pedidos){
    let i = 0;
    while(i < pedidos.length){
        let cantidad = pedidos[i];
        let precio = (cantidad >= 1000) ? 0.85 : 0.90;
        let total = cantidad * precio;
        console.log(`Pedido ${i+1}: ${cantidad} lápices → Total a pagar: $${total.toFixed(2)}`);
        i++;
    }
}

// ================= Precios de trajes en arreglo =================
// dado un arreglo con los precios de N trajes, calcular el precio final aplicando el descuento correspondiente
debugger;

/*
let n = parseInt(prompt("Ingrese la cantidad de trajes: "));
let precios = [];
for(let i=0; i<n; i++){
    precios.push(parseFloat(prompt(`Ingrese el precio del traje ${i+1}: `)));
}
*/

function preciosTrajes(precios){
    let i = 0;
    while(i < precios.length){
        let precio = precios[i];
        let descuento = (precio > 2500) ? precio * 0.15 : precio * 0.08;
        let total = precio - descuento;
        console.log(`Traje ${i+1}: Precio original $${precio.toFixed(2)}, Descuento $${descuento.toFixed(2)}, Total a pagar $${total.toFixed(2)}`);
        i++;
    }
}

// ================= Costo de viajes en autobuses =================
// Guardar en un arreglo los viajes (tipo autobús, km, personas) y calcular el costo total y por persona de cada viaje
debugger;

/*
let n = parseInt(prompt("Ingrese la cantidad de viajes: "));
let viajes = [];
for(let i=0; i<n; i++){
    let tipo = prompt(`Ingrese el tipo de autobús para el viaje ${i+1} (A, B o C): `).toUpperCase();
    let km = parseFloat(prompt(`Ingrese la distancia en km del viaje ${i+1}: `));
    let personas = parseInt(prompt(`Ingrese la cantidad de personas del viaje ${i+1}: `));
    viajes.push({tipo: tipo, km: km, personas: personas});
}
*/

function costoViajes(viajes){
    let i = 0;
    while(i < viajes.length){
        let {tipo, km, personas} = viajes[i];
        let tarifa = 0;

        switch(tipo){
            case "A": tarifa = 2.0; break;
            case "B": tarifa = 2.5; break;
            case "C": tarifa = 3.0; break;
            default: console.log(`Tipo de autobús inválido en viaje ${i+1}`); i++; continue;
        }

        // si hay menos de 20 personas, cobrar como si fueran 20
        let personasCalculo = (personas < 20) ? 20 : personas;

        let costoTotal = tarifa * km * personasCalculo;
        let costoPorPersona = costoTotal / personas;

        console.log(`Viaje ${i+1}:`);
        console.log(`  Tipo de autobús: ${tipo}`);
        console.log(`  Distancia: ${km} km`);
        console.log(`  Personas: ${personas}`);
        console.log(`  Costo total: $${costoTotal.toFixed(2)}`);
        console.log(`  Costo por persona: $${costoPorPersona.toFixed(2)}`);
        console.log("--------------------------");
        
        i++;
    }
}

// ================= Consultorio médico – costo de citas =================
// Guardar en un arreglo los números de cita de varios pacientes y calcular el costo y acumulado de cada una
debugger;

/*
let n = parseInt(prompt("Ingrese el número de pacientes: "));
let citas = [];
for(let i=0; i<n; i++){
    let cita = parseInt(prompt(`Ingrese el número de cita del paciente ${i+1}: `));
    citas.push(cita);
}
*/

function costoCitas(citas){
    let i = 0;
    let acumulado = 0;

    while(i < citas.length){
        let cita = citas[i];
        let costo = 0;

        if(cita >= 1 && cita <= 3){
            costo = 200;
        } else if(cita >= 4 && cita <= 5){
            costo = 150;
        } else if(cita >= 6 && cita <= 8){
            costo = 100;
        } else if(cita >= 9){
            costo = 50;
        }

        acumulado += costo;

        console.log(`Paciente ${i+1} → Cita #${cita}`);
        console.log(`  Costo de esta cita: $${costo}`);
        console.log(`  Acumulado hasta ahora: $${acumulado}`);
        console.log("---------------------------");

        i++;
    }
}


// ================= Fábrica El Cometa – precio de venta =================
// Dado un arreglo con tuplas (clave, materia prima), calcular el precio de venta de cada artículo
debugger;

/*
let n = parseInt(prompt("Ingrese el número de artículos: "));
let articulos = [];
for(let i=0; i<n; i++){
    let clave = parseInt(prompt(`Ingrese la clave (1-6) del artículo ${i+1}: `));
    let mp = parseFloat(prompt(`Ingrese el costo de materia prima del artículo ${i+1}: `));
    articulos.push({clave: clave, mp: mp});
}
*/

function precioArticulos(articulos){
    let i = 0;

    while(i < articulos.length){
        let {clave, mp} = articulos[i];
        let manoObra = 0;
        let gastosFab = 0;

        // Se calculan los porcentajes según la clave usando switch
        switch(clave){
            case 1:
                manoObra = mp * 0.80;
                gastosFab = mp * 0.28;
                break;
            case 2:
                manoObra = mp * 0.85;
                gastosFab = mp * 0.30;
                break;
            case 3:
                manoObra = mp * 0.75;
                gastosFab = mp * 0.35;
                break;
            case 4:
                manoObra = mp * 0.75;
                gastosFab = mp * 0.28;
                break;
            case 5:
                manoObra = mp * 0.80;
                gastosFab = mp * 0.30;
                break;
            case 6:
                manoObra = mp * 0.85;
                gastosFab = mp * 0.35;
                break;
            default:
                console.log(`Clave inválida para el artículo ${i+1}`);
                i++;
                continue;
        }

        let costoProduccion = mp + manoObra + gastosFab;
        let precioVenta = costoProduccion * 1.45; // 45% de utilidad

        console.log(`Artículo ${i+1}:`);
        console.log(`  Clave: ${clave}`);
        console.log(`  Materia prima: $${mp.toFixed(2)}`);
        console.log(`  Mano de obra: $${manoObra.toFixed(2)}`);
        console.log(`  Gastos de fabricación: $${gastosFab.toFixed(2)}`);
        console.log(`  Costo de producción: $${costoProduccion.toFixed(2)}`);
        console.log(`  Precio de venta: $${precioVenta.toFixed(2)}`);
        console.log("---------------------------");

        i++;
    }
}

// ================= Banco XYZ – aumento de crédito =================
// Dado un arreglo con tuplas (tipo tarjeta, crédito actual), calcular el nuevo límite de crédito de cada cliente
debugger;

/*
let n = parseInt(prompt("Ingrese el número de clientes: "));
let clientes = [];
for(let i=0; i<n; i++){
    let tipo = parseInt(prompt(`Ingrese el tipo de tarjeta (1, 2, 3 u otro) del cliente ${i+1}: `));
    let credito = parseFloat(prompt(`Ingrese el crédito actual del cliente ${i+1}: `));
    clientes.push({tipo: tipo, credito: credito});
}
*/

function aumentoCredito(clientes){
    let i = 0;

    while(i < clientes.length){
        let {tipo, credito} = clientes[i];
        let porcentaje = 0;

        switch(tipo){
            case 1: porcentaje = 0.25; break;
            case 2: porcentaje = 0.35; break;
            case 3: porcentaje = 0.40; break;
            default: porcentaje = 0.50; break;
        }

        let nuevoCredito = credito + (credito * porcentaje);

        console.log(`Cliente ${i+1}:`);
        console.log(`  Tipo de tarjeta: ${tipo}`);
        console.log(`  Crédito actual: $${credito.toFixed(2)}`);
        console.log(`  Porcentaje de aumento: ${(porcentaje*100).toFixed(0)}%`);
        console.log(`  Nuevo límite de crédito: $${nuevoCredito.toFixed(2)}`);
        console.log("---------------------------");

        i++;
    }
}

// ================= Paquetería internacional – costo de envío =================
// Dado un arreglo con tuplas (peso, zona), calcular el costo de envío de cada paquete, siempre que el peso ≤ 5 kg
debugger;

/*
let n = parseInt(prompt("Ingrese el número de paquetes: "));
let paquetes = [];
for(let i=0; i<n; i++){
    let peso = parseFloat(prompt(`Ingrese el peso del paquete ${i+1} en kg (máx 5kg): `));
    let zona = parseInt(prompt(`Ingrese la zona de destino del paquete ${i+1} (1-5): `));
    paquetes.push({peso: peso, zona: zona});
}
*/

function costoPaquetes(paquetes){
    let i = 0;

    while(i < paquetes.length){
        let {peso, zona} = paquetes[i];
        let tarifa = 0;

        if(peso > 5){
            console.log(`Paquete ${i+1}:`);
            console.log(`  Peso: ${peso}kg → No se puede enviar (supera los 5kg).`);
            console.log("---------------------------");
            i++;
            continue;
        }

        switch(zona){
            case 1: tarifa = 10; break;
            case 2: tarifa = 20; break;
            case 3: tarifa = 30; break;
            case 4: tarifa = 40; break;
            case 5: tarifa = 50; break;
            default:
                console.log(`Paquete ${i+1}: Zona inválida (${zona})`);
                console.log("---------------------------");
                i++;
                continue;
        }

        let costo = peso * tarifa;

        console.log(`Paquete ${i+1}:`);
        console.log(`  Peso: ${peso}kg`);
        console.log(`  Zona: ${zona}`);
        console.log(`  Tarifa: $${tarifa}/kg`);
        console.log(`  Costo de envío: $${costo.toFixed(2)}`);
        console.log("---------------------------");

        i++;
    }
}

// ================= Clasificación de edades =================
// Dado un arreglo con las edades de varias personas, mostrar su categoría (Infante, Niño, Adolescente, Joven, Adulto, Adulto mayor)
debugger;

/*
let n = parseInt(prompt("Ingrese el número de personas: "));
let edades = [];
for(let i=0; i<n; i++){
    let edad = parseInt(prompt(`Ingrese la edad de la persona ${i+1}: `));
    edades.push(edad);
}
*/

function clasificarEdades(edades){
    let i = 0;

    while(i < edades.length){
        let edad = edades[i];
        let categoria = "";

        if(edad >= 1 && edad <= 3){
            categoria = "Infante";
        } else if(edad >= 4 && edad <= 13){
            categoria = "Niño";
        } else if(edad >= 14 && edad <= 17){
            categoria = "Adolescente";
        } else if(edad >= 18 && edad <= 35){
            categoria = "Joven";
        } else if(edad >= 36 && edad <= 64){
            categoria = "Adulto";
        } else if(edad >= 65){
            categoria = "Adulto mayor";
        } else {
            categoria = "Edad inválida";
        }

        console.log(`Persona ${i+1}: ${edad} años → ${categoria}`);
        console.log("---------------------------");

        i++;
    }
}







function autobusTarifa(tipo,distancia,personas){
    let tarifa=0,personaCalculo=0,ct=0,cp=0;
    switch(tipo){
        case "A":
            tarifa=2;
            break;
        case "B":
            tarifa=2.5;
            break;
        case "C":
            tarifa=3;
            break;
    } 
    if (personas < 20){
        personaCalculo=20;
    }else{
        personaCalculo=personas;
    }
    ct=tarifa*distancia*personaCalculo;
    cp=ct/personas;
    console.log(`La tarifa total es: ${ct}`);
    console.log(`La tarifa por persona es: ${cp}`);  

}
function autobusTarifaViajes(n){
    let c=1
    while (c <= n){
        tip = prompt("Ingrese el tipo de autobús (A, B, C): ");
        dist = parseInt(prompt("Ingrese la distancia a recorrer (en km): "));
        pers = parseInt(prompt("Ingrese el número de personas que viajan: "));
        autobusTarifa(tip,dist,pers);
        c++;
    }
}

// ================= Días de la semana =================
// Dado un arreglo con números (1–7), mostrar el día correspondiente de la semana
debugger;

/*
let n = parseInt(prompt("Ingrese la cantidad de números: "));
let diasNum = [];
for(let i=0; i<n; i++){
    let num = parseInt(prompt(`Ingrese un número (1–7) para el día ${i+1}: `));
    diasNum.push(num);
}
*/

function diasSemana(diasNum){
    let i = 0;

    while(i < diasNum.length){
        let num = diasNum[i];
        let dia = "";

        switch(num){
            case 1: dia = "Lunes"; break;
            case 2: dia = "Martes"; break;
            case 3: dia = "Miércoles"; break;
            case 4: dia = "Jueves"; break;
            case 5: dia = "Viernes"; break;
            case 6: dia = "Sábado"; break;
            case 7: dia = "Domingo"; break;
            default: dia = "Número inválido"; break;
        }

        console.log(`Número ${num} → ${dia}`);
        console.log("---------------------------");

        i++;
    }
}



function autobusTarifaArreglos(viajes){
   
    //                   0           1           2
    //                0  1   2     0  1  2   0  1   2
    let ele = []
    console.log(ele, ele[0],ele[1],ele[2]);
    for (let c=0;c < viajes.length; c++){
        ele = viajes[c]
        tip = ele[0];
        dist = ele[1];
        pers = ele[2];
        autobusTarifa(tip,dist,pers);
       
    }
}


/* let numeros=[2,-5,8,-1,0,8,4,-3,-7,6];
let numero = parseInt(prompt("Ingrese un número: "));
positivoNegativo(numero);
positivoNegativo(numeros[3]));
positivoNegativo(0); */
//seriePositivoNegativo(3);
//PositivoNegativoArreglo([2,-5,0])
//autobusTarifa("B",10,18);
//autobusTarifaViajes(2);
// let numeros=[2,-5,8,-1,0,8,4,-3,-7,6];
// console.log(numeros,numeros[0]);
// //           0  1 2  3 4 5 6  7  8 9
const viajes = [["A",10,15],["B",20,25],["C",30,35]];
// //                   0           1           2
// //                0  1   2     0  1  2   0  1   2/ele=viajes[0]

// console.log(viajes,viajes[1][0])
// ele = viajes[0] // ["A",10,15]
// console.log(ele, ele[0],ele[1],ele[2]);
//seriePositivoNegativoArreglo(numeros);
//PositivoNegativoArreglo(numeros); 

autobusTarifaArreglos(viajes);
