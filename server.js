const next = require("next");
const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());

const WooCommerceAPI = require("woocommerce-api");

const WooCommerce = new WooCommerceAPI({
  url: "https://vault.tkbcustomdesign.com/wp-json/",
  consumerKey: "ck_9dc53aee10f24b9138ff94750a728fa6ab5550d4",
  consumerSecret: "cs_e83d899934e158f15789c0251b9ab16d34dd6056",
  wpAPI: true,
  version: "wc/v1/",
});

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/getProducts", (req, response) => {
    WooCommerce.get("products", function (err, data, res) {
      response.json(JSON.parse(res));
    });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server
    .listen(port, (err) => {
      if (err) {
        throw err;
      }
      console.log(`The Beast Lives on Port ${port}`);
    })
    .catch((ex) => {
      console.error(ex.stack);
      process.exit(1);
    });
});
