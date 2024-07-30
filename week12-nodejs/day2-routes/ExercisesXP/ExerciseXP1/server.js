import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Homepage'))
app.get('/about', (req, res) => res.send('About the page'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))