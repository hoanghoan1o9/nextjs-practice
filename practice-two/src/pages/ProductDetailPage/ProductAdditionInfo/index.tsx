// Libs
import React from 'react';

// Models
import { Product } from 'models/product';

// Styles
import './productAdditionalInfo.css';

interface Props {
  product: Product;
  weight?: number;
  dimensions?: string;
  colors?: string;
  material?: string;
}

const ProductAdditionalInfo = ({ product }: Props): JSX.Element => (
  <section className="additional-info">
    <h3 className="additional-info-heading">Additional information</h3>
    <p className="additional-info-weight">
      Weight: <span className="info">{product.weight}</span>
    </p>
    <p className="additional-info-dimension">
      Dimensions: <span className="info">{product.dimensions}</span>
    </p>
    <p className="additional-info-color">
      Colors: <span className="info">{product.colors}</span>
    </p>
    <p className="additional-info-material">
      Material: <span className="info">{product.material}</span>
    </p>
  </section>
);

export default ProductAdditionalInfo;
