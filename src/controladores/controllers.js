const { newConnection } = require("../base_Datos/baseDatos")



//SELECCIONAR LOS LIBROS
async function obtenerBooks(req, res){
        const connection = await newConnection()
        const result = await connection.query("SELECT * FROM books")
        res.json(result[0]);  
        connection.end()
    }


//SELECCIONAR UN LIBRO POR ID
async function obtenerId(req, res){
        const connection = await newConnection()

        const id = req.params.id
        const result = await connection.query("SELECT * FROM books where id = ?", id)

        res.json(result[0]);  
        connection.end()
    }

//AGREGAR UN LIBRO
async function agregarLibro(req, res){
    const connection = await newConnection()

    const {nombre} = req.body
    const result = await connection.query("INSERT INTO books (nombre) values (?)", [nombre])

    res.send(result);

    connection.end()
}

//Eliminar un libro
async function eliminarId(req, res){
    const connection = await newConnection()

    const id = req.params.id
    const result = await connection.query("DELETE FROM books where id = ?", id)

    res.send(result) 
    connection.end()
}

async function editarPorId(req, res){
    const connection = await newConnection()
    const id = req.params.id
    const {nombre} = req.body
    await connection.query("UPDATE books SET nombre = ? WHERE id = ?", [nombre, id])

    res.send("Se actualizó la base de datos correctamente") 
    
    connection.end()
}


    module.exports = {
        obtenerBooks,
        obtenerId,
        agregarLibro,
        eliminarId,
        editarPorId
    }