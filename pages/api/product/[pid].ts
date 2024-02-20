import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const productId = parseInt(req.query.pid as string, 10);
    console.log("Product Id: ",productId);
    try{
      const productData = await prisma.product.findUnique({
        where: {
          p_id: productId
        }
      })
      if(!productData){
          console.log('failed to fetch product');
          return res.status(401).json({ message: 'Product Fetch Failed' });
      }
      console.log('successfully fetched product with id: ', productId);
      console.log(productData)
      return res.status(200).json( productData );
    }
    catch(err){
        return res.status(500).json({ error: err });
    }
  }


  else if (req.method==='PATCH'){
    const productId = parseInt(req.query.pid as string, 10);
    const {productData} = req.body;
    // console.log("Product_id, Product Data", productId, productData);
    try {
        const editedData = await prisma.product.update({
            where: {
                p_id: productId,
            },
            data:{
                title: productData.title,
                description: productData.description,
                price: productData.price,
                image: productData.image,
            }
        });
        if(editedData){
            console.log("Edited Product ",editedData);
            return res.status(200).json( editedData );
        }
        return res.status(401).json({ message: 'Product Fetch Failed' });
    } catch (error) {
      return res.status(500).json({ err: error });
    }
  }

  else if (req.method==='DELETE'){
    const productId = parseInt(req.query.pid as string, 10);
    try {
        const deletedData = await prisma.product.delete({
            where: {
                p_id: productId,
            }
        });
        if(deletedData){
            console.log("Deleted Product ",deletedData);
            return res.status(200).json( deletedData );
        }
        return res.status(401).json({ message: 'Product Delete Failed' });
    } catch (error) {
      return res.status(500).json({ err: error });
    }
  }
}
