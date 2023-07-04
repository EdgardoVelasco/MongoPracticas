/*conexion*/
/* creacion de base de datos*/
var database=db.getSiblingDB("nplCurso")
var coleccion=database.continentes
/*-*-*-*-*-*-*-*-*-*-**/

var resultado=coleccion.find().sort({superficie:-1}).limit(1)
var documento=resultado.next()
print(documento)
var deleteResultado=coleccion.deleteOne({
    _id:{$eq:documento._id}
})
print(deleteResultado)
