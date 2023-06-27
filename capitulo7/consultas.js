/*conexion a base y coleccion */
var database=db.getSiblingDB("capitulo7")
var coleccion=database.alumnos
/*-*-*-*-*-*-*-*-*-*-*-*-*-*/


/*
$lt: mostrar a los alumnos menores a 27 años
 */
var condicion={
    edad:{$lt:27}
}
var resultado=coleccion.find(condicion)
print("-*-*-*Alumnos < 27-*-*-*-*")
print(resultado)

/*
$lte: mostrar a los alumnos con un 
edad menor o igual a 30 años
 */
var condicion={
    edad:{$lte:30}
}
var resultado=coleccion.find(condicion)/*.count()*/
print("-*-*-*alumnos <=30-*-*-*")
print(resultado)

/* 
$gt: mostrar a los alumnos con una edad mayor a 30
 */
var condicion={
    edad:{$gt:30}
}
var resultado=coleccion.find(condicion)
print("-*-*-*alumnos >30-*-*-*")
print(resultado)

/*
$eq: mostrar alumnos de Lima
 */
var condicion={
    /*ciudadOrigen:{$eq:"Lima"}*/
    ciudadOrigen:"Lima"
}
var resultado=coleccion.find(condicion)
print("-*-*-*Alumnos de Lima-*-*-*")
print(resultado)

/*
$ne: mostrar a los alumnos que no sean de Lima
*/
var condicion={
    ciudadOrigen:{$ne:"Lima"}
}
var resultado=coleccion.find(condicion)
print("-*-*-*alumnos que no son de Lima-*-*-*")
print(resultado)

/*
$and:
mostrar a los alumnos de Lima 
y que tenga más de 30 años
 */

var condicion={
    $and:[
        {ciudadOrigen:{$eq:"Lima"}},
        {edad:{$gt:30}}
    ]
}
var resultado=coleccion.find(condicion)
print("-*-*-*alumnos de lima y >30-*-*")
print(resultado)


/*
$or
mostrar a los alumnos de Arequipa o Cusco
 */
var condicion={
    $or:[
        {ciudadOrigen:"Arequipa"},
        {ciudadOrigen:"Cusco"}
    ]
}
var resultado=coleccion.find(condicion)
print("-*-*-* alumnos de Arequipa o Cusco-*-*-*")
print(resultado)

/*
$not
Mostrar a los alumnos que no sean mayores a 30
 */
var condicion={
    edad:{$not:{$gt:30}}
}

var resultado=coleccion.find(condicion)
print("-*-*-*Alumnos que no son mayores a 30-*-*-*")
print(resultado)


/*
$regex:
mostrar a los alumnos donde su correo 
comience con una vocal
 */

var condicion={
    correo:{$regex:/^[a,e,i,o,u].+/, $options:'i'}
}
var resultado=coleccion.find(condicion)
print("-*-*-*personas que su correo comienza con una vocal-*-*-*")
print(resultado)


/*
$regex: 
mostrar a los alumnos donde su ciudad de origen termine con la letra 
a | o
 */
var condicion={
    ciudadOrigen:{$regex:/.+[a,o]$/, $options:'i'}
}
var resultado=coleccion.find(condicion)
print("-*-*-*-*alumnos con ciudadorigen que termina con a u o-*-*-*")
print(resultado)


/*documento embebido*/
/*mostrar a los documentos donde su calle sea mayo*/

var condicion={
    'direccion.calle':{$eq:"mayo"}
}
var resultado=coleccion.find(condicion)
print("-*-*-*alumnos que su calle es mayo-*-*-*")
print(resultado)


/*
elemMatch: 
Mostrar a los alumnos que tengan la materia de arte
*/

var condicion={
    materias:{$elemMatch:{nombre:{$eq:"arte"}}}
}
var resultado=coleccion.find(condicion)
print("-*-*-*Alumnos con la materia de arte-*-*-*")
print(resultado)























