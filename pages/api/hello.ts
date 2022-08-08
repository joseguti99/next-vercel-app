import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  lastName: string;
  checked: boolean;
}

export default function handler(req: NextApiRequest , res: NextApiResponse <Data> ) {
  
  res.status(200).json({ name: 'John Doe', lastName: 'Biden', checked: false })
}
