import express, { Request, NextFunction, Response, } from "express"
// import cors from 'cors'
import  ProductsRouter  from './src/products/products.controller'
import dotenv from 'dotenv'
import { auth } from './src/auth'
// import  logger  from "./src/utils/log"

dotenv.config()

const app = express()
console.log( process.env.PORT )

// app.use(cors())

app.use( auth )



async function main() {

    app.use(express.json())

    app.use('/api/v1/products', ProductsRouter )
    
    
    app.all('*', (err: Error, req: Request, res: Response) => {
        res.status(404).json({ message: 'Not found' })
    })
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500).json({ message: 'MY_ERROR ' + err})
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log('Server is running on port ' + process.env.PORT)
    })

}

main()

