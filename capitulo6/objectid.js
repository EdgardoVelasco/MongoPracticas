/*-*-*-*Creando objectId-*-*-*-*/
var object=ObjectId()

/*-*-*-*Funciones de object Id-*-*-*-*- */
print("-*-*Timestamp-*-*")
print(object.getTimestamp())

/*Devuelve el valor en objectId en cadena*/
print("-*-*-*toString()-*-*-*-*")
print(object.toString())

/*Retorna el objeto y su contenido */
print("-*-*-*valueOf()-*-*-*")
print(object.valueOf())