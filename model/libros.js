const libros =  [
    {id: '1', titulo:'El martillo de dios', autor: 'Arthur C. Clarke',ano: 1986},
    {id: '2', titulo:'El hombre bicentenario', autor: 'Isaac Asimov',ano: 1968},
    {id: '3', titulo:'Jurassic Park', autor: 'Michael Crichton',ano: 1988},
    {id: '4', titulo:'Dune', autor: 'Frank Herbert',ano: 1965},
    {id: '5', titulo:'1984', autor: 'George Orwell',ano: 1949},
    {id: '6', titulo:'Neuromancer', autor: 'William Gibson',ano: 1984},
    {id: '7', titulo:'La guia del viajero intergalactico', autor: 'Douglas Adams',ano: 1979},
]


const findLibro = id => {
    return libros.find(libro => libro.id == id)    
}

const findLibros = ()  => {
    return libros
}

const saveLibro = libro => {
    
    const librosIds = []
    librosIds.push(...libros.map(lib => lib.id));
    const max = Math.max(...librosIds)+1;
    libro.id = String(max)

    libro.titulo = libro.titulo
    libro.autor = libro.autor
    libro.ano = parseInt(libro.ano)
        
    libros.push(libro)

    return libro    
}

const updateLibro = (libro,id) => {
    libro.id = id
    const index = libros.findIndex(libro => libro.id == id)
    libros.splice(index, 1, libro)

    return libro    
}

const deleteLibro = id => {
    const index = libros.findIndex(libro => libro.id == id)

    const libro = libros.splice(index, 1)[0]
    
    return libro    
}

export default {
    findLibro,
    findLibros,
    saveLibro,
    updateLibro,
    deleteLibro
}
