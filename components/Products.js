const Product = (props) => {
  const { product } = props;
  return (
    <div className="product-card">
      <div className="card mb-3">
        <h3 className="card-header">{product.name}</h3>
        <img src={product.images[0].src} alt="Product image" />
        <div className="card-body">
          <h6 className="price">${product.price}</h6>
          <a href="" className="btn btn-secondary text-center">
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
