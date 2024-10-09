import {Router} from 'express'
import {ProductsService} from './products.service'
const ProductRouter = Router()


const productsService = new ProductsService()

// ProductRouter.post('/', async (req, res) => {
//     const product = await productsService.createProduct(req.body )
//     res.status(201).json(product)
// })

ProductRouter.get('/', async (req, res) => {
    const products = await productsService.getProducts()
    res.status(200).json({data: products})
})

export default ProductRouter