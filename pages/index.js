import Layout from "../components/Layout";

import clientConfig from "../client-config";

import fetch from "isomorphic-unfetch";
import Product from "../components/Products";

const Index = (props) => {
  console.warn(props);

  const { products } = props;

  return (
    <Layout>
      {products.length
        ? products.map((product) => <Product product={product} />)
        : ""}
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch(`${clientConfig.siteUrl}/getProducts`);
  const productsData = await res.json([]);

  return {
    products: productsData,
  };
};

export default Index;
