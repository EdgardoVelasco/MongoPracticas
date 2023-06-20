/*Crear base y coleccion */
var database=db.getSiblingDB("capitulo6")
database.personas.drop()
database.createCollection("personas",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["nombre"],
            properties:{
                nombre:{bsonType:"string", maxLength:15}
            }
        }
    }
})


/*-*-*-*documentos-*-*-**/
var doc1={nombre:"Edgardo", edad:30}
var doc2={nombre:"Dany", edad:32}
var doc3={name:"Angel", edad:30}
var doc4={nombre:"Percy", edad:31}
var doc5={nombre:"Melissa", edad:25}

/*-*-*-*-*ordered-*-*-*-*-*/
try{

    var resultado= database.personas.insertMany(
       [doc1,doc2,doc3,doc4,doc5], 
      {ordered:false}
    )

}catch(error){
    print("-*-*Fallo en la inserción-*-*-*")
    print(error.writeErrors[0].err.op)
}


