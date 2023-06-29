/*-*-*conexión a MongoDB y a la colección-*-*-*-*/
var database = db.getSiblingDB("capitulo8")
var coleccion = database.alumnos
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/


/*
updateMany & $set
Actualizar la edad a 40 sólo de los alumnos
que son de Lima
 */

/*
var condicion={
    ciudadOrigen:{$eq:"Lima"}
}

var actualizacion={
    $set:{edad:40}
}
var resultado=coleccion.updateMany(condicion, actualizacion)
print("-*-*-*actualizando alumnos de Lima-*-*-*")
print(resultado)
*/

/*
updateOne & $set
modificar la edad a 60 del primer
alumno que su ciudad de origen termine con 
la letra a
*/
/*
var condicion={
    ciudadOrigen:{$regex:/.+a$/, $options:'i'}
}
var actualizacion={
    $set:{edad:60}
}
var resultado=coleccion.updateOne(condicion, actualizacion)
print("Actualizando al primer alumno donde ciudad termina en a")
print(resultado)
*/

/*
$set y agregar elementos
Agregar el atributo nombre a luis@gmail.com
si no existe el atributo nombre
 */
/*
var condicion={
    $and:[
        {correo:{$regex:/^luis.+/}},
        {nombre:{$exists:false}}
    ]
}
var actualizacion={
    $set:{nombre:"Luis"}
}
var resultado=coleccion.updateOne(condicion, actualizacion)
print("añadiendo nombre a luis@gmail.com")
print(resultado)
*/

/*Actualización de documentos embebidos*/

/*
Doc embebido y $set
Actualizar la calle a fresno del alumno
que sea de Arequipa y tenga más de 25 años
*/
/*
var condicion={
    $and:[
        {ciudadOrigen:{$eq:"Arequipa"}},
        {edad:{$gt:25}}
    ]
}

var actualizacion={
    $set:{'direccion.calle':"fresno"}
}
var resultado=coleccion.updateOne(condicion, actualizacion)
print("-*-*-*Actualizando calle-*-*-*")
print(resultado)
*/

/*
añadir campo a doc embebido
Añadir el campo pais:"Perú" dentro de direccion a los 
alumnos que su ciudad sea Lima
 */

/*
var condicion={
    ciudadOrigen:{$eq:"Lima"}
}
var actualizacion={
    $set:{'direccion.pais':"Perú"}
}

var resultado=coleccion.updateMany(condicion, actualizacion)
print("Añadir Perú a los alumnos de Lima")
print(resultado)
*/

/*Actualizando elementos de un arreglo */

/*
$set: 
Actualizar todas las calificaciones 
de las materias de la alumna maria
el valor debe ser 9
 */
/*
var condicion={
    correo:{$regex:/^maria.+/}
}
var actualizacion={
    $set:{'materias.$[].calificacion':9}
}

var resultado=coleccion.updateOne(condicion, actualizacion)
print("-*-*Actualizando todas las materias de maria-*-*")
print(resultado)
*/

/*
modificar la calificacion de la materia de matematicas
a 6 de el alumno luis
 */

var condicion={
    $and:[
        {correo:{$regex:/^luis.+/}},
        {materias:{$elemMatch:{nombre:"matematicas"}}}
    ]
}

var actualizacion={
    $set:{'materias.$.calificacion':6}
}

var resultado=coleccion.updateOne(condicion, actualizacion)
print("modificando materia de matematicas a 6")
print(resultado)





























































