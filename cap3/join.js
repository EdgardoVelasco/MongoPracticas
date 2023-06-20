/*referencia a capitulo3 1*/
var dataBase=db.getSiblingDB("capitulo3")
var coleccionVentas=dataBase.ventas


/*unión entre 2 colecciones*/
var resultado=coleccionVentas.aggregate([
    {$lookup:{
        from: 'clientes',
        localField: 'cliente_id',
        foreignField: '_id',
        as: 'datos_cliente'
    }}
])

print("-*-*-*resultado-*-*-*")
print(resultado)