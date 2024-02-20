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
}

