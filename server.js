const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/get-header', (req, res) => {
  res.set({ 'custom-header': '123456789' });
  res.status(200).send({ network: 'custom-header의 값은 123456789입니다.' });
});

app.get('/200', (req, res) => {
  res.status(200).send({ id: 1, name: 'john' });
});

// 브라우저의 network 탭을 보면 disk cache가 발생한다.
app.get('/301', (req, res) => {
  // 브라우저를 location으로 다시 요청하게 한다.
  res.set('location', 'http://localhost:3000/200'); 
  res.status(301).send();
});

app.post('/200', (req, res) => {
  res.status(200).send({ requestBody: req.body });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
