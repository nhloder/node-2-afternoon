const express = require('express')
const messages = require('./controllers/messages_controller')
const PORT = 2319
const app = express()
app.use(express.json())
app.use(express.static(__dirname + '/../public/build'));

const messagesBaseUrl = '/api/messages'

// app.get(messagesBaseUrl, messages.test)
app.get(messagesBaseUrl, messages.read)
app.post('/api/messages', messages.create)
app.put(`${messagesBaseUrl}/:id`, messages.update);
app.delete(`${messagesBaseUrl}/:id`, messages.delete);

app.listen(PORT, () => {
    console.log(`${PORT}... WE'VE GOT A ${PORT}!!!`)
})