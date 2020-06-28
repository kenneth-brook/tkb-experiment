import Head from "next/head";
import Header from "./Header";
import "../styles/Style.css";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>TKB Custom Design</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/minty/bootstrap.min.css"
        />
      </Head>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
