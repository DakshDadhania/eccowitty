import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try{
      const request = req.body;
      const username = request.username;
      const email = request.email;
      const password = request.password;
      // console.log('Credentials: ', username)
      try{
        console.log("fetching details");
        const user = await prisma.admin.findUnique({
            where: {
                name: username,
                email: email,
                password: password,
            },
        });
        if(!user){
            console.log('failed login');
            return res.status(401).json({ message: 'Login Failed' });
        }
        console.log('successful login');
        return res.status(200).json({ message: 'Login Succesful' });
      }
      catch(err){
          return res.status(500).json({ error: err });
      }
    }
    catch(err){
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

