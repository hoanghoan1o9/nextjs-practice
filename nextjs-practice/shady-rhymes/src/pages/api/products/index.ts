// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// Models
import { Product } from '@models/Product';

// Services
import { addProduct, getProductList } from '@services/productService';

// Constants
import { API } from '@constants/clientApis';

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
    case API.METHODS.GET:
      try {
        const products = await getProductList(API.ENDPOINTS.PRODUCTS);
        res.status(200).json({ success: true, data: products });
      } catch (error) {
        res.status(500).json({ success: false, error: 'fail to get products' });
      }
      break;

    case API.METHODS.POST:
      try {
        const { title, category, price, image } = req.body;
        if (!title || !category || !price || !image.url) throw 'Invalid data';

        const newProduct = await addProduct(
          API.URL.BASE as string,
          {
            title,
            category,
            price,
            image,
          } as Product,
        );

        res.status(200).json({ success: true, data: newProduct });
      } catch (error) {
        res
          .status(500)
          .json({ success: false, error: 'fail to add new products' });
      }
      break;
  }
}
