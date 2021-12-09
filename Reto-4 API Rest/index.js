const express = require('express');
const morgan = require('morgan');

const agenda = [
  {
    id: 1,
    name: 'Jose Carlos',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Juan Jose',
    number: '040-654321',
  },
  {
    id: 3,
    name: 'Cristian Moreno',
    number: '040-1678912',
  },
  {
    id: 4,
    name: 'German Escobar',
    number: '040-895634',
  },
  {
    id: 5,
    name: 'Michael Jackson',
    number: '040-987651',
  },
];

const app = express();
app.use(express.json());
morgan.token('body', (req) => {
  return JSON.stringify(req.body);
});
app.use(
  morgan(function (tokens, req, res) {
    const method = tokens.method(req, res);
    const status = tokens.status(req, res);
    const url = tokens.url(req, res);
    const cLength = tokens.res(req, res, 'content-length');
    const time = tokens['response-time'](req, res);
    const data = tokens.body(req, res);
    return `📝 ${method} @ ${url}-> status:${status} ${Object.keys(data) > 0 ? '~' + data : ''}~ ${cLength} bytes ~ in ${time} ms`;
  })
);

app.get('/', (request, response) => {
  response.send('<h1> Should display req </h1');
});

app.get('/api/', (request, response) => {
  response.send('<h4> This should display api calls </h4');
});

app.get('/api/persons', (request, response) => {
  response.json(agenda);
});

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const person = agenda.find((person) => person.id === id);
  if (!person) {
    response.status(404).send('404. ID not found');
  }
  response.json(person);
});

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const person = agenda.find((person) => person.id === id);
  console.log(person);
  if (!person) {
    response.sendStatus(204);
  }
  agenda.splice(agenda.indexOf(person), 1);
  response.status(202).json(person);
});

const generateId = (agenda) => {
  const maxId = agenda.length > 0 ? Math.max(...agenda.map((p) => p.id)) : 0;
  return maxId + 1;
};

app.post('/api/persons', (request, response) => {
  const person = request.body;
  if (!person?.name || !person.number) {
    return response
      .status(400)
      .json({ error: 'content missing or not formatted' });
  } else if (agenda.find((p) => p.number === person.number)) {
    return response.status(403).json({ error: 'Number already in phonebook' });
  } else if (agenda.find((p) => p.name === person.name)) {
    return response.status(403).json({ error: 'Name already in phonebook' });
  }

  contact = { ...person, id: generateId(agenda) };
  agenda.push(contact);
  response.status(201).json(contact);
});

app.get('/api/info', (request, response) => {
  response.write(`<p> Phonebook has info for ${agenda.length} people. </p>`);
  response.write(
    `<p> ${new Date().toDateString()} ${new Date().toTimeString()} </p>`
  );
  response.send();
});

//start server
const PORT = 8080;
app.listen(PORT, () =>
  console.debug(`App listening on: http://localhost:${PORT}/`)
);
