require("dotenv").config();
const axios = require("axios");
const express = require("express");
const router = express.Router();
const authorize = require("../middleware/authorize");
const config = require("config");
const Stock = require("../models/stock");

router.get("/", async (req, res) => {
  try {
    const options = {
      method: "GET",
      url: "https://real-time-finance-data.p.rapidapi.com/stock-quote",
      params: {
        symbol: "AAPL:NASDAQ",
        language: "en",
      },
      headers: {
        "X-RapidAPI-Key": process.env.RTF_TOKEN,
        "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    console.log(response.data);
    return res.send(response.data);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});

router.post("/", async (req, res) => {
  const { ticker } = req.body;
  if (!ticker) return res.status(400).send("Ticker symbol is required");

  try {
    const options = {
      method: "GET",
      url: "https://real-time-finance-data.p.rapidapi.com/stock-quote",
      params: {
        symbol: `${ticker}:NASDAQ`,
        language: "en",
      },
      headers: {
        "X-RapidAPI-Key": process.env.RTF_TOKEN,
        "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    console.log(response.data);
    return res.send(response.data);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

// require("dotenv").config();
// const axios = require("axios");
// const express = require("express");
// const router = express.Router();
// const authorize = require("../middleware/authorize");
// const config = require("config");

// const Stock = require("../models/stock");

// router.get("/", (req, res) => {
//   const data = axios
//     .get(
//       `https://cloud.iexapis.com/v1/stock/AAPL/quote/5?token=${process.env.IEX_TOKEN}`
//     )
//     .then((res) => {
//       console.log(res.data);
//       return res.data;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   //return res.send(data.data);
// });

// router.post("/", (req, res) => {
//   const { ticker } = req.body;

//   /*
//     const newStock = new Stock({
//         name: req.body.name,
//         price: req.body.price,
//         quantity: req.body.quantity
//     });

//     newStock.save().then(stock => res.json(stock));
//     */
// });

// module.exports = router;
