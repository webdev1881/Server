import { PrismaClient, Book } from "@prisma/client";
import { IProduct } from "./product.type";

export class ProductsService {
    
    private prisma = new PrismaClient()

    createProduct(product: IProduct) {
        return this.prisma.book.create({ data: product })
    }

    getProducts() {
        return this.prisma.book.findMany()
    }

}

// import postgre from '../database'
// console.log( 'postgre: ' + postgre );

// export class ProductsService {
    
//     async getProducts() {
//         const { rows } = await postgre.query("select * from books")
//         return rows
//     }

// }