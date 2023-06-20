/* Crear una base de datos **/
var baseDatos=db.getSiblingDB("capitulo3") //use 

/*Crear coleccion*/
baseDatos.personas.drop() //elimina la colección si existe
baseDatos.createCollection("personas") //crea colección
var coleccion=baseDatos.personas //obtengo la referencia de la colección

/*documentos*/
var documento1={ 
    nombre:"Edgar", edad:30, direccion:{calle:24, ciudad:"CDMX"}
}

var documento2={
    nombre:"Luz",edad:29, direccion:{calle:50, ciudad:"Lima"}
}
/*insertar*/
var resultado1=coleccion.insertOne(documento1)
var resultado2=coleccion.insertOne(documento2)
print("-*-*-*-*Resultado1-*-*-*")
print(resultado1)
print("-*-*-*-*Resultado2-*-*-*-")
print(resultado2)






