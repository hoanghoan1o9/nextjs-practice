// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// Models
import { Product } from '@models/Product';

// Services
import { ProductServices } from '@services/productService';

// Constants
import { METHODS } from '@constants/clientApis';

interface Props {
  data?: Product[] | Product;
  success: boolean;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Props>,
) {
  const { method } = req;
  switch (method) {
    case METHODS.DELETE:
      try {
        const { id } = req.body;
        await ProductServices.deleteProductServer(id);

        res.status(200).json({ success: true });
      } catch (error) {
        res
          .status(500)
          .json({ success: false, error: 'fail to delete products' });
      }
      break;
    case METHODS.PATCH:
      try {
        const { title, category, price } = req.body;

        if (!title || !category || !price) throw 'Invalid data';
        await ProductServices.patchProduct({
          title,
          category,
          price,
        } as Product);
        res.status(200).json({ success: true });
      } catch (error) {
        res
          .status(500)
          .json({ success: false, error: 'fail to update products' });
      }
      break;
  }
}
