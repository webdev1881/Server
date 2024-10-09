import { Pool } from "pg";
import dotenv from 'dotenv'
dotenv.config()

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

pool.connect((err) => {
    if (err) throw err
    console.log("Connect to PostgreSQL successfully!")
})

export default pool