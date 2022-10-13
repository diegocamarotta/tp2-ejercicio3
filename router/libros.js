import express from 'express'
import controller from '../controller/libros.js'


const router = express.Router()

router.get('/:id?', controller.getLibros)

router.post('/', controller.postLibro)

router.put('/:id', controller.putLibro)

router.delete('/:id', controller.deleteLibro)


export default router