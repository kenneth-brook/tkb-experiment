const Product = (props) => {
  const { product } = props;
  return (
    <div className="card mb-3" key={product.id}>
      <h3 className="card-header">{product.name}</h3>
      <img src={product.images[0].src} alt="Product image" />
      <div className="card-body">
        <h6 className="card-subtitle text-muted">{product.price}</h6>
      </div>
    </div>
  );
};

export default Product;
