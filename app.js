const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET - Caminho: /');
});

app.route('/:endpoint')
  .get((req, res) => {
    const { endpoint } = req.params;
    res.send(`GET - Caminho: /${endpoint}\nQueries: ${JSON.stringify(req.query)}`);
  })
  .post((req, res) => {
    const { endpoint } = req.params;
    res.send(`POST - Caminho: /${endpoint}\nQueries: ${JSON.stringify(req.query)}`);
  })
  .put((req, res) => {
    const { endpoint } = req.params;
    res.send(`PUT - Caminho: /${endpoint}\nQueries: ${JSON.stringify(req.query)}`);
  })
  .delete((req, res) => {
    const { endpoint } = req.params;
    res.send(`DELETE - Caminho: /${endpoint}\nQueries: ${JSON.stringify(req.query)}`);
  });

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
