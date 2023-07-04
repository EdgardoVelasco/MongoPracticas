/*conexion a la base de datos*/
var database=db.getSiblingDB("capitulo9")
var coleccion=database.alumnos
/*****************************/


/*Eliminar
el atributo edad del alumno edgar 
*/
/*
var condicion={
    correo:{$regex:/^ed.+/}
}
var eliminacion={
    $unset:{edad:""}
}

var resultado=coleccion.updateOne(condicion, eliminacion)
print(resultado)
*/


/*Eliminar el atributo calle 
de los alumnos que sean de Lima*/

/*
var condicion={
    ciudadOrigen:{$eq:"Lima"}
}

var eliminacion={
    $unset:{'direccion.calle':""}
}
var resultado=coleccion.updateMany(condicion, eliminacion)
print(resultado)
*/


/*Eliminar la calificacion
de matematicas del alumno ed*/

var condicion={
    $and:[ 
        {correo:{$regex:/^ed.+/}},
        {materias:{$elemMatch:{nombre:{$eq:"matematicas"}}}}
    ]
}

var eliminacion={
    $unset:{'materias.$.calificacion':""}
}

var resultado=coleccion.updateOne(condicion, eliminacion)
print(resultado)


/*
Eliminar la materia de matematicas
de los alumnos de Lima
 */
/*
var condicion={
    ciudadOrigen:{$eq:"Lima"}
}
var eliminacion={
    $pull:{materias:{calificacion:{$gte:9}}}
}
var resultado=coleccion.updateMany(condicion, eliminacion)
print(resultado)
*/


/*Eliminando por completo a un documento*/

/*deleteMany*/
/*
 Eliminar a los alumnos que sean de Lima
 */
/*
var condicion={
    ciudadOrigen:{$eq:"Lima"}
}
var resultado=coleccion.deleteMany(condicion)
print(resultado)
*/

/*deleteOne*/
/*Eliminar al primer alumno
que tenga la materia de arte*/
/*
var condicion={
    materias:{$elemMatch:{nombre:{$eq:"arte"}}}
}
var resultado=coleccion.deleteOne(condicion)
print(resultado)
*/































































