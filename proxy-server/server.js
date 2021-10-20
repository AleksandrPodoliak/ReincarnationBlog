import express from "express";
import cors from "cors"
import axios from "axios";

const app = express()

app.use(express.json())
app.use(cors());
app.options('*', cors());

app.post('/telegramAPI', (req, res) => {
  try {
    const apiUrl = `https://api.telegram.org/bot${process.env.TOKEN}/sendMessage`;
    axios.post(apiUrl, {
      chat_id: process.env.CHAT_ID,
      text: `Новая заявка №${req.body.id} от:\n\n${req.body.userName}\n${req.body.userPhone}\n${req.body.userEmail}`,
    });
    res.send({result: "ok"});
  } catch (error) {
    res.send({result: "error"});
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})
