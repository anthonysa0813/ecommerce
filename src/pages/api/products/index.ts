import { NextApiRequest, NextApiResponse } from "next"
import { connectDB } from "utils/config"
import Product from "../../../models/Products"

connectDB()


type Producttype = {
    title: string,
    price: string,
    discount: string,
    starts: string, 
    description: string,
    image: string
};

type ProductTypeError = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Producttype | Producttype[] | ProductTypeError>
  ) {
    switch (req.method) {
        case "GET":
            const products = await Product.find()
            return res.status(200).json(products)
        case "POST":
            const { body } = req
            const newProduct = new Product(body)
            await newProduct.save()
            return res.status(200).json(newProduct)
        default:
            return res.status(400).json({
                message: "Invalid method"
            })
    }
}
  