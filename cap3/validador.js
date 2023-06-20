/*referencia a capitulo3*** */
var dataBase=db.getSiblingDB("capitulo3")

/*Validador: Obliga que dentro de los documentos 
de la colección alumnos tengan el atributo nombre con una
longitud máxima de 8 y que sea de tipo "string"
 */
dataBase.alumnos.drop()
dataBase.createCollection("alumnos", {validator:{
    $jsonSchema:{
        bsonType:"object",
        required:["nombre", "edad"],
        properties:{
            nombre:{
                bsonType:"string",
                maxLength: 8
            }
        }
    }
}})
