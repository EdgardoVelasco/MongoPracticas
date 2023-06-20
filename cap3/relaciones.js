/*referencia de capitulo3**/
var dataBase=db.getSiblingDB("capitulo3")

/*crear colecciones*/
dataBase.ventas.drop()
dataBase.clientes.drop()
dataBase.createCollection("ventas")
dataBase.createCollection("clientes")

var coleccion1=dataBase.ventas
var coleccion2=dataBase.clientes

/*documentos de clientes*/
var cliente1={_id:1, nombre:"Edgar", correo:"ed@gmail.com"}
var cliente2={_id:2, nombre:"Karen", correo:"karen@gmail.com"}
var cliente3={_id:3, nombre:"Waldir", correo:"waldir@gmail.com"}

/*documentos de ventas*/
var venta1={_id:1, precios:[25,12,23], cliente_id:1}
var venta2={_id:2, precios:[45,43,23], cliente_id:1}
var venta3={_id:3, precios:[25,12,23], cliente_id:3}
var venta4={_id:4, precios:[25,12,23], cliente_id:4}



/*Insertando clientes y ventas */
//clientes
var resultado1=coleccion2.insertMany([cliente1, cliente2, cliente3])
//ventas
var resultado2=coleccion1.insertMany([venta1, venta2, venta3, venta4])

print("-*-*-*Resultado1-*-*-*")
print(resultado1)
print("-*-*-*-*Resultado2-*-*-*")
print(resultado2)



















