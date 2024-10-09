import postgre from '../database'
console.log( 'postgre: ' + postgre );

export class ProductsService {
    
    async getProducts() {
        const { rows } = await postgre.query("select * from books")
        return rows
    }

}