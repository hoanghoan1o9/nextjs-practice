// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// Models
import { Product } from '@models/Product';

// Services
import { ProductServices } from '@services/productService';

// Constants
import { METHODS, API_ENDPOINTS } from '@constants/clientApis';

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
    case METHODS.GET:
      try {
        const products = await ProductServices.getProductList(
          API_ENDPOINTS.PRODUCTS,
        );
        res.status(200).json({ success: true, data: products });
      } catch (error) {
        res.status(500).json({ success: false, error: 'fail to get products' });
      }
      break;
    case METHODS.POST:
      try {
        const { title, category, price } = req.body;
        if (!title || !category || !price) throw 'Invalid data';
        const newProduct = await ProductServices.addProduct({
          title,
          category,
          price,
        } as Product);
        res.status(200).json({ success: true, data: newProduct });
      } catch (error) {
        res
          .status(500)
          .json({ success: false, error: 'fail to add new products' });
      }
      break;
  }
}
