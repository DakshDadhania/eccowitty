import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
      try{
        const productData = await prisma.product.findMany({})
        if(!productData){
            console.log('failed to fetch products');
            return res.status(401).json({ message: 'Product Fetch Failed' });
        }
        console.log('successfully fetched all products');
        console.log(productData)
        return res.status(200).json( productData );
      }
      catch(err){
          return res.status(500).json({ error: err });
      }
    }


    else if (req.method === 'POST') {
      // get data from body
      const request = req.body
      const { title, description, price, image } = request;
      const priceInt = parseInt(price, 10);
      // console.log("Title: ", title);

      try{
        const newProduct = await prisma.product.create({
          data: {
            title: title,
            description: description,
            price: priceInt,
            image: image,
          },
        })
        if(newProduct){
          console.log('successfully created a new product');
          console.log(newProduct)
          return res.status(200).json( newProduct );
        }
        console.log('failed to create a new product');
        return res.status(401).json({ message: 'Product Creation Failed' });
      }
      catch(err){
          return res.status(500).json({ error: err });
      }
    }
}